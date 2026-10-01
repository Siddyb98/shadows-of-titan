import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function NocturneSpireDossier() {
  const headerData = {
    designation: 'CIT-OMEGA-01',
    classification: 'GEOSPHERE // DEEP CITY // OBSIDURA NOCTIS BELT',
    codename: 'NOCTURNE SPIRE',
    headerFields: [
      { label: 'REGION', value: 'Obscura Noctis Belt' },
      { label: 'SHAPE', value: 'Vertical spire with non-Euclidean geometry' },
      { label: 'SIZE', value: 'Approximately 7 km tall, with unknown sublevels beneath surface' },
      { label: 'LOCATION', value: 'Deep in Titan\'s shadow belt, a region of perpetual twilight' },
      { label: 'HAZARDS', value: 'Gravitational distortion, surveillance loss, and erasure storms' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="GEOGRAPHIC CONTEXT" color="titan-emerald">
        <p>The tower that stores secrets. A silent fracture in Titan&apos;s memory, reality, and time.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li><span className={label}>REGION:</span> Obscura Noctis Belt.</li>
          <li><span className={label}>SHAPE:</span> Vertical spire with non-Euclidean geometry; appears twisted or incomplete depending on angle.</li>
          <li><span className={label}>SIZE:</span> Approximately 7 km tall, with unknown sublevels beneath the surface.</li>
          <li><span className={label}>LOCATION:</span> Deep in Titan&apos;s shadow belt, a region of perpetual twilight.</li>
          <li><span className={label}>TERRAIN:</span> Cracked obsidian ridges, ash dunes, and lightless canyons.</li>
          <li><span className={label}>HAZARDS:</span> Gravitational distortion, surveillance loss, and erasure storms.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CITY STRUCTURE & LAYERS" color="titan-emerald">
        <p>Nocturne Spire is built like a needle stabbed through the folds of space. Entry is permitted to very few. Most who visit don&apos;t recall being there, or recall things that never happened.</p>
        <p className={`mt-4 ${label}`}>THE MONOLITH CROWN // UPPER SPIRE // BLACK UNIT COMMAND & TEMPORAL MONITORING</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Black Archive: Stores memories extracted from ex-Apex.</li>
          <li>Sable Deck: Black Unit dormitories, observation chambers, and mind-stabilization zones.</li>
          <li>Refraction Chamber: Warped physics lab where surveillance footage from across Titan loops endlessly; some clips are from future events.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Floors shift layout between visits.</li>
          <li>Surveillance is retinal.</li>
          <li>Memory filters hum like lullabies, subtly reshaping thoughts.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Black Units don&apos;t speak unless ordered.</li>
          <li>Their identities are wiped, overwritten, and sealed.</li>
          <li>Rituals are performed without the mind; only the body remembers.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE SHARD LABS // MID-LAYERS // ERASURE TECH & ANOMALY STUDY</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Neuroclave: Houses AI constructs created to isolate dangerous thoughts; some became sentient.</li>
          <li>Veil Sanctum: Where memory is rewritten, erased, or substituted. Sometimes visitors leave with new origins.</li>
          <li>Event Fracture Observatory: Monitors time-folds, paradox fluctuations, and causal interference.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Soundproofed with black-glass echo tiles.</li>
          <li>Neural paths through these levels sometimes loop backward.</li>
          <li>Lights only respond to biological cognitive activity.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>No mirrors. No names.</li>
          <li>Employees wear full blackout suits and speak in flat tones.</li>
          <li>Some rooms lock from the inside only, yet are found empty.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE OBSIDIAN ANNEX // LOWER DEPTHS // THE ERASED, THE ANOMALOUS, THE FORGOTTEN</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Wraith Pit: Containment chambers for anomaly-class entities, including ex-Apex with unstable powers.</li>
          <li>Silent Seed Vault: Holds genetic material from the extinct lines and one labeled MPRIME.</li>
          <li>Darkfold Core: Machine-node built from a shattered Catalyst Engine.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Gravity here fractures: items fall sideways or, in extreme cases, disappear mid-air and reappear elsewhere.</li>
          <li>Air contains hallucinogenic particulates released during flux events.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>No one is born here; they are assigned or erased into it.</li>
          <li>Black Unit initiates undergo Unmaking: full identity wipe followed by neural fusion with directive code.</li>
          <li>There are no funerals in Nocturne.</li>
        </ul>
      </DossierSection>
      <DossierSection title="DISTRICTS AT A GLANCE" color="titan-emerald">
        <div className="space-y-4 text-aan-white/70">
          <div><p className={label}>BLACK ARCHIVE // MONOLITH CROWN // MEMORY CONTAINMENT</p><p>Extracted thought loops stored in frozen time cells.</p></div>
          <div><p className={label}>SABLE DECK // MONOLITH CROWN // HOUSING FOR BLACK UNITS</p><p>Auto-healing sleep chambers, zero sound.</p></div>
          <div><p className={label}>REFRACTION CHAMBER // MONOLITH CROWN // SURVEILLANCE CORE</p><p>Views future events through data glitches.</p></div>
          <div><p className={label}>NEUROCLAVE // SHARD LABS // AI MENTAL ISOLATION</p><p>Houses broken AI and emotion-killers.</p></div>
          <div><p className={label}>VEIL SANCTUM // SHARD LABS // MIND REWRITE FACILITY</p><p>Visitors leave not knowing they were ever there.</p></div>
          <div><p className={label}>EVENT FRACTURE OBSERVATORY // SHARD LABS // TIME RIFT MONITOR</p><p>Maps paradox events and flux storms.</p></div>
          <div><p className={label}>WRAITH PIT // OBSIDIAN ANNEX // ANOMALY CELL BLOCKS</p><p>Failed Apex, corrupted clones, reality glitches.</p></div>
          <div><p className={label}>SILENT SEED VAULT // OBSIDIAN ANNEX // GENETIC ARCHIVE</p><p>Houses lineages thought wiped out.</p></div>
          <div><p className={label}>DARKFOLD CORE // OBSIDIAN ANNEX // CATALYST SHARD HUB</p><p>May be sentient.</p></div>
        </div>
      </DossierSection>
      <DossierSection title="INFRASTRUCTURE & ENERGY SYSTEMS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Temporal Sinks: Pull temporal friction from space-time to stabilize localized time flow.</li>
          <li>Black Glass Nodes: Conscious, growing glass that acts as memory security and hallucination suppressor.</li>
          <li>Oblivion Rails: One-way transport system; passengers forget where they were before boarding.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CULTURE & CODE" color="titan-emerald">
        <ul className={mutedList}>
          <li>Truth is fragmented intentionally to protect the system, and from it.</li>
          <li>Reality shifts subtly the longer you stay; you lose names, sensations, even your own internal monologue.</li>
        </ul>
        <p className={`mt-4 ${label}`}>RITUALS:</p>
        <RedactedBlock lines={2} />
        <p className={`mt-4 ${label}`}>SOCIAL ROLES:</p>
        <RedactedBlock lines={2} />
      </DossierSection>
      <DossierSection title="NOCTURNE SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>The Spire is rumored to have never been built; some say it simply appeared one day.</li>
          <li>The Darkfold Core is older than the Exodus itself and may be the known reason the Catalyst Engines malfunctioned.</li>
          <li>A recorded loop hidden in the Neuroclave shows Myth speaking to herself thousands of years ago.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierNote color="forge-magma">"A silent fracture in Titan&apos;s memory, reality, and time."</DossierNote>
    </div>
  )
}
