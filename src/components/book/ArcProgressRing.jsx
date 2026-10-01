export default function ArcProgressRing({ value = 0, size = 44, stroke = 3, label }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - Math.min(1, Math.max(0, value)))
  const complete = value >= 1
  return <div className="arc-progress-ring" style={{ width: size, height: size }}><svg width={size} height={size} className="-rotate-90"><circle cx={size / 2} cy={size / 2} r={radius} className="fill-none stroke-aan-white/10" strokeWidth={stroke} /><circle cx={size / 2} cy={size / 2} r={radius} className={`fill-none ${complete ? 'stroke-titan-emerald' : 'stroke-titan-gold'} transition-[stroke-dashoffset] duration-700`} strokeWidth={stroke} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" /></svg><span>{Math.round(value * 100)}</span>{label && <small>{label}</small>}</div>
}
