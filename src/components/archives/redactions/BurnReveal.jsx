import { useEffect, useRef, useState } from 'react'

export default function BurnReveal({ children, reveal }) {
  const [burning, setBurning] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const timerRef = useRef(null)
  useEffect(() => () => clearTimeout(timerRef.current), [])
  const handleClick = () => {
    if (revealed || burning) return
    setBurning(true)
    timerRef.current = setTimeout(() => { setRevealed(true); setBurning(false) }, 700)
  }
  if (revealed) return <span className="text-titan-emerald transition-opacity duration-500">{reveal}</span>
  return <span onClick={handleClick} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && handleClick()} className={`inline-block cursor-pointer select-none bg-forge-magma/30 text-forge-magma/60 hover:bg-forge-magma/50 hover:text-forge-magma transition-all duration-300 ${burning ? 'animate-pulse bg-titan-gold/60 text-transparent' : ''}`} title="CLICK TO BURN AWAY">{children || '[REDACTED]'}</span>
}
