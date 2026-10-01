import { Link } from 'react-router-dom'
import { useProgression } from '../../context/ProgressionContext'
import { CLEARANCE } from '../../data/archiveIndex'

const sectionToneClasses = {
  'titan-gold': 'text-titan-gold border-titan-gold/20 hover:border-titan-gold hover:bg-titan-gold/5 bg-titan-gold',
  'titan-emerald': 'text-titan-emerald border-titan-emerald/20 hover:border-titan-emerald hover:bg-titan-emerald/5 bg-titan-emerald',
  'cryo-blue': 'text-cryo-blue border-cryo-blue/20 hover:border-cryo-blue hover:bg-cryo-blue/5 bg-cryo-blue',
  'root-bio': 'text-root-bio border-root-bio/20 hover:border-root-bio hover:bg-root-bio/5 bg-root-bio',
  'nocturne-ash': 'text-nocturne-ash border-nocturne-ash/20 hover:border-nocturne-ash hover:bg-nocturne-ash/5 bg-nocturne-ash',
  'forge-ember': 'text-forge-ember border-forge-ember/20 hover:border-forge-ember hover:bg-forge-ember/5 bg-forge-ember',
  'forge-magma': 'text-forge-magma border-forge-magma/20 hover:border-forge-magma hover:bg-forge-magma/5 bg-forge-magma',
}

export default function SectionCard({ section }) {
  const { clearance, decryptedFiles } = useProgression()
  const requiredClearance = section.defaultClearance ?? section.clearance
  const requiredTier = CLEARANCE[requiredClearance] ?? CLEARANCE[0]
  const isLocked = clearance < requiredClearance
  const allFiles = section.subcategories.flatMap((subcategory) => subcategory.files)
  const decryptedInSection = allFiles.filter((file) => decryptedFiles.includes(file.id)).length
  const sectionProgress = allFiles.length ? Math.round((decryptedInSection / allFiles.length) * 100) : 0
  const tone = sectionToneClasses[section.color] ?? sectionToneClasses['titan-emerald']
  const textColor = tone.split(' ')[0]
  const toneClasses = tone.split(' ').slice(1).join(' ')

  const content = (
    <div className={`archive-section-card archive-section-card-detailed relative overflow-hidden group ${isLocked ? 'is-locked' : toneClasses}`}>
      <div className="archive-card-corner archive-card-corner-tl" /><div className="archive-card-corner archive-card-corner-tr" /><div className="archive-card-corner archive-card-corner-bl" /><div className="archive-card-corner archive-card-corner-br" />
      <div className="archive-card-head">
        <div><p className="archive-card-code">{section.designation}</p><h2 className={textColor}>{section.name}</h2></div>
        <span className={isLocked ? 'archive-card-locked' : 'archive-card-count'}>{isLocked ? '[LOCKED]' : `${decryptedInSection}/${allFiles.length}`}</span>
      </div>
      <p className="archive-card-description">{section.description}</p>
      {!isLocked && section.subcategories.length > 1 && <p className="archive-card-subsections">{section.subcategories.length} SUBSECTIONS</p>}
      <div className="archive-card-footer"><span>REQUIRES: <strong className={textColor}>{requiredTier.name}</strong></span><span className={textColor}>[ OPEN ]</span></div>
      <div className="archive-card-progress"><div className={textColor.replace('text-', 'bg-')} style={{ width: `${sectionProgress}%` }} /></div>
    </div>
  )

  return isLocked ? content : <Link to={`/archives/${section.id}`}>{content}</Link>
}
