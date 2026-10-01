import { Link } from 'react-router-dom'
import { useProgression } from '../../../context/ProgressionContext'

export default function ChapterLock({ chapter, children, reveal }) {
  const { chaptersRead } = useProgression()
  if (chaptersRead.includes(chapter)) return <span className="text-titan-emerald">{reveal}</span>
  return <span className="inline-flex items-center gap-2"><span className="bg-void border border-cryo-blue/40 px-2 py-0.5 font-mono text-[10px] text-cryo-blue/70 tracking-widest">[ READS CH. {chapter} ]</span><Link to={`/book/chapter-${chapter}`} className="font-mono text-[9px] text-aan-white/40 hover:text-cryo-blue transition-colors">→ GO</Link></span>
}
