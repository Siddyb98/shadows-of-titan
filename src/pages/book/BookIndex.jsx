import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ARCS } from '../../data/book/arcs'
import { CHAPTERS, getChaptersByArc } from '../../data/book/chapters'
import { useProgression } from '../../context/ProgressionContext'
import ContinueHero from '../../components/book/ContinueHero'
import ChapterSpine from '../../components/book/ChapterSpine'
import FilterBar from '../../components/book/FilterBar'
import ArcSection from '../../components/book/ArcSection'
import BookmarkDrawer from '../../components/book/BookmarkDrawer'

export default function BookIndex() {
  const { chaptersRead, lastRead, bookmarks } = useProgression()
  const [bookmarksOpen, setBookmarksOpen] = useState(false)
  const [filter, setFilter] = useState({ status: 'all', arc: 'all', pov: 'all' })
  const grouped = useMemo(() => getChaptersByArc(), [])
  const readSet = useMemo(() => new Set(chaptersRead), [chaptersRead])
  const publishedChapters = useMemo(() => CHAPTERS.filter((chapter) => chapter.status === 'published'), [])
  const publishedNumbers = useMemo(() => new Set(publishedChapters.map((chapter) => chapter.number)), [publishedChapters])
  const filtered = useMemo(() => { const result = new Map(); for (const [arcId, list] of grouped) { const kept = list.filter((chapter) => (filter.status !== 'read' || readSet.has(chapter.number)) && (filter.status !== 'unread' || !readSet.has(chapter.number)) && (filter.status !== 'available' || chapter.status === 'published') && (filter.arc === 'all' || chapter.arc === filter.arc) && (filter.pov === 'all' || chapter.pov === filter.pov)); if (kept.length) result.set(arcId, kept) } return result }, [filter, grouped, readSet])
  const recovered = publishedChapters.filter((chapter) => readSet.has(chapter.number)).length
  const bookmarkCounts = bookmarks.reduce((counts, bookmark) => ({ ...counts, [bookmark.chapter]: (counts[bookmark.chapter] ?? 0) + 1 }), {})
  const arcProgress = Object.fromEntries(ARCS.map((arc) => { const inArc = CHAPTERS.filter((chapter) => chapter.arc === arc.id); return [arc.id, inArc.length ? inArc.filter((chapter) => publishedNumbers.has(chapter.number) && readSet.has(chapter.number)).length / inArc.length : 0] }))
  const prelude = CHAPTERS.find((chapter) => chapter.kind === 'prelude')
  return <div className="book-index-page"><div className="book-index-breadcrumb"><Link to="/">~/HOME</Link><span>/</span><strong>BOOK</strong></div><div className="book-index-content"><header className="book-index-header"><div className="book-index-header-row"><div><p className="eyebrow">SHADOWS OF TITAN // PRIMARY NARRATIVE</p><h1>THE BOOK</h1><p>The archive is an artefact of the world. The book is the world itself. Read here to unlock redactions across every dossier.</p></div><button type="button" className="flag-drawer-trigger" onClick={() => setBookmarksOpen(true)}>🔖 BOOKMARKS {bookmarks.length}</button></div></header><ContinueHero />{prelude && <Link to={`/book/${prelude.slug}`} className="book-prelude-card"><span>START HERE</span><strong>{prelude.title}</strong><b>OPEN RECORD →</b></Link>}<ChapterSpine chapters={CHAPTERS} chaptersRead={chaptersRead} lastRead={lastRead} /><div className="book-session-summary"><span>RECOVERED: <b>{recovered}</b> / {publishedChapters.length}</span><span>STATUS: <b>{recovered === 0 ? 'UNOPENED' : recovered >= publishedChapters.length ? 'COMPLETE' : 'IN PROGRESS'}</b></span></div><FilterBar filter={filter} setFilter={setFilter} arcs={ARCS} /><div className="book-arcs">{[...filtered.entries()].map(([arcId, chapters]) => <ArcSection key={arcId} arc={ARCS.find((arc) => arc.id === arcId)} chapters={chapters} arcProgress={arcProgress[arcId]} flagCounts={bookmarkCounts} />)}</div></div><BookmarkDrawer bookmarks={bookmarks} open={bookmarksOpen} onClose={() => setBookmarksOpen(false)} /></div>
}
