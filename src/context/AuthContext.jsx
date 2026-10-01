import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'sot-auth-v1'
export const AUTHORITY_CALLSIGN = 'AAN-000'
const DEFAULT_AUTH = { callsign: null, clearanceLabel: 'CITIZEN', sessionStart: null }
const DEMO_AUTH_ENABLED = import.meta.env.DEV || import.meta.env.VITE_ENABLE_LOCAL_AUTH === 'true'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(DEFAULT_AUTH)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (DEMO_AUTH_ENABLED && parsed?.callsign) {
          setAuth({ ...DEFAULT_AUTH, ...parsed })
          setHydrated(true)
          return
        }
      }
    } catch {
      // Ignore corrupted local auth state and fall back to default.
    }

    setAuth(DEFAULT_AUTH)
    setHydrated(true)
  }, [])

  const login = (callsign) => {
    if (!DEMO_AUTH_ENABLED) return false

    const clean = callsign.trim().toUpperCase().slice(0, 24)
    if (!clean) return false
    const isAuthority = clean === AUTHORITY_CALLSIGN
    const next = { callsign: clean, clearanceLabel: isAuthority ? 'VOID' : 'CITIZEN', isAuthority, sessionStart: Date.now() }
    setAuth(next)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    return true
  }

  const logout = () => {
    setAuth(DEFAULT_AUTH)
    window.localStorage.removeItem(STORAGE_KEY)
  }

  return <AuthContext.Provider value={{ ...auth, isAuthenticated: DEMO_AUTH_ENABLED && Boolean(auth.callsign), hydrated, login, logout, demoMode: DEMO_AUTH_ENABLED }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
