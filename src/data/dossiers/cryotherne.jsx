import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function CryotherneDossier() {
  const headerData = {
    designation: 'CIT-004',
    classification: 'GEOSPHERE // DEEP CITY // FROSTLINE DIVIDE',
    codename: 'CRYOTHORNE',
    headerFields: [
      { label: 'REGION', value: 'Frostline Divide' },
      { label: 'SHAPE', value: 'Crescent-shaped mountain arc, approximately 350 km' },
      { label: 'LOCATION', value: 'Southeastern glacial zone, near Titan\'s dark hemisphere' },
      { label: 'TERRAIN', value: 'Jagged ice cliffs, deep frozen lakes, sub-zero ridges with glowing cryo-gas veins' },
      { label: 'HAZARDS', value: 'Mirror-whiteouts, humming fissures, and cryo-storm quakes' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="GEOGRAPHIC CONTEXT" color="titan-emerald">
        <p>A glacial cathedral of memory, mutation, and forgotten genesis.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li><span className={label}>REGION:</span> Frostline Divide.</li>
          <li><span className={label}>SHAPE:</span> Crescent-shaped mountain arc, approximately 350 km.</li>
          <li><span className={label}>LOCATION:</span> Southeastern glacial zone, near Titan&apos;s dark hemisphere.</li>
          <li><span className={label}>TERRAIN:</span> Jagged ice cliffs, deep frozen lakes, sub-zero ridges with glowing veins of cryo-gas.</li>
          <li><span className={label}>HAZARDS:</span> Mirror-whiteouts, optical hallucinations, fissures that hum with energy, and cryo-storm quakes.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CITY STRUCTURE & LEVELS" color="titan-emerald">
        <p>Cryothorne is nested into the ice cliffs and spirals downward into the core of a frozen mountain. Each ring is partially translucent, giving the illusion of a city suspended in ice.</p>
        <p className={`mt-4 ${label}`}>THE SHARD CREST RIM // UPPER TIER // PUBLIC SECTOR & SCIENCE ENCLAVES</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Glacier Gate: Main entry via frozen skyway, flanked by shimmering obelisks made of crystallized mist.</li>
          <li>Fractaline Dome: Medical research and healing centers; used by Echelon and some Apex test units.</li>
          <li>Chalice Ward: Healing sanctuaries that use cold-reactive flora to brew poultices and cryo-serums.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Streets are made from refraction crystal glass that glows softly when stepped on.</li>
          <li>Heating is localized, body-targeted - no ambient warmth allowed to preserve city integrity.</li>
          <li>AI-bots float like white petals, designed to emit localized warmth to patients only.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Cryothorne citizens speak in low tones to avoid echo reverberations that cause migraines in thin air.</li>
          <li>Frost ink tattoos react to emotion and are often used instead of facial expressions.</li>
          <li>Music is forbidden to lessen vibrations.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE DEEP VAULT RIMS // MID-TIER // PRESERVATION & GENETIC CHAMBERS</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Echo Hall: Memory restoration chambers using sonic cryo-echoes to replay or rewrite past events.</li>
          <li>Frostborne Recesses: Bio-cloning tanks for regenerative growth and experimental Apex limb crafting.</li>
          <li>Vault Zero Access: Heavily guarded entrance to the original Apex Prototype Complex.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Chambers are soundproofed with cryoglass sheets; doors slide open by touch temperature only.</li>
          <li>Cryo-lights grow like fungi on walls; they brighten in the presence of emotional distress.</li>
          <li>DNA is transferred through frozen plasma veins, networked through the walls.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Rebirthing rituals occur under the Vault lights where new Apex are birthed in white-silence.</li>
          <li>Echelon caretakers are called Whitesingers, trained to preserve both body and identity.</li>
          <li>Punishment for misdeeds is Frostfall - a sentence of memory erasure through freezing pulse exposure.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE ICEGRAVE HOLLOW // LOWER TIER // FORBIDDEN ZONE & SUBGLACIAL SECRETS</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>The Silence Well: Center of Lake Silence, above the buried Catalyst Well, permanently off-limits.</li>
          <li>Fossil Veins: Caves where Resonant Fossils, ancient humanoid-ice fusions, pulse faintly.</li>
          <li>Wraith Substratum: Ruins of Apex experiments gone wrong, sealed in energy cages inside the ice.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Temperature is regulated by entropy siphons to prevent spontaneous time-warp glitches.</li>
          <li>Surveillance drones often fail here and data gets looped, creating frozen ghost echoes.</li>
          <li>Access requires Apex-class biometric resonance plus emotional dampening.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>No one speaks of the lower tier.</li>
          <li>A broken AI buried in the Wraith Substratum sometimes sings lullabies in binary.</li>
        </ul>
      </DossierSection>
      <DossierSection title="DISTRICTS AT A GLANCE" color="titan-emerald">
        <div className="space-y-4 text-aan-white/70">
          <div><p className={label}>GLACIER GATE // SHARDCREST RIM // ENTRY & SURFACE PLAZA</p><p>Obelisks that pulse with location data.</p></div>
          <div><p className={label}>FRACTALINE DOME // SHARDCREST RIM // MEDICAL + RESEARCH</p><p>Cryo-tech labs, Echelon healer base.</p></div>
          <div><p className={label}>CRYO WARD // SHARDCREST RIM // HEALING CENTER</p><p>Dreg-derived cold-poultice use here.</p></div>
          <div><p className={label}>ECHO HALL // DEEP VAULT RIMS // MEMORY TECH</p><p>Sonic echoes used for memory replay.</p></div>
          <div><p className={label}>FROSTBORNE RECESSES // DEEP VAULT RIMS // CLONING & CRAFTING</p><p>Experimental Apex limb growth centers.</p></div>
          <div><p className={label}>VAULT ZERO ACCESS // DEEP VAULT RIMS // APEX PROTOTYPE VAULT</p><p>Sealed lab with Myth-related secrets.</p></div>
          <div><p className={label}>THE SILENCE WELL // ICEGRAVE HOLLOW // CATALYST SITE</p><p>Energy-stilled water hides the buried Well.</p></div>
          <div><p className={label}>FOSSIL VEINS // ICEGRAVE HOLLOW // MUTANT REMAINS</p><p>Fossilized humanoid-ice hybrids still pulse.</p></div>
          <div><p className={label}>WRAITH SUBSTRATUM // ICEGRAVE HOLLOW // EXPERIMENT RUINS</p><p>Failed Apex tests cry silently in crystal cages.</p></div>
        </div>
      </DossierSection>
      <DossierSection title="INFRASTRUCTURE & ENERGY SYSTEMS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Cryo-Weave Veins: Threaded through city walls, carrying both power and DNA samples.</li>
          <li>Echo Radiators: Emit sub-sonic heat waves to prevent explosive thermal reactions.</li>
          <li>Frost Barriers: Used to seal off dangerous anomalies or time-slip breaches.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CULTURE & CODE" color="titan-emerald">
        <p><span className={label}>EXPRESSION IS MINIMAL:</span> Emotion is seen as heat of the mind; too much melts clarity.</p>
        <p className={`mt-4 ${label}`}>RITUALS:</p>
        <ul className={mutedList}>
          <li>Glace Communion: Recitation of one&apos;s ancestral memory into a frozen basin; if accepted, the basin glows.</li>
          <li>White Trials: Children are tested for cold resistance and emotional stillness; failure results in Frostward reassignment.</li>
        </ul>
        <p className={`mt-4 ${label}`}>SOCIAL ROLES:</p>
        <ul className={mutedList}>
          <li>Whitesingers: Memory keepers who soothe patients and echo their memories aloud.</li>
          <li>Cryo-Clerics: Bio-surgeons and Apex design specialists.</li>
          <li>Frost Sentinels: Guard the path to Vault Zero and the Catalyst Well.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CRYOTHORNE SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>The Catalyst Well under Lake Silence is not inert.</li>
          <li>Resonant Fossils have Apex signatures older than the first generation; no one knows who they were.</li>
          <li>Vault Zero still has a sealed Genesis Capsule labeled: M1YTH SEED: DO NOT BREACH.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierNote color="forge-magma">"A glacial cathedral of memory, mutation, and forgotten genesis."</DossierNote>
    </div>
  )
}
