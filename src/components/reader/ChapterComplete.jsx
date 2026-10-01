import { Link } from 'react-router-dom'

export default function ChapterComplete({ chapter, next, fragments, clearance }) {
  const progress = Math.min(100, Math.round((chapter.number / 12) * 100))
  return <div className="chapter-complete" role="status">
    <div className="chapter-complete__panel">
      <p className="archive-label text-titan-emerald">// RECORD RECOVERED</p>
      <h2>CHAPTER {chapter.number} COMPLETE</h2>
      {fragments.length > 0 && <div className="chapter-complete__fragment"><span>FRAGMENT DISCOVERED</span>{fragments.map((fragment) => <strong key={fragment.id}>{fragment.id}</strong>)}</div>}
      <div className="chapter-complete__clearance"><div><span>CLEARANCE PROGRESS</span><strong>C{clearance}</strong></div><div className="chapter-complete__track"><i style={{ width: `${progress}%` }} /></div></div>
      {chapter.number >= 45 && <p className="chapter-complete__whisper">VEXA LOGGED THE PRESSURE SEAM. CHECK THE TERMINAL FOR A NEW MEMORY.</p>}
      {next && <Link className="chapter-complete__next" to={`/book/${next.slug}`}>CONTINUE TO CH. {next.number} <span>→</span></Link>}
      <Link className="chapter-complete__index" to="/book">RETURN TO INDEX</Link>
    </div>
  </div>
}