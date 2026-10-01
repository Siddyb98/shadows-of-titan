import { useEffect, useRef } from 'react'
import { useProgression } from '../../context/ProgressionContext'

export default function DeathAnchor({ chapter, anchor, amount = 1, children }) {
  const ref = useRef(null)
  const fired = useRef(false)
  const { recordLifeConsumed } = useProgression()
  useEffect(() => {
    if (!ref.current || fired.current) return undefined
    const key = `${chapter}:${anchor}:${amount}`
    const consume = () => {
      if (fired.current || !ref.current) return
      if (ref.current.getBoundingClientRect().top <= window.innerHeight * .8) {
        fired.current = true
        recordLifeConsumed(amount, key)
      }
    }
    consume()
    window.addEventListener('scroll', consume, { passive: true })
    return () => window.removeEventListener('scroll', consume)
  }, [amount, anchor, chapter, recordLifeConsumed])
  return <span ref={ref}>{children}</span>
}