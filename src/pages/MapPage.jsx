import { useEffect, useMemo, useState } from 'react'
import { useProgression } from '../context/ProgressionContext'
import { CHAPTERS } from '../data/book/chapters'
import TitanMap from '../components/map/TitanMap'

export default function MapPage() {
  const { clearance, chaptersRead, fragments } = useProgression()
  const [signal, setSignal] = useState(null)
  const progress = useMemo(() => ({ clearance, chapter: Math.max(0, ...chaptersRead.map((number) => CHAPTERS.find((chapter) => chapter.number === number)?.number ?? 0)) }), [chaptersRead, clearance])
  useEffect(() => {
    if (sessionStorage.getItem('sot-map-signal-v1')) return undefined
    sessionStorage.setItem('sot-map-signal-v1', '1')
    if (Math.random() > .65) return undefined
    const timer = window.setTimeout(() => setSignal({ sector: 'SECTOR 07', regionId: 'miridan', riddle: 'Where the roots remember the first voice, look beneath the black water.' }), 900)
    return () => window.clearTimeout(timer)
  }, [])
  return <TitanMap progress={progress} fragments={fragments} signal={signal} />
}
