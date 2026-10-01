import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
  const { login, isAuthenticated, callsign, demoMode } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [booting, setBooting] = useState(true)
  const from = location.state?.from || '/archives'

  useEffect(() => {
    if (isAuthenticated) navigate(from, { replace: true })
  }, [from, isAuthenticated, navigate])

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const clean = input.trim()
    if (!clean) return setError('// CALLSIGN REQUIRED')
    if (clean.length < 3) return setError('// CALLSIGN TOO SHORT - MINIMUM 3 CHARACTERS')
    if (!demoMode) return setError('// PRODUCTION MODE BLOCKED - BACKEND AUTH REQUIRED')
    if (login(clean)) navigate(from, { replace: true })
  }

  return (
    <div className="min-h-screen bg-void text-aan-white font-mono flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.15) 2px, rgba(255,255,255,0.15) 3px)' }} />
      <div className="relative w-full max-w-lg border border-titan-gold/30 bg-abyss/60 p-8">
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-titan-gold" /><span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-titan-gold" /><span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-titan-gold" /><span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-titan-gold" />
        <p className="text-[10px] text-aan-white/40 tracking-widest mb-1">AEGIS ASCENSION NEXUS</p>
        <p className="text-[10px] text-aan-white/40 tracking-widest mb-6">ARCHIVE ACCESS TERMINAL // NODE 07</p>
        <h1 className="font-display text-2xl md:text-3xl tracking-widest text-titan-gold mb-8 animate-flicker">CREDENTIAL GATE</h1>
        {booting ? <div className="space-y-2 text-xs text-aan-white/50"><p>&gt; establishing handshake with Helion node...</p><p>&gt; verifying archive integrity... <span className="text-titan-emerald">OK</span></p><p>&gt; checking local session cache... <span className="text-titan-emerald">OK</span></p><p className="text-titan-gold">&gt; awaiting caller credentials_</p></div> : <form onSubmit={handleSubmit} className="space-y-5"><div><label htmlFor="callsign" className="block text-[10px] text-aan-white/40 tracking-widest mb-2">AAN CALLSIGN</label><div className="flex items-center gap-2 border border-titan-gold/40 bg-void px-3 py-2 focus-within:border-titan-gold transition-colors"><span className="text-titan-gold text-xs tracking-widest">ID&gt;</span><input id="callsign" autoFocus value={input} onChange={(event) => { setInput(event.target.value); setError('') }} maxLength={24} spellCheck={false} placeholder="ENTER CALLSIGN" className="flex-1 bg-transparent text-sm text-titan-emerald outline-none placeholder:text-aan-white/20 tracking-widest uppercase" /></div></div>{error && <p className="text-xs text-forge-magma tracking-widest animate-flicker">{error}</p>}<button type="submit" className="w-full border border-titan-gold/60 py-3 text-xs tracking-widest text-titan-gold hover:bg-titan-gold/10 transition-colors">ESTABLISH SESSION</button><div className="border-l-2 border-cryo-blue/40 bg-cryo-blue/5 p-3 text-[10px] text-aan-white/50 leading-relaxed"><p className="text-cryo-blue tracking-widest mb-1">// NEW CALLER NOTE</p><p>Callsigns are local. Re-enter the same callsign to resume your archive. Fresh callsigns start at CITIZEN clearance. Your record is your own.</p></div>{callsign && <button type="button" onClick={() => setInput(callsign)} className="w-full text-left text-[10px] text-aan-white/40 hover:text-titan-gold tracking-widest transition-colors">-&gt; RESUME AS: {callsign}</button>}</form>}
        {!demoMode && (
          <div className="mt-6 border border-forge-magma/50 bg-forge-magma/10 p-3 text-[10px] text-forge-magma tracking-widest leading-relaxed">
            // SECURE MODE ENABLED // LOCAL AUTH IS DISABLED // A BACKEND SESSION IS REQUIRED
          </div>
        )}
        <div className="mt-8 pt-4 border-t border-aan-white/10 text-[10px] text-aan-white/30 tracking-widest">// UNAUTHORISED ACCESS IS A CLASS-4 INFRACTION</div>
      </div>
    </div>
  )
}
