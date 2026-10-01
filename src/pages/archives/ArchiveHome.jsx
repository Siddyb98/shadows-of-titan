import { Link } from 'react-router-dom'
import { archiveSections, countArchiveFiles } from '../../data/archiveIndex'
import { useProgression } from '../../context/ProgressionContext'
import ClearanceBar from '../../components/archives/ClearanceBar'
import SectionCard from '../../components/archives/SectionCard'

export default function ArchiveHome() {
  const { clearance } = useProgression()
  return (
    <section className="archive-shell">
      <div className="archive-shell-head"><div><p className="eyebrow">AAN / Internal directory</p><h1>THE ARCHIVES</h1><p className="archive-lede">A controlled index of locations, personnel, and events recovered from the Titan substrate.</p></div><div className="archive-home-actions"><Link className="archive-console-link" to="/archives/concordance">THE CONCORDANCE ↗</Link><Link className="archive-console-link" to="/archives/console">FRAGMENT CONSOLE ↗</Link><Link className="archive-backlink" to="/">← SURFACE</Link></div></div>
      <ClearanceBar />
      <div className="archive-index-head"><span>INDEX / {String(archiveSections.length).padStart(2, '0')} SECTIONS</span><span>ACTIVE CLEARANCE: {clearance}</span></div>
      <div className="archive-section-grid">{archiveSections.map((section) => <SectionCard key={section.id} section={section} />)}</div>
    </section>
  )
}
