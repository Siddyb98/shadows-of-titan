import { Link } from 'react-router-dom'

export default function ChapterSpine({ chapters, chaptersRead, lastRead }) {
  const orderedChapters = [...chapters].sort((left, right) => left.number - right.number)
  const readSet = new Set(chaptersRead)
  const colors = { king: 'pov-king', myth: 'pov-myth', nyx: 'pov-nyx', darius: 'pov-darius', voxx: 'pov-voxx', vexal: 'pov-vexal', ekros: 'pov-ekros' }
  const presentPovs = [...new Set(orderedChapters.map((chapter) => chapter.pov).filter(Boolean))]
  return <div className="chapter-spine"><div className="chapter-spine-labels"><span>CH. {orderedChapters[0]?.number ?? '—'}</span><span>VOLUME PROGRESS</span><span>CH. {orderedChapters[orderedChapters.length - 1]?.number ?? '—'}</span></div><div className="chapter-spine-track">{orderedChapters.map((chapter) => { const stub = chapter.status !== 'published'; const content = <span className={`${colors[chapter.pov] ?? 'pov-default'} ${stub ? 'is-stub' : readSet.has(chapter.number) ? 'is-read' : ''} ${lastRead?.number === chapter.number ? 'is-current' : ''}`} />; return stub ? <span key={chapter.slug} className="chapter-spine-segment">{content}</span> : <Link key={chapter.slug} to={`/book/${chapter.slug}`} className="chapter-spine-segment" aria-label={`Chapter ${chapter.number}: ${chapter.title}`}>{content}<b>CH. {chapter.number} · {chapter.title}</b></Link> })}</div><div className="pov-legend"><span>POV:</span>{presentPovs.map((pov) => <span key={pov}><i className={colors[pov] ?? 'pov-default'} />{pov.toUpperCase()}</span>)}</div></div>
}
