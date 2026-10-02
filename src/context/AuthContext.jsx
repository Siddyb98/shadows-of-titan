import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient'

const AuthContext = createContext(null)

function deriveCallsign(user) {
  if (!user) return null
  const metaCallsign = user.user_metadata?.callsign
  if (metaCallsign) return String(metaCallsign).toUpperCase()
  const email = user.email ?? ''
  const local = email.split('@')[0] ?? ''
  return local ? local.toUpperCase().slice(0, 24) : null
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [hydrated, setHydrated] = useState(false)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setHydrated(true)
      return undefined
    }

    let active = true

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return
      setSession(data.session ?? null)
      setHydrated(true)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!active) return
      setSession(nextSession)
      setHydrated(true)
    })

    return () => {
      active = false
      listener?.subscription?.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (!isSupabaseConfigured || !session?.user) {
      setProfile(null)
      return undefined
    }

    let active = true
    supabase
      .from('profiles')
      .select('callsign, clearance_label')
      .eq('id', session.user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (active) setProfile(data ?? null)
      })

    return () => {
      active = false
    }
  }, [session?.user?.id])

  const user = session?.user ?? null
  const callsign = profile?.callsign ?? deriveCallsign(user)
  const clearanceLabel = profile?.clearance_label ?? 'CITIZEN'
  const isAuthority = clearanceLabel === 'VOID'

  const signUp = async (email, password) => {
    if (!isSupabaseConfigured) return { error: 'AUTH BACKEND NOT CONFIGURED' }
    setAuthError('')
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setAuthError(error.message)
      return { error: error.message }
    }
    return { error: null }
  }

  const login = async (email, password) => {
    if (!isSupabaseConfigured) return { error: 'AUTH BACKEND NOT CONFIGURED' }
    setAuthError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setAuthError(error.message)
      return { error: error.message }
    }
    return { error: null }
  }

  const logout = async () => {
    if (!isSupabaseConfigured) return
    await supabase.auth.signOut()
  }

  const value = useMemo(() => ({
    user,
    email: user?.email ?? null,
    callsign,
    clearanceLabel,
    isAuthority,
    sessionStart: session ? Date.parse(session.user?.created_at ?? '') || Date.now() : null,
    isAuthenticated: Boolean(user),
    hydrated,
    supabaseConfigured: isSupabaseConfigured,
    authError,
    clearAuthError: () => setAuthError(''),
    signUp,
    login,
    logout,
  }), [user, callsign, clearanceLabel, isAuthority, session, hydrated, authError])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
