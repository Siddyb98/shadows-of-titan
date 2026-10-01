import { useProgression } from '../../../context/ProgressionContext'

export default function RedactedBlock({ lines = 8, fragmentKey, reveal }) {
  const { fragments } = useProgression()
  const unlocked = fragmentKey && Array.isArray(fragments) && fragments.includes(fragmentKey)
  if (unlocked && reveal) return <div className="my-3 space-y-2 font-mono text-sm text-titan-emerald/90 leading-relaxed">{Array.isArray(reveal) ? reveal.map((line, index) => <p key={index}>{line}</p>) : <p>{reveal}</p>}</div>
  return <div className="my-3 space-y-2">{Array.from({ length: lines }).map((_, index) => <div key={index} className="h-3 bg-aan-white/10 border border-aan-white/5" style={{ width: `${85 + (index % 3) * 4}%` }} />)}</div>
}
