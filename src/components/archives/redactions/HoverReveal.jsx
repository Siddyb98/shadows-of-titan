import { useState } from 'react'

export default function HoverReveal({ children, reveal }) {
  const [shown, setShown] = useState(false)

  return (
    <span
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onFocus={() => setShown(true)}
      onBlur={() => setShown(false)}
      tabIndex={0}
      className={`inline-block cursor-help transition-all duration-300 ${shown ? 'text-titan-emerald' : 'bg-forge-magma/20 text-forge-magma/40 select-none'}`}
      title={shown ? '' : 'HOVER TO DECLASSIFY'}
    >
      {shown ? reveal : children || '[REDACTED]'}
    </span>
  )
}
