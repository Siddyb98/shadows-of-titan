import { Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useProgression } from '../../context/ProgressionContext'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, hydrated, callsign } = useAuth()
  const { clearanceCooldownUntil } = useProgression()
  const location = useLocation()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!clearanceCooldownUntil || clearanceCooldownUntil <= Date.now()) return undefined
    const timer = window.setInterval(() => setNow(Date.now()), 250)
    return () => window.clearInterval(timer)
  }, [clearanceCooldownUntil])

  if (!hydrated) return <div className="min-h-screen bg-void flex items-center justify-center"><span className="font-mono text-xs text-titan-gold tracking-widest animate-flicker">// AUTHENTICATING...</span></div>
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location.pathname }} replace />
  if (location.pathname.startsWith('/archives') && clearanceCooldownUntil > now) return <div className="archive-cooldown"><div><p className="archive-label text-forge-magma">// T.E.B. TRACE ACTIVE</p><h1>COOLDOWN ACTIVE</h1><p>ARCHIVE ACCESS HAS BEEN SUSPENDED FOR {Math.ceil((clearanceCooldownUntil - now) / 1000)} SECONDS.</p><span>ACCESS LOGGED UNDER CALLSIGN // {callsign}</span></div></div>
  return children
}
