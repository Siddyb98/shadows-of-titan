import { useEffect, useState } from 'react'
import { useProgression } from '../../../context/ProgressionContext'
import { FRAGMENT_KEYS } from '../../../data/fragmentKeys'

const LOCK_DURATION = 60

export default function FragmentLock({ fragmentKey, children, reveal }) {
  const { fragments, addFragment, addViolation } = useProgression()
  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [lockUntil, setLockUntil] = useState(0)
  const [now, setNow] = useState(Date.now())
  const hasKey = Array.isArray(fragments) && fragments.includes(fragmentKey)
  const isLocked = now < lockUntil
  const remaining = Math.ceil(Math.max(0, lockUntil - now) / 1000)

  useEffect(() => {
    if (!isLocked) return undefined
    const timer = setInterval(() => setNow(Date.now()), 500)
    return () => clearInterval(timer)
  }, [isLocked])

  const handleSubmit = (event) => {
    event.preventDefault()
    const attempt = input.trim().toUpperCase()
    if (!attempt) return
    if (attempt === fragmentKey) {
      addFragment(fragmentKey)
      setIsEditing(false)
      setInput('')
      setError('')
      return
    }
    addViolation()
    setLockUntil(Date.now() + LOCK_DURATION * 1000)
    setNow(Date.now())
    setError(`// T.E.B. TRACE DETECTED - FILE LOCKED FOR ${LOCK_DURATION}S`)
    setInput('')
    setTimeout(() => { setIsEditing(false); setError('') }, 2400)
  }

  if (hasKey) return <span className="text-titan-emerald">{reveal}</span>
  const required = FRAGMENT_KEYS[fragmentKey]
  if (isLocked) return <span className="inline-block bg-forge-magma/20 border border-forge-magma/60 px-2 py-0.5 font-mono text-[10px] text-forge-magma animate-flicker">LOCKED - {remaining}S</span>
  if (isEditing) return <span className="inline-flex flex-col gap-1 align-top"><form onSubmit={handleSubmit} className="inline-flex items-center gap-2"><span className="font-mono text-[10px] text-forge-magma">KEY&gt;</span><input autoFocus value={input} onChange={(event) => setInput(event.target.value)} onBlur={() => !input && setIsEditing(false)} spellCheck={false} className="bg-void border border-forge-magma/50 px-2 py-1 font-mono text-xs text-forge-magma outline-none focus:border-forge-magma w-44" placeholder="FRAGMENT KEY" /></form>{required && <span className="font-mono text-[9px] text-aan-white/30">SOURCE: {required.source}</span>}</span>
  return <span className="inline-flex flex-col gap-1 align-top"><button type="button" onClick={() => setIsEditing(true)} className="inline-block bg-void border border-forge-magma/40 px-2 py-0.5 font-mono text-[10px] text-forge-magma/70 hover:border-forge-magma hover:text-forge-magma transition-colors tracking-widest">[ FRAGMENT LOCK ]</button>{error && <span className="font-mono text-[9px] text-forge-magma animate-flicker">{error}</span>}</span>
}
