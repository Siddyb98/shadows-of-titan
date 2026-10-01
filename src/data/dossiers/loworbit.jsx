import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function LoworbitDossier() {
  const headerData = {
    designation: 'PER-540',
    classification: 'AAN PROFILE: MID-TIER RISING',
    codename: 'LOWORBIT',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Synn Edros Astra' },
      { label: 'KNOWN ALIASES', value: 'Floatboy (mocking), Crash Saint (Pulse Duel name), Astra the Gentle' },
      { label: 'MUTATION TIER', value: 'Nova (Potential Ascendant if passed Apex Trials)' },
      { label: 'ENERGY TYPE', value: 'Gravity Flux - localized manipulation of gravitational fields' },
      { label: 'CLASS DESIGNATION', value: 'Dominion Academy Combat Track - Advanced Flight & Field Tactics' },
      { label: 'BIRTH REGION', value: 'Outer Virelyn Expanse - Windfarm Habitat 07' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="cryo-blue" />
      <DossierSection title="PHYSICAL PROFILE" color="cryo-blue">
        <ul className="list-none space-y-1">
          <li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6&apos;4&quot;</li>
          <li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> Approximately 198 lbs</li>
          <li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Athletic but light-framed, like a long-distance runner trained for balance, not brute strength</li>
          <li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Sandy blonde, soft wave, cut short but never tidy. Hangs into his eyes when nervous.</li>
          <li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Icy blue, always wide with thought. During high gravity surges, they darken to navy-black, ringed with white.</li>
          <li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Pale with a faint golden undertone. Frequently bruised from training crashes.</li>
        </ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>WARDROBE STYLE:</p><RedactedBlock lines={2} />
      </DossierSection>

      <DossierSection title="MUTATION / ENERGY DETAILS" color="cryo-blue">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-cryo-blue">Gravity Flux</span> - The ability to alter gravitational density in localized fields. Can lift, crash, levitate, or anchor both matter and people.</p>
        <p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>CONTROL LEVEL:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>KNOWN TRIGGERS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>COMBAT STYLE:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><RedactedBlock lines={2} />
      </DossierSection>

      <DossierSection title="PSYCH PROFILE" color="cryo-blue">
        <p><span className={label}>CORE PERSONALITY TRAITS:</span> Loyal, humble, intelligent, self-doubting.</p>
        <p className={`mt-4 ${label}`}>STRENGTHS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>WEAKNESSES:</p><RedactedBlock lines={2} />
        <p><span className={label}>CORE BELIEF:</span> “If I can rise, maybe I can lift someone else with me.”</p>
        <p className={`mt-4 ${label}`}>PUBLIC BEHAVIOR:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>PRIVATE REALITY:</p><RedactedBlock lines={2} />
      </DossierSection>

      <DossierSection title="FAMILY & ORIGIN" color="cryo-blue">
        <p><span className={label}>BIRTH REGION:</span> Outer Virelyn Expanse - Windfarm Habitat 07.</p>
        <p className={`mt-4 ${label}`}>FAMILY MEMBERS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>FAMILY DYNAMICS:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>NOTABLE HERITAGE SECRETS:</p><RedactedBlock lines={3} />
      </DossierSection>

      <DossierSection title="HISTORY / PURPOSE" color="cryo-blue">
        <p className={`font-mono text-xs ${label}`}>HOW HE GOT INTO THE SYSTEM:</p><RedactedBlock lines={3} />
        <p className={`mt-4 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p>
        <p className="text-aan-white/60">{<FragmentLock fragmentKey="GRAV-CHILD-0" reveal="Synn Astra&apos;s pre-birth gravity signature anomaly." />}</p>
        <p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><RedactedBlock lines={3} />
        <p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><RedactedBlock lines={3} />
        <p className={`mt-4 ${label}`}>WHY HE MATTERS TO TITAN&apos;S FUTURE:</p><RedactedBlock lines={3} />
      </DossierSection>

      <DossierNote color="forge-magma">“Subject S. Astra is stable, loyal, and upward-trending. Keep near cadet Nyx. Her proximity lowers his gravitational pulse variance. Unknown why.”</DossierNote>

      <DossierSection title="SECRETS & PREFERENCES" color="cryo-blue">
        <p className={`font-mono text-xs ${label}`}>ROMANTIC HISTORY:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>FEAR PROFILE:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>FOOD / STYLE PREFERENCES:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>COMBAT PREFERENCE:</p><RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>FAVORITE CIVILIAN HAUNTS:</p><RedactedBlock lines={2} />
        <p className={`mt-5 ${label}`}>ONE SECRET NO ONE KNOWS:</p>
        <FragmentLock fragmentKey="GRAV-CHILD-0" reveal={<span>Synn Astra&apos;s pre-birth gravity signature anomaly is recorded in the VEX terminal.</span>} />
      </DossierSection>
    </div>
  )
}
