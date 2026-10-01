import { Link, useParams } from 'react-router-dom'
import { getArchiveFile, getArchiveSection, getFileClearance } from '../../data/archiveIndex'
import { useProgression } from '../../context/ProgressionContext'
import ClearanceBar from '../../components/archives/ClearanceBar'
import { DOSSIERS } from '../../data/dossiers'

export default function ArchiveFile() {
  const { sectionId, fileId } = useParams()
  const section = getArchiveSection(sectionId)
  const file = getArchiveFile(sectionId, fileId)
  const { clearance, decryptFile, registerAccessViolation, decryptedFiles } = useProgression()
  if (!section || !file) return <div className="archive-empty">FILE NOT FOUND</div>
  const requiredClearance = getFileClearance(file, section)
  const locked = clearance < requiredClearance
  const decrypted = decryptedFiles.includes(file.id)
  const Dossier = DOSSIERS[file.id]
  if (Dossier && !locked) {
    return (
      <section className="archive-shell archive-file-page">
        <div className="archive-shell-head"><div><Link className="archive-backlink" to={`/archives/${section.id}`}>← {section.name}</Link><p className="eyebrow">{file.designation} / {section.name} DOSSIER</p></div><span className="archive-section-seal">DOSSIER</span></div>
        <ClearanceBar />
        <Dossier />
      </section>
    )
  }
  return (
    <section className="archive-shell archive-file-page">
      <div className="archive-shell-head"><div><Link className="archive-backlink" to={`/archives/${section.id}`}>← {section.name}</Link><p className="eyebrow">{file.type} / {file.id}</p><h1>{file.name}</h1></div><span className="archive-section-seal">{locked ? 'ENCRYPTED' : 'PLACEHOLDER'}</span></div>
      <ClearanceBar />
      {locked ? <div className="archive-locked-panel"><span className="archive-lock-symbol">▣</span><h2 className="animate-glitch">FILE ENCRYPTED</h2><p>This record requires clearance tier {requiredClearance}. No dossier content has been decrypted.</p><p className="archive-trace-line">&gt; T.E.B. TRACE ACTIVE — ACCESS LOGGED UNDER CALLSIGN</p><button type="button" onClick={registerAccessViolation}>LOG ACCESS ATTEMPT</button></div> : <div className="archive-file-placeholder"><span className="archive-label">FILE ACCESS GRANTED</span><h2>FILE CORRUPTED — AWAITING RECONSTRUCTION</h2><p>{file.summary ?? 'No reconstructed dossier content is available for this master record.'}</p><div className="archive-placeholder-rule" /><p className="archive-muted">The full dossier for this record will be installed in a future archive update.</p>{!decrypted && <button type="button" onClick={() => decryptFile(file.id)}>MARK FILE AS REVIEWED</button>}{decrypted && <strong className="archive-confirmed">FILE REVIEWED / LOCAL INDEX UPDATED</strong>}</div>}
    </section>
  )
}
