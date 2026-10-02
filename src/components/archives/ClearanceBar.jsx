import { useState } from 'react'
import { useProgression } from '../../context/ProgressionContext'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ARCHIVE_SECTIONS, CLEARANCE } from '../../data/archiveIndex'
import { TOTAL_FRAGMENTS } from '../../data/fragmentKeys'

const getAllFiles = () => ARCHIVE_SECTIONS.flatMap((section) => section.subcategories.flatMap((subcategory) => subcategory.files))
const clearanceTextClasses = {
  'aan-white': 'text-aan-white',
  'cryo-blue': 'text-cryo-blue',
  'titan-gold': 'text-titan-gold',
  'root-violet': 'text-root-violet',
  'forge-magma': 'text-forge-magma',
}

export default function ClearanceBar() {
  const { clearance, fragments, decryptedFiles, accessViolations } = useProgression()
  const { callsign, logout } = useAuth()
  const navigate = useNavigate()
  const [signingOut, setSigningOut] = useState(false)
  const tier = CLEARANCE[clearance] ?? CLEARANCE[0]
  const totalFiles = getAllFiles().length
  const decryptedCount = decryptedFiles.length
  const fragmentCount = typeof fragments === 'number' ? fragments : fragments.length
  const progressPercent = totalFiles ? Math.min((decryptedCount / totalFiles) * 100, 100) : 0

  return (
    <div className="archive-clearance archive-clearance-master">
      <div className="archive-clearance-line">
        <div className="archive-clearance-metrics">
          <span className="archive-clearance-stat"><span className="archive-label">CLEARANCE:</span><strong className={`${clearanceTextClasses[tier.color]} animate-flicker`}>{tier.name} [{tier.short}]</strong></span>
          <span className="archive-clearance-stat"><span className="archive-label">FRAGMENTS:</span><strong className="text-forge-magma">{fragmentCount}/{TOTAL_FRAGMENTS}</strong></span>
          <span className="archive-clearance-stat"><span className="archive-label">FILES DECRYPTED:</span><strong className="text-titan-emerald">{decryptedCount}/{totalFiles}</strong></span>
          <span className="archive-clearance-stat"><span className="archive-label">ACCESS VIOLATIONS:</span><strong className={accessViolations > 0 ? 'text-forge-magma' : 'text-aan-white/40'}>{String(accessViolations).padStart(2, '0')}</strong></span>
        </div>
        <div className="flex items-center gap-3"><span className="archive-session-marker">{callsign || 'ANON'} // NODE: ARCHIVES-01</span><button type="button" disabled={signingOut} onClick={async () => { setSigningOut(true); await logout(); navigate('/login', { replace: true }) }} className="font-mono text-[10px] text-forge-magma/60 hover:text-forge-magma tracking-widest transition-colors disabled:opacity-50 disabled:cursor-not-allowed">{signingOut ? '[ SIGNING OUT... ]' : '[ SIGN OUT ]'}</button></div>
      </div>
      <div className="archive-progress-track" aria-label={`${decryptedCount} of ${totalFiles} files decrypted`}><div className="archive-progress-fill" style={{ width: `${progressPercent}%` }} /></div>
    </div>
  )
}
