import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function AetherionDossier() {
  const headerData = {
    designation: 'CIT-006',
    classification: 'GEOSPHERE // DEEP CITY // ZEPHYROS EDGE',
    codename: 'AETHERION',
    headerFields: [
      { label: 'REGION', value: 'Zephyros Edge' },
      { label: 'SHAPE', value: 'Dispersed archipelago of floating platforms tethered around a central aerial spire' },
      { label: 'SIZE', value: 'Core spire spans approximately 5 km vertically; 9 major platforms orbit within approximately 60 km' },
      { label: 'ALTITUDE', value: 'Approximately 8,000 meters above Titan\'s surface, well above stormline' },
      { label: 'HAZARDS', value: 'Gravity instability, solar radiation spikes, and aerial predators in outer layers' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="GEOGRAPHIC CONTEXT" color="titan-emerald">
        <p>Titan&apos;s elevated blade forged in the upper stratosphere and sharpened by sacrifice.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li><span className={label}>REGION:</span> Zephyros Edge.</li>
          <li><span className={label}>SHAPE:</span> Dispersed archipelago of floating platforms tethered around a central aerial spire.</li>
          <li><span className={label}>SIZE:</span> Core spire spans approximately 5 km vertically; 9 major platforms orbiting within approximately 60 km.</li>
          <li><span className={label}>ALTITUDE:</span> Approximately 8,000 meters above Titan&apos;s surface, well above stormline.</li>
          <li><span className={label}>TERRAIN:</span> Open skies, cloud rivers, occasional solar flare disruptions.</li>
          <li><span className={label}>HAZARDS:</span> Gravity instability, solar radiation spikes, aerial predators in outer layers.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CITY STRUCTURE & FLOATING SECTORS" color="titan-emerald">
        <p>Aetherion is built as a fragmented fortress: semi-independent platforms suspended by ancient anti-grav tech, linked via glide-bridges, ziprails, and controlled air corridors.</p>
        <p className={`mt-4 ${label}`}>THE HELIX SPIRE // CORE TOWER // COMMAND & IDEOLOGY</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Command Pinnacle: Strategic nerve center of AAN sky ops; home to high officers and Apex tacticians.</li>
          <li>The Forgewind Chapel: Indoctrination sanctum where Apex cadets are programmed and reforged.</li>
          <li>Orbis Vault: Observation core where solar activity and anomaly traffic are tracked with orbit-linked surveillance.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Inner chambers rotate with solar rhythms to maintain balance and power.</li>
          <li>Skyglass walls offer 360-degree views.</li>
          <li>Sound is artificially dampened to promote mental clarity.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Cadets speak in command dialects, short, sharp, coded.</li>
          <li>Emotion is weakness unless weaponized.</li>
          <li>Rituals are inscribed into armor rather than shared aloud.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE DRIFT RINGS // FLOATING PLATFORMS // TRAINING, HOUSING & DEPLOYMENT</p>
        <p className={`mt-3 ${label}`}>MAJOR PLATFORMS:</p>
        <ul className={mutedList}>
          <li>Talon Field: Open-air combat zone where gravity shifts mid-duel; cadets train until they pass or fall.</li>
          <li>Pulse Ward: Dormitories, neural recharge chambers, sparring decks, and enhancement pods.</li>
          <li>Gale Barracks: Housing for AAN operatives, mid-ranking Apex, and autonomous AI squadrons.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Magnetic rails pull vehicles and gear across floating terrain.</li>
          <li>Energy shields form hover domes during atmospheric disruptions.</li>
          <li>Dorms are minimalist: one bed, one screen, one mirror, all monitored.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Failure is exile, often to Cryothorne or worse.</li>
          <li>Cadets record a daily combat log into their Memory Spine implant.</li>
          <li>Loyalty tattoos are burned into the skin by resonance fire upon graduation.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE SCAR ARRAY // OUTER SECTORS // FORBIDDEN TECH & BROKEN EXPERIMENTS</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Cradle Nine: Wreckage site of a lost Apex prototype team; atmosphere bends around it unpredictably.</li>
          <li>Ash Orbitals: Black-ops testing nodes for Apex AI co-evolution, some of which went rogue.</li>
          <li>Arkfall Fragment: Wreckage of an Exodus Seedship suspended in orbit, used for high-stakes training or interrogation.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Shields flicker irregularly - solar storms or intentional sabotage?</li>
          <li>Rogue drones roam freely; trainees are sometimes pitted against them.</li>
          <li>Some zones don&apos;t exist on official AAN maps.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Entering without clearance is considered death by choice.</li>
          <li>Apex candidates who train here are called Scarborn.</li>
          <li>One of the floating sectors is permanently sealed. No one remembers what&apos;s inside because they&apos;ve been made to forget.</li>
        </ul>
      </DossierSection>
      <DossierSection title="DISTRICTS AT A GLANCE" color="titan-emerald">
        <div className="space-y-4 text-aan-white/70">
          <div><p className={label}>COMMAND PINNACLE // HELIX SPIRE // STRATEGY HQ</p><p>Apex command and military operations.</p></div>
          <div><p className={label}>FORGEWIND CHAPEL // HELIX SPIRE // INDOCTRINATION</p><p>Psychological forging of ideology.</p></div>
          <div><p className={label}>ORBIS VAULT // HELIX SPIRE // OBSERVATION HUB</p><p>Tracks orbital and anomaly data.</p></div>
          <div><p className={label}>TALON FIELD // DRIFT RINGS // COMBAT TRAINING</p><p>Gravity-shifting arena.</p></div>
          <div><p className={label}>PULSE WARD // DRIFT RINGS // CADET HOUSING</p><p>Emotion-suppression pods included.</p></div>
          <div><p className={label}>GALE BARRACKS // DRIFT RINGS // OFFICER HOUSING</p><p>AI security units embedded.</p></div>
          <div><p className={label}>CRADLE NINE // SCAR ARRAY // FORBIDDEN SITE</p><p>Reality bends; failed Apex team.</p></div>
          <div><p className={label}>ASH ORBITALS // SCAR ARRAY // BLACK OPS ZONE</p><p>Apex-AI fusion experiments.</p></div>
          <div><p className={label}>ARKFALL FRAGMENT // SCAR ARRAY // WRECKAGE ZONE</p><p>Interrogation and trauma-based enhancement site.</p></div>
        </div>
      </DossierSection>
      <DossierSection title="INFRASTRUCTURE & POWER SYSTEMS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Solarwell Drives: Each sector absorbs sunlight through prism sails, feeding internal cores.</li>
          <li>Grav-Ring Stabilizers: Tuned to Titan&apos;s magnetic poles; disruptions cause spatial distortion.</li>
          <li>Helix Signal Web: High-frequency Apex-only comms, also tracks cadet health and loyalty markers.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CULTURE & CODE" color="titan-emerald">
        <p className={label}>MOTTO:</p>
        <p>Above fear. Beyond mercy.</p>
        <p className="mt-4">The city functions as a living crucible where only the strong are sculpted, and the rest fall into oblivion.</p>
        <p className={`mt-4 ${label}`}>RITUALS:</p>
        <ul className={mutedList}>
          <li>Drop Baptism: Cadets thrown from 300 meters; only those who stabilize mid-air may return.</li>
          <li>Pulse Burn: Elite trainees undergo nerve reconditioning via plasma arc - sharpens reflexes, blurs empathy.</li>
          <li>Warden&apos;s Wake: Lost cadets are honored with a synchronized sky-dive and moment of enforced silence.</li>
        </ul>
        <p className={`mt-4 ${label}`}>SOCIAL ROLES:</p>
        <ul className={mutedList}>
          <li>Skyblades: Elite aerial combatants.</li>
          <li>Pulse Shepherds: Indoctrinators, teachers, and discipline enforcers.</li>
          <li>Scarborn: Survivors of the Scar Array, often unstable, always deadly.</li>
        </ul>
      </DossierSection>
      <DossierSection title="AETHERION SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>The Oracle Node, a buried AI fragment from the original VEXA, speaks only when it senses collapse is near.</li>
          <li>The Arkfall Fragment still houses cryogenically frozen original Apex candidates, including ones who should be extinct.</li>
          <li>One cadet recently vanished after winning the Drop Baptism; only a feather made of light was found in her bunk.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierNote color="forge-magma">"Above fear. Beyond mercy."</DossierNote>
    </div>
  )
}
