import { Link } from 'react-router-dom'
import { useProgression } from '../../context/ProgressionContext'
import { CHAPTERS, getChapterByNumber } from '../../data/book/chapters'

export default function ContinueHero() {
  const { chaptersRead, lastRead } = useProgression()
  const lastChapter = lastRead ? getChapterByNumber(lastRead.number) : null
  const firstUnread = CHAPTERS.find((chapter) => chapter.status === 'published' && !chaptersRead.includes(chapter.number)) ?? null
  const target = lastChapter?.status === 'published' ? lastChapter : firstUnread
  if (!target) return <div className="continue-hero"><p className="archive-label">// NO RECORDS ON FILE</p><p>Every recovered chapter has been read. Await further material.</p></div>
  const percent = lastChapter?.number === target.number ? Math.round((lastRead?.scrollPct ?? 0) * 100) : 0
  const isResume = percent > 2
  return <Link to={`/book/${target.slug}${isResume ? `?t=${lastRead.scrollPct}` : ''}`} className="continue-hero group"><p className="archive-label text-titan-gold">{isResume ? '// RESUME TRANSMISSION' : '// BEGIN TRANSMISSION'}</p><p className="continue-hero-meta">CHAPTER {String(target.number).padStart(2, '0')} · {target.pov?.toUpperCase()}</p><h2>{target.title}</h2>{isResume && <><div className="continue-progress"><span style={{ width: `${percent}%` }} /></div><p className="continue-hero-meta">{percent}% THROUGH · CONTINUE →</p></>}</Link>
}
