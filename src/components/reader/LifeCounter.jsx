import { useEffect, useRef, useState } from 'react'
import { useProgression } from '../../context/ProgressionContext'

export default function LifeCounter({ baseline = 0 }) {
  const { livesConsumed = 0 } = useProgression()
  const displayedLives = Math.max(baseline, livesConsumed)
  const previous = useRef(displayedLives)
  const [pulsing, setPulsing] = useState(false)
  useEffect(() => { if (displayedLives > previous.current) { setPulsing(true); const timer = window.setTimeout(() => setPulsing(false), 1500); previous.current = displayedLives; return () => window.clearTimeout(timer) } previous.current = displayedLives }, [displayedLives])
  return <div className={`life-counter has-life ${pulsing ? 'life-counter--pulse' : ''}`}><span>DEATH/S</span><strong>{String(Math.max(1, displayedLives)).padStart(2, '0')}</strong></div>
}
