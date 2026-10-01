import { Link, Navigate, useParams } from 'react-router-dom'
import ClearanceBar from '../../components/archives/ClearanceBar'
import FileRow from '../../components/archives/FileRow'
import { ARCHIVE_SECTIONS } from '../../data/archiveIndex'
import { useProgression } from '../../context/ProgressionContext'

export default function ArchiveSection() {
  const { sectionId } = useParams()
  const { clearance, decryptedFiles } = useProgression()
  const section = ARCHIVE_SECTIONS.find((entry) => entry.id === sectionId)

  const requiredClearance = section?.defaultClearance ?? section?.clearance ?? 3
  if (!section || clearance < requiredClearance) return <Navigate to="/archives" replace />

  const allFiles = section.subcategories.flatMap((subcategory) => subcategory.files)
  const decryptedInSection = allFiles.filter((file) => decryptedFiles.includes(file.id)).length

  return (
    <section className={`archive-shell archive-section-page archive-color-${section.color}`}>
      <div className="archive-breadcrumb"><Link to="/">~/HOME</Link><span>/</span><Link to="/archives">ARCHIVES</Link><span>/</span><strong>{section.name}</strong></div>
      <ClearanceBar />
      <div className="archive-section-heading"><p className="archive-card-code">{section.designation} // {decryptedInSection}/{allFiles.length} FILES DECRYPTED</p><h1>{section.name}</h1><p className="archive-lede">{section.description}</p></div>
      {section.id === 'geosphere' && <div className="archive-file-placeholder mb-8"><p className="archive-label">OVERVIEW // TERRAFORMED TITAN SURFACE</p><p className="mt-3">Titan is roughly 5,150 km in diameter - slightly larger than Mercury - but only a portion is actively inhabited due to atmospheric instability beyond the terraformed band.</p><p className="mt-4"><span className="archive-label">TERRAFORMING ARC ZONE:</span> Total livable band: approximately 3,000 km across the equatorial stretch. Major habitable regions: 7, roughly 200-600 km wide each. Core atmospheric pillars: 5 buried Catalyst Pulse Wells that help regulate air and temperature. Some are unstable.</p></div>}
      {section.id === 'bestiary' && <div className="archive-file-placeholder mb-8"><p className="archive-label">OVERVIEW // AGRICULTURE & FLORA OF TITAN</p><ul className="mt-3 space-y-2"><li>Most plant life emerged as a hybridization between Earth seedstocks and Catalyst Engine-triggered mutations.</li><li>Growth can be influenced by light, water, sound, emotion, memory, or subatomic energy bleed.</li><li>Modern agriculture relies on symbiotic bio-interfaces, environmental synchronization, and telepathic tuning in some regions.</li><li>Some plants were deliberately engineered by Apex scientists; others evolved through unstable terra-code or abandoned Catalyst Wells.</li><li>Certain flora only grow within specific emotional frequencies or resonance zones.</li></ul></div>}
      {section.id === 'bestiary' && <div className="archive-file-placeholder mb-8"><p className="archive-label">OVERVIEW // WILDLIFE OF TITAN</p><ul className="mt-3 space-y-2"><li>Most creatures are bio-engineered accidents or descendants of Earth DNA, reshaped by Catalyst Engine feedback and gravitational distortions.</li><li>Many lifeforms feed off resonance energy, emotional fields, or time anomalies.</li><li>Predatory behavior often relies on electromagnetic shifts, sonic trails, or biological memory echoes.</li><li>Some creatures become aggressive near Catalyst Wells or during Titan&apos;s storm cycles.</li><li>Classifications: Cryptobeasts, Echofauna, Pulseborne, and Anomalous Entities.</li></ul><p className="archive-label mt-5">OVERVIEW // AQUATIC BIOMES OF TITAN</p><ul className="mt-3 space-y-2"><li>Water is often chemically altered: acidic, cryogenic, or charged with energy.</li><li>Many aquatic lifeforms shift between liquid, gas, or semi-solid states.</li><li>Several species are resonance-sensitive, making them susceptible to telepathic intrusion, timeline bleed, or mutation spirals.</li><li>In deep or forbidden zones, water becomes self-aware, allowing liquid-based intelligence clusters.</li></ul></div>}
      {section.id === 'culture' && <div className="archive-file-placeholder mb-8"><p className="archive-label">OVERVIEW // CULTURE OF TITAN</p><p className="mt-3">Titan&apos;s society fuses state doctrine, mutation, energy refinement, class identity, survival culture, and Destiny-based divinity.</p><ul className="mt-3 space-y-2"><li>Core belief: Ascend or Be Forgotten.</li><li>Slang, fashion, ritual, intimacy, entertainment, and daily life all reflect mutation class and city of origin.</li><li>Public culture celebrates control and refinement; underground culture values survival, risk, and autonomy.</li></ul></div>}
      <div className="archive-column-head"><span>DESIGNATION</span><span>FILE</span><span>CLR</span><span>STATUS</span></div>
      <div className="archive-section-files">
        {section.subcategories.map((subcategory, subcategoryIndex) => (
          <div key={subcategory.id} className={subcategoryIndex > 0 ? 'archive-subcategory archive-subcategory-spaced' : 'archive-subcategory'}>
            {section.subcategories.length > 1 && <div className={`archive-subcategory-head archive-subcategory-${section.color}`}><span>▸ {subcategory.name}</span><small>[{subcategory.files.length} FILES]</small></div>}
            <div className="archive-file-list">{subcategory.files.map((file) => <FileRow key={file.id} file={file} section={section} />)}</div>
          </div>
        ))}
      </div>
      <Link to="/archives" className="archive-return">[ RETURN TO DIRECTORY ]</Link>
    </section>
  )
}
