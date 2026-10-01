import { Suspense, useEffect, useRef, useState } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import CharacterLink from '../../components/CharacterLink'
import Term from '../../components/reader/Term'
import PreludeShell from '../../components/book/shells/PreludeShell'
import Prelude from '../../data/book/chapters/prelude'
import InteriorShell from '../../components/book/shells/InteriorShell'
import ChapterComplete from '../../components/reader/ChapterComplete'
import { useProgression } from '../../context/ProgressionContext'
import { getAdjacentChapters, getChapterBySlug } from '../../data/book/chapters'
import { FRAGMENT_KEYS } from '../../data/fragmentKeys'

const SHELLS = {
  interior: InteriorShell,
}

export default function ChapterReader() {
  const { slug } = useParams(); const location = useLocation(); const chapter = getChapterBySlug(slug); const { recordChapter, setLastRead, addFragment, clearance, fragments } = useProgression(); const [completion, setCompletion] = useState(null); const completionFired = useRef(false); const progressionActions = useRef({ recordChapter, setLastRead, addFragment })
  progressionActions.current = { recordChapter, setLastRead, addFragment }
  useEffect(() => { completionFired.current = false; setCompletion(null) }, [chapter])
  useEffect(() => { if (!chapter || chapter.status !== 'published') return undefined; progressionActions.current.recordChapter(chapter.number); const params = new URLSearchParams(location.search); const pct = Number.parseFloat(params.get('t') ?? '0'); let frame = 0; const complete = () => { if (completionFired.current) return; completionFired.current = true; const earned = Object.values(FRAGMENT_KEYS).filter((fragment) => fragment.source === 'BOOK' && new RegExp(`Chapter ${chapter.number}(?:\\D|$)`, 'i').test(fragment.location)); earned.forEach((fragment) => progressionActions.current.addFragment(fragment.id)); setCompletion({ fragments: earned, next: getAdjacentChapters(chapter.number).next }) }; const saveNow = () => { const max = document.documentElement.scrollHeight - window.innerHeight; const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0; progressionActions.current.setLastRead(chapter.number, progress); if (progress >= .98) complete() }; const timer = window.setTimeout(() => { if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' }); else if (pct > 0) { const max = document.documentElement.scrollHeight - window.innerHeight; window.scrollTo({ top: max * pct, behavior: 'instant' }) } }, 100); const save = () => { if (frame) return; frame = window.requestAnimationFrame(() => { frame = 0; saveNow() }) }; window.addEventListener('scroll', save, { passive: true }); return () => { window.clearTimeout(timer); window.removeEventListener('scroll', save); if (frame) window.cancelAnimationFrame(frame); saveNow() } }, [chapter, location.hash, location.search])
  if (!chapter) return <Navigate to="/book" replace />
  if (chapter.status !== 'published') return <div className="chapter-recovery"><div><p className="archive-label text-forge-magma">// RECORD NOT YET RECOVERED</p><h1>CHAPTER {chapter.number}</h1><p>{chapter.title.toUpperCase()}</p><Link to="/book">← RETURN TO INDEX</Link></div></div>
  const adjacent = getAdjacentChapters(chapter.number)
  const ChapterComponent = chapter.Component
  if (!ChapterComponent) return <div className="chapter-recovery"><div><p className="archive-label text-forge-magma">// RECORD CONTENT MISSING</p><h1>CHAPTER {chapter.number}</h1><p>{chapter.title.toUpperCase()}</p><Link to="/book">← RETURN TO INDEX</Link></div></div>
  if (chapter.kind === 'prelude') return <><PreludeShell meta={chapter}><Prelude /></PreludeShell>{completion && <ChapterComplete chapter={chapter} next={completion.next} fragments={completion.fragments} clearance={clearance} />}</>
  const chapterNav = <nav className="chapter-nav"><Link to="/book">← INDEX</Link>{adjacent.prev && <Link to={`/book/${adjacent.prev.slug}`}>← CH. {adjacent.prev.number}</Link>}{adjacent.next && <Link to={`/book/${adjacent.next.slug}`}>CH. {adjacent.next.number} →</Link>}</nav>
  const Shell = SHELLS[chapter.shell]
  if (Shell) return <><Shell meta={chapter} navigation={chapterNav}><Suspense fallback={<p className="chapter-loading">Loading recovered text...</p>}><ChapterComponent components={{ CharacterLink, Term }} /></Suspense></Shell>{completion && <ChapterComplete chapter={chapter} next={completion.next} fragments={completion.fragments} clearance={clearance} />}</>
  return <><article className="chapter-page chapter-paper-reader"><div className="chapter-heading"><p className="eyebrow">The Book / Chapter {chapter.number}</p><h1>{chapter.title}</h1><div className="chapter-rule" /><p className="chapter-reader-meta">POV · {chapter.pov?.toUpperCase()} / {chapter.estMinutes} MIN / {chapter.location?.replace(/-/g, ' ').toUpperCase()}</p>{chapterNav}</div><div className="chapter-body"><Suspense fallback={<p className="chapter-loading">Loading recovered text...</p>}><ChapterComponent components={{ CharacterLink, Term }} /></Suspense>{chapterNav}</div></article>{completion && <ChapterComplete chapter={chapter} next={completion.next} fragments={completion.fragments} clearance={clearance} />}</>
}
