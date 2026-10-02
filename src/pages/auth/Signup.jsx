import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Signup() {
  const { signUp, isAuthenticated, supabaseConfigured, clearAuthError } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isAuthenticated) navigate('/archives', { replace: true })
  }, [isAuthenticated, navigate])

  useEffect(() => () => clearAuthError(), [clearAuthError])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return
    setError('')
    setSuccess('')

    const cleanEmail = email.trim()
    if (!cleanEmail) return setError('// CALLSIGN EMAIL REQUIRED')
    if (password.length < 8) return setError('// ACCESS KEY TOO SHORT - MINIMUM 8 CHARACTERS')
    if (password !== confirmPassword) return setError('// ACCESS KEYS DO NOT MATCH')
    if (!supabaseConfigured) return setError('// AUTH BACKEND NOT CONFIGURED - SET VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY')

    setSubmitting(true)
    const { error: signUpError } = await signUp(cleanEmail, password)
    setSubmitting(false)
    if (signUpError) {
      setError(`// ${signUpError.toUpperCase()}`)
      return
    }
    setSuccess('// REGISTRATION RECEIVED - CHECK YOUR EMAIL TO CONFIRM YOUR CALLSIGN')
  }

  return (
    <div className="min-h-screen bg-void text-aan-white font-mono flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.15) 2px, rgba(255,255,255,0.15) 3px)' }} />
      <div className="relative w-full max-w-lg border border-titan-gold/30 bg-abyss/60 p-8">
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-titan-gold" /><span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-titan-gold" /><span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-titan-gold" /><span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-titan-gold" />
        <p className="text-[10px] text-aan-white/40 tracking-widest mb-1">AEGIS ASCENSION NEXUS</p>
        <p className="text-[10px] text-aan-white/40 tracking-widest mb-6">ARCHIVE ACCESS TERMINAL // NODE 07</p>
        <h1 className="font-display text-2xl md:text-3xl tracking-widest text-titan-gold mb-8 animate-flicker">NEW CALLSIGN REGISTRATION</h1>
        {success ? (
          <div className="space-y-5">
            <div className="border-l-2 border-titan-emerald/40 bg-titan-emerald/5 p-3 text-xs text-titan-emerald tracking-widest animate-flicker">{success}</div>
            <Link to="/login" className="block w-full text-center border border-titan-gold/60 py-3 text-xs tracking-widest text-titan-gold hover:bg-titan-gold/10 transition-colors">RETURN TO CREDENTIAL GATE</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-[10px] text-aan-white/40 tracking-widest mb-2">AAN CALLSIGN EMAIL</label>
              <div className="flex items-center gap-2 border border-titan-gold/40 bg-void px-3 py-2 focus-within:border-titan-gold transition-colors">
                <span className="text-titan-gold text-xs tracking-widest">ID&gt;</span>
                <input id="email" type="email" autoFocus autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setError('') }} disabled={submitting} spellCheck={false} placeholder="caller@aan.titan" className="flex-1 bg-transparent text-sm text-titan-emerald outline-none placeholder:text-aan-white/20 tracking-widest disabled:opacity-50" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-[10px] text-aan-white/40 tracking-widest mb-2">ACCESS KEY</label>
              <div className="flex items-center gap-2 border border-titan-gold/40 bg-void px-3 py-2 focus-within:border-titan-gold transition-colors">
                <span className="text-titan-gold text-xs tracking-widest">KEY&gt;</span>
                <input id="password" type="password" autoComplete="new-password" value={password} onChange={(event) => { setPassword(event.target.value); setError('') }} disabled={submitting} className="flex-1 bg-transparent text-sm text-titan-emerald outline-none placeholder:text-aan-white/20 tracking-widest disabled:opacity-50" />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-[10px] text-aan-white/40 tracking-widest mb-2">CONFIRM ACCESS KEY</label>
              <div className="flex items-center gap-2 border border-titan-gold/40 bg-void px-3 py-2 focus-within:border-titan-gold transition-colors">
                <span className="text-titan-gold text-xs tracking-widest">KEY&gt;</span>
                <input id="confirmPassword" type="password" autoComplete="new-password" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value); setError('') }} disabled={submitting} className="flex-1 bg-transparent text-sm text-titan-emerald outline-none placeholder:text-aan-white/20 tracking-widest disabled:opacity-50" />
              </div>
            </div>
            {error && <p className="text-xs text-forge-magma tracking-widest animate-flicker">{error}</p>}
            <button type="submit" disabled={submitting} className="w-full border border-titan-gold/60 py-3 text-xs tracking-widest text-titan-gold hover:bg-titan-gold/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {submitting ? <><span className="inline-block w-3 h-3 border-2 border-titan-gold/40 border-t-titan-gold rounded-full animate-spin" aria-hidden="true" />REGISTERING...</> : 'SUBMIT REGISTRATION'}
            </button>
            <div className="border-l-2 border-cryo-blue/40 bg-cryo-blue/5 p-3 text-[10px] text-aan-white/50 leading-relaxed">
              <p className="text-cryo-blue tracking-widest mb-1">// NEW CALLER NOTE</p>
              <p>Access keys must be at least 8 characters. Already have a callsign? <Link to="/login" className="text-titan-gold underline hover:animate-glitch">RETURN TO CREDENTIAL GATE</Link>.</p>
            </div>
          </form>
        )}
        {!supabaseConfigured && (
          <div className="mt-6 border border-forge-magma/50 bg-forge-magma/10 p-3 text-[10px] text-forge-magma tracking-widest leading-relaxed">
            // AUTH BACKEND NOT CONFIGURED // SET VITE_SUPABASE_URL AND VITE_SUPABASE_ANON_KEY // SEE .ENV.EXAMPLE
          </div>
        )}
        <div className="mt-8 pt-4 border-t border-aan-white/10 text-[10px] text-aan-white/30 tracking-widest">// UNAUTHORISED ACCESS IS A CLASS-4 INFRACTION</div>
      </div>
    </div>
  )
}
