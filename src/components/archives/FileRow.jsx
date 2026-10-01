import { Link } from 'react-router-dom'
import { useProgression } from '../../context/ProgressionContext'
import { CLEARANCE, getFileClearance } from '../../data/archiveIndex'

const sectionHoverClasses = {
  'titan-gold': 'hover:bg-titan-gold/5',
  'titan-emerald': 'hover:bg-titan-emerald/5',
  'cryo-blue': 'hover:bg-cryo-blue/5',
  'root-bio': 'hover:bg-root-bio/5',
  'nocturne-ash': 'hover:bg-nocturne-ash/5',
  'forge-ember': 'hover:bg-forge-ember/5',
  'forge-magma': 'hover:bg-forge-magma/5',
}

const sectionTextClasses = {
  'titan-gold': 'text-titan-gold',
  'titan-emerald': 'text-titan-emerald',
  'cryo-blue': 'text-cryo-blue',
  'root-bio': 'text-root-bio',
  'nocturne-ash': 'text-nocturne-ash',
  'forge-ember': 'text-forge-ember',
  'forge-magma': 'text-forge-magma',
}

const clearanceTextClasses = {
  'aan-white': 'text-aan-white',
  'cryo-blue': 'text-cryo-blue',
  'titan-gold': 'text-titan-gold',
  'root-violet': 'text-root-violet',
  'forge-magma': 'text-forge-magma',
}

export default function FileRow({ file, section }) {
  const { clearance, decryptedFiles } = useProgression()
  const requiredClearance = getFileClearance(file, section)
  const tier = CLEARANCE[requiredClearance] ?? CLEARANCE[0]
  const isLocked = clearance < requiredClearance
  const isDecrypted = decryptedFiles.includes(file.id)
  const status = isLocked ? 'LOCKED' : isDecrypted ? 'DECRYPTED' : 'ACCESSIBLE'
  const statusColor = isLocked ? 'text-forge-magma' : isDecrypted ? 'text-titan-emerald' : 'text-aan-white/60'
  const inner = (
    <div className={`archive-file-row archive-file-row-detailed ${isLocked ? 'is-locked' : sectionHoverClasses[section.color]}`}>
      <span className="archive-file-designation">{file.designation}</span>
      <span className={`archive-file-name ${sectionTextClasses[section.color]}`}>{file.name}{file.tier && <small>[{file.tier}]</small>}</span>
      <span className={`archive-file-clearance ${clearanceTextClasses[tier.color]}`}>{tier.short}</span>
      <span className={`${statusColor} archive-file-status ${isLocked ? 'animate-flicker' : ''}`}>[{status}]</span>
    </div>
  )

  if (isLocked) return inner
  return <Link to={`/archives/${section.id}/${file.id}`}>{inner}</Link>
}
