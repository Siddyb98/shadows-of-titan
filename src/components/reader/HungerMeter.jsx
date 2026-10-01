import { useEffect, useState } from 'react'
import { getHungerCurve } from '../../data/reader/hungerCurves'

function valueAt(curve, progress) {
  const point = curve.findIndex(([position]) => position >= progress)
  if (point <= 0) return curve[0][1]
  if (point === -1) return curve[curve.length - 1][1]
  const [rightPosition, rightValue] = curve[point]
  const [leftPosition, leftValue] = curve[point - 1]
  const ratio = (progress - leftPosition) / (rightPosition - leftPosition)
  return Math.round(leftValue + (rightValue - leftValue) * ratio)
}

export default function HungerMeter({ curve = 'default', tone = null }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let frame = 0
    const update = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => { window.removeEventListener('scroll', update); if (frame) window.cancelAnimationFrame(frame) }
  }, [])
  const value = valueAt(getHungerCurve(curve), progress)
  const level = value < 15 ? 'critical' : value < 40 ? 'warning' : 'healthy'
  return <aside className={`hunger-meter hunger-meter--${level} ${tone ? `hunger-meter--${tone}` : ''}`} aria-label={`Energy reserve ${value}%`}><span>ENERGY RESERVE</span><strong>{String(value).padStart(2, '0')}%</strong><div className="hunger-meter__track"><i style={{ width: `${Math.min(100, value)}%` }} /></div></aside>
}
