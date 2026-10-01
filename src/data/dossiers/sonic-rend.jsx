import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function SonicRendDossier() {
  const headerData = {
    designation: 'PER-611',
    classification: 'AAN PROFILE: MONITORED // TECH DEVIATION POTENTIAL',
    codename: 'SONIQUE',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Taryn Keziah Faye' },
      { label: 'KNOWN ALIASES', value: 'Wavewitch, Decibelle, The Blue Vandal' },
      { label: 'MUTATION TIER', value: 'Echelon - Probationary with Apex Trial Eligibility' },
      { label: 'ENERGY TYPE', value: 'Sonic Rend - high-frequency vibrational manipulation through voice and focused gestures' },
      { label: 'CLASS DESIGNATION', value: 'Dominion Academy - Vanguard Track (Field Disruption & Recon)' },
      { label: 'BIRTH REGION', value: 'Helion Outskirts - Freight Corridor Alpha, near audio-surge dumps' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="cryo-blue" />
      <DossierSection title="PHYSICAL PROFILE" color="cryo-blue">
        <ul className="list-none space-y-1">
          <li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 5&apos;10&quot;</li>
          <li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> Approximately 152 lbs</li>
          <li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Lean, toned, lithe</li>
          <li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Electric blue, spiked and asymmetrical; vibrates subtly when she&apos;s excited or angry</li>
          <li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Metallic silver with blue-tinted sclera; when activating her ability, her irises ripple like subwoofers</li>
          <li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Tawny-olive complexion, with subtle vibration-marks around her throat and collarbones - signs of internal harmonics</li>
        </ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>WARDROBE STYLE:</p><RedactedBlock lines={2} />
      </DossierSection>

      <DossierSection title="MUTATION / ENERGY DETAILS" color="cryo-blue">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-cryo-blue">Sonic Rend</span> - The power to generate, manipulate, and weaponize high-frequency soundwaves.</p>
        <p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>CONTROL LEVEL:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>KNOWN TRIGGERS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>COMBAT STYLE:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><RedactedBlock lines={2} />
      </DossierSection>

      <DossierSection title="PSYCH PROFILE" color="cryo-blue">
        <p><span className={label}>CORE PERSONALITY TRAITS:</span> Rebellious, magnetic, fiercely loyal, chaotic good.</p>
        <p className={`mt-4 ${label}`}>STRENGTHS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>WEAKNESSES:</p><RedactedBlock lines={2} />
        <p><span className={label}>CORE BELIEF:</span> “If I can control the noise then I can control my feelings.”</p>
        <p className={`mt-4 ${label}`}>PUBLIC BEHAVIOR:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>PRIVATE REALITY:</p><RedactedBlock lines={2} />
      </DossierSection>

      <DossierSection title="FAMILY & ORIGIN" color="cryo-blue">
        <p><span className={label}>BIRTH REGION:</span> Helion Outskirts - Freight Corridor Alpha, near audio-surge dumps.</p>
        <p className={`mt-4 ${label}`}>FAMILY MEMBERS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>FAMILY DYNAMICS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>NOTABLE HERITAGE SECRETS:</p><RedactedBlock lines={3} />
      </DossierSection>

      <DossierSection title="HISTORY / PURPOSE" color="cryo-blue">
        <p className={`font-mono text-xs ${label}`}>HOW SHE GOT INTO THE SYSTEM:</p><RedactedBlock lines={3} />
        <p className={`mt-4 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p>
        <p className="text-aan-white/60">{<FragmentLock fragmentKey="WAVE-CRACK-3" reveal="Taryn Faye&apos;s open sonic micro-rift." />}</p>
        <p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><RedactedBlock lines={3} />
        <p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><RedactedBlock lines={3} />
        <p className={`mt-4 ${label}`}>WHY SHE MATTERS TO TITAN&apos;S FUTURE:</p><RedactedBlock lines={3} />
      </DossierSection>

      <DossierNote color="forge-magma">“Subject T. Faye remains dangerously charismatic. Marked for red-level monitoring. Mutation potential may include acoustic phasewalking. Do not isolate her with Nyx again. Effects unpredictable.”</DossierNote>

      <DossierSection title="SECRETS & PREFERENCES" color="cryo-blue">
        <p className={`font-mono text-xs ${label}`}>ROMANTIC HISTORY:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>FEAR PROFILE:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>FOOD / STYLE PREFERENCES:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>COMBAT PREFERENCE:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>FAVORITE CIVILIAN HAUNTS:</p><RedactedBlock lines={2} />
        <p className={`mt-5 ${label}`}>ONE SECRET NO ONE KNOWS:</p>
        <FragmentLock fragmentKey="WAVE-CRACK-3" reveal={<span>Taryn Faye&apos;s open sonic micro-rift remains active in the restricted record.</span>} />
      </DossierSection>
    </div>
  )
}
