import { useMemo } from 'react'
import { useProgression } from '../context/ProgressionContext'
import { CHAPTERS } from '../data/book/chapters'
import TitanMap from '../components/map/TitanMap'

export function ArchivePage() {
  return <div className="text-center p-20 font-mono text-titan-emerald">ACCESSING ARCHIVES... // DATA CORRUPTED</div>
}

export function BookPage() {
  return null
}

export function MapPage() {
  const { clearance, chaptersRead, fragments } = useProgression()
  const progress = useMemo(() => ({ clearance, chapter: Math.max(0, ...chaptersRead.map((number) => CHAPTERS.find((chapter) => chapter.number === number)?.number ?? 0)) }), [chaptersRead, clearance])
  return <TitanMap progress={progress} fragments={fragments} />
}

export function ChapterPage() {
  return null
}

export function SecretPage() {
  return (
    <section className="chapter-page"><div className="chapter-heading"><p className="eyebrow">Unauthorized channel / 00</p><h1>Signal<br /><em>found.</em></h1><div className="chapter-rule" /></div><div className="chapter-body"><p className="chapter-lede">The archive is aware of your presence.</p><p>There is no map for this room. There is only the sound of something beneath the city, waiting for the lights to go out.</p></div></section>
  )
}
