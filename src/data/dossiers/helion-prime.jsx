import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function HelionPrimeDossier() {
  const headerData = {
    designation: 'CIT-001',
    classification: 'GEOSPHERE // DEEP CITY // AAN CAPITAL',
    codename: 'HELION PRIME',
    headerFields: [
      { label: 'STATUS', value: 'Capital of the Aegis Ascension Nexus' },
      { label: 'LOCATION', value: 'Built into and beneath the Verdant Spiral' },
      { label: 'STRUCTURE', value: 'Vertically tiered city' },
      { label: 'IDEOLOGY', value: 'Ascend to rule, descend to serve' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="CITY STRUCTURE & LEVELS" color="titan-emerald">
        <p>Helion Prime is vertically tiered, with its social and functional layout mirroring the Apex class ideology: Ascend to rule, descend to serve.</p>
        <p className={`mt-4 ${label}`}>THE CROWN CANOPY // UPPERMOST LEVEL // ELITE ZONE</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Aether Ring: Residences of the Apex High Council; transparent domes interwoven with glowing canopy branches.</li>
          <li>Solarium Court: Grand meeting halls, holographic chamber gardens, and memory-embedded pools.</li>
          <li>Veyrix Spire: Intelligence node overseeing Titan&apos;s news, surveillance, and propaganda streams.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Light rail-gliders connect tree limbs; anti-grav elevators weave up the tree&apos;s living lattice.</li>
          <li>Surveillance leaves: biotech-grown leaves record sound and presence.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Apex rituals and power demonstrations.</li>
          <li>Bloodline ceremonies held under moonlight projections on the Verdant Dome.</li>
          <li>Dress code includes radiant fabric grown from canopy threads.</li>
        </ul>
        <p className={`mt-4 ${label}`}>THE TRUNK RINGS // MIDDLE TIER // ADMINISTRATIVE & ACADEMIC</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Resonance Circle: Apex education institutions, power testing rings, neural aptitude training zones.</li>
          <li>Senate Vaults: Governance halls for AAN policy - public on top floors, private directive chambers below.</li>
          <li>Helix Archives: Multi-level record halls, including living libraries where Apex memories are preserved via neural thread.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Hollow bark is laced with memory fiber-optics.</li>
          <li>Echo lifts move by sound frequency rather than mechanics.</li>
          <li>Secret backdoors used by Echelon rebels and info-runners.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Apex students compete in Ascension Trials here.</li>
          <li>Debate circles occur in open-air forums with emotional projection overlays.</li>
          <li>Only Apex are allowed to touch the core trunk - considered sacred.</li>
        </ul>
        <p className={`mt-4 ${label}`}>THE SUBROOT WEB // LOWER TIER // RESEARCH & RESTRICTED</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Biogene Lattice: Genetic labs, trait-sequencing chambers, Apex-child incubation tanks.</li>
          <li>The Vault Spine: Access point to the Helios Vault; guarded by resonance-locked gates.</li>
          <li>Pulse Hollow: Submerged anomaly study sites with sealed testing chambers for dangerous Apex mutations.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>The roots absorb data as vibration signals - floor = antenna.</li>
          <li>Submerged transit tubes allow quiet movement between test wings.</li>
          <li>Climate is artificially maintained; light filters glow softly from filtered bioluminescence.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Workers are silent and monitored; not all who work here are seen again.</li>
          <li>AAN scientists speak in coded vocal harmonics to avoid detection.</li>
          <li>Rumors of failed clones whisper through the ventilation vines.</li>
        </ul>
      </DossierSection>
      <DossierSection title="DISTRICTS AT A GLANCE" color="titan-emerald">
        <div className="space-y-4 text-aan-white/70">
          <div><p className={label}>AETHER RING // CROWN CANOPY // ELITE HOUSING</p><p>Floating homes wrapped in lightroot branches.</p></div>
          <div><p className={label}>SOLARIUM COURT // CROWN CANOPY // RITUAL + DIPLOMACY</p><p>Pools where Apex rewrite family histories.</p></div>
          <div><p className={label}>VEYRIX SPIRE // CROWN CANOPY // INTELLIGENCE</p><p>Broadcast center for AAN truth control.</p></div>
          <div><p className={label}>RESONANCE CIRCLE // TRUNK RINGS // TRAINING + EDUCATION</p><p>Apex academies, combat spheres, aptitude trials.</p></div>
          <div><p className={label}>SENATE VAULTS // TRUNK RINGS // GOVERNMENT</p><p>Layered halls of law; rumors of neural rewriting.</p></div>
          <div><p className={label}>HELIX ARCHIVES // TRUNK RINGS // MEMORY & DATA STORAGE</p><p>Living memory vines that whisper old truths.</p></div>
          <div><p className={label}>BIOGENE LATTICE // SUBROOT WEB // GENETIC LABS</p><p>Apex line sequencing, embryo shaping.</p></div>
          <div><p className={label}>VAULT SPINE // SUBROOT WEB // SECURITY/RESEARCH</p><p>Direct access to Helios Vault; requires three-key activation.</p></div>
          <div><p className={label}>PULSE HOLLOW // SUBROOT WEB // FORBIDDEN TESTING</p><p>Contains anomaly tanks, quasar cages, and null-depth rooms.</p></div>
        </div>
      </DossierSection>
      <DossierSection title="CITY INFRASTRUCTURE OVERVIEW" color="titan-emerald">
        <p className={label}>TRANSPORTATION:</p>
        <ul className={mutedList}>
          <li>Echo Lifts - vibration-activated.</li>
          <li>Vinewalks - responsive bio-pathways.</li>
          <li>Gliderleaf Rail - upper-tier only.</li>
        </ul>
        <p className={`mt-4 ${label}`}>ENERGY SOURCE:</p>
        <ul className={mutedList}>
          <li>Verdant Core Photosynthesis Converters.</li>
          <li>Hidden geothermal link to Helios Vault backup core.</li>
        </ul>
        <p className={`mt-4 ${label}`}>SECURITY:</p>
        <ul className={mutedList}>
          <li>Dreamcatch Protocols detect intruders by emotional disturbance.</li>
          <li>Sentient vines can coil, bind, or sedate.</li>
          <li>Apex-only clearance gates are made of crystal-fiber lattice.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CULTURAL SNAPSHOT" color="titan-emerald">
        <p className={label}>BELIEFS:</p>
        <ul className={mutedList}>
          <li>Helion Prime is seen as the crown of Titan&apos;s mind - Apex believe it aligns with Titan&apos;s will.</li>
          <li>Publicly, Apex preach harmony. Privately, they breed perfection.</li>
        </ul>
        <p className={`mt-4 ${label}`}>EVENTS:</p>
        <ul className={mutedList}>
          <li>Voxx&apos;s Vigil: Annual celebration where the canopy pulses with light in honor of Titan&apos;s gifted ones.</li>
          <li>Ascension Day: Ritual where Echelon children are tested - failure means reassignment to Blackroot Verge.</li>
        </ul>
        <p className={`mt-4 ${label}`}>UNDERGROUND CULTURE:</p>
        <ul className={mutedList}>
          <li>Whispers of a movement called The Uncoiled Root - subroot workers who believe the Verdant Spiral is a living prison, not a gift.</li>
          <li>Vault cleaners have begun going mad, murmuring about Myth&apos;s return pulse.</li>
        </ul>
      </DossierSection>
      <DossierNote color="forge-magma">"Ascend to rule, descend to serve."</DossierNote>
    </div>
  )
}
