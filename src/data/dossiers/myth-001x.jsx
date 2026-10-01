import { HoverReveal, BurnReveal, ChapterLock, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-gold tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function MythDossier() {
  const headerData = {
    designation: 'PER-001X',
    classification: 'CLASSIFIED APEX-ANOMALY HYBRID // UNSTABLE - MONITORED 100%',
    codename: 'NYX',
    headerFields: [
      { label: 'LEGAL NAME', value: <>Unknown - suspected alias: <FragmentLock fragmentKey="MYTH-001X" reveal="MYTH-001X" /></> },
      { label: 'KNOWN ALIASES', value: 'Nyx, The Voidborn, Starlight Ruin' },
      { label: 'MUTATION TIER', value: 'Quasar (Only confirmed individual in this class)' },
      { label: 'ENERGY TYPE', value: 'Anomaly - Tri-Fused: Temporal / Spatial / Entropic Conversion' },
      { label: 'CLASS DESIGNATION', value: 'Classified Apex-Anomaly Hybrid' },
      { label: 'BIRTH REGION', value: <>Unknown - possibly forged within <HoverReveal reveal="Helios Vault">[REDACTED]</HoverReveal></> },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-gold" />
      <DossierSection title="PHYSICAL PROFILE" color="titan-gold">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 5'6"</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> 118 lbs (variable based on energy intake)</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Sleek-mesomorphic; defined muscle tone with high flexibility</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Midnight-black, thigh-length, often appears to float or flicker when she wells energy.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Liquid silver with an inner corona of shifting cosmic light.</li></ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>Back-lined with Catalyst fractures (pulses faintly)</li><li>Hands occasionally emit micro-rifts when stressed</li><li>Faint glyphs emerge on her sternum and neck during resonance</li></ul>
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><p>Presence feels like gravity is slightly warped. People report vertigo, time-loop deja vu, or lucid dream flashes in her proximity.</p>
      </DossierSection>
      <DossierSection title="MUTATION / ENERGY DETAILS" color="titan-gold">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-emerald">Dark Transformation</span> - She converts matter, energy, or memory into altered states.</p><p><span className={label}>TECH DESIGNATION:</span> ATLAS Protocol (Absolute Terraform Layer Adaptation System)</p><p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li><span className="text-aan-white/80">Temporal Rift</span> - Stops, loops, or speeds up time in small fields.</li><li><span className="text-aan-white/80">Spatial Warp</span> - Warps herself or others with no known limit.</li><li><span className="text-aan-white/80">Life Conversion</span> - Absorbs life or matter as fuel.</li></ul><p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Near-absolute under rest. Dangerous when starved, emotional, or enraged.</p><p><span className={label}>KNOWN TRIGGERS:</span> Guilt, starvation, Catalyst Wells, Apex betrayal, Earth memory stimuli.</p><p><span className={label}>COMBAT STYLE:</span> Ghost-fast. Omnidirectional movement. Uses an opponent's own energy against them.</p>
      </DossierSection>
      <DossierSection title="PSYCH PROFILE" color="titan-gold">
        <p><span className={label}>CORE TRAITS:</span> Strategic, intense, sarcastic, deeply empathic when unguarded.</p><p><span className={label}>STRENGTHS:</span> Hyper-cognition under pressure, energy manipulation, resistance to memory intrusion.</p><p><span className={label}>WEAKNESSES:</span> Emotionally volatile, attachment-prone, fears her own power.</p><p><span className={label}>CORE BELIEF:</span> <HoverReveal reveal="UNKNOWN">[REDACTED]</HoverReveal></p><p><span className={label}>PRIVATE REALITY:</span> Suffers constant existential fatigue. Craves gentleness but fears it is a trap.</p>
      </DossierSection>
      <DossierSection title="FAMILY & ORIGIN" color="titan-gold">
        <p><span className={label}>BIRTH REGION:</span> <HoverReveal reveal="Unknown - possibly forged within Helios Vault / Catalyst anomaly event">[REDACTED]</HoverReveal></p><p className={`mt-3 ${label}`}>FAMILY MEMBERS:</p><ul className={mutedList}><li>Biological data: Fragmented. No maternal or paternal match in global databanks.</li><li>Spiritual connection: Attached to both Dreg and Apex figures; bonds fiercely.</li></ul><p className={`mt-3 ${label}`}>NOTABLE HERITAGE SECRETS:</p><ul className={mutedList}><li>Some Helios Vault engineers believe she is a resonance child.</li><li>One Apex Council file refers to her as <FragmentLock fragmentKey="VEX-07-OMEGA" reveal={'"the Engine\'s first born."'} /></li></ul>
      </DossierSection>
      <DossierSection title="HISTORY / PURPOSE" color="titan-gold">
        <p><span className={label}>HOW SHE ENTERED THE SYSTEM:</span> Ascension Trial. Under false pretenses.</p><p className={`mt-3 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><RedactedBlock lines={3} fragmentKey="AER-002" reveal={['> Age 4: Uncontrolled warp event collapsed a training hall into a micro-rift.', '> Age 7: Suppression drugs mutated around blockers, integrating them.', '> Age 9: First recorded temporal loop. Duration: 3 minutes 41 seconds.']} /><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><RedactedBlock lines={5} /><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Annihilated an Apex Enforcer in self-defense; later rewritten as combat malfunction.</li><li>Possibly visited Pulse Grid Wells without escort; records wiped.</li><li>Secretly transferred energy to Dregs in Blackroot during a freeze season.</li></ul>
      </DossierSection>
      <DossierSection title="SECRETS & PREFERENCES" color="titan-gold">
        <p><span className={label}>ROMANTIC HISTORY:</span> <BurnReveal reveal="Unknown official relationships. Has shown bonding behavior toward Darius Valkyrie and an unnamed Null-encoded rebel.">[CLASSIFIED - CLICK TO BURN]</BurnReveal></p><p><span className={label}>FEAR PROFILE:</span> Nightmares include being trapped in the Engine, forgotten by everyone, or consuming all life.</p><p><span className={label}>FOOD / STYLE:</span> Prefers simple street food and jungle-root tea with Dreg spice.</p><p className={`mt-6 ${label}`}>ONE SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="M-1YTH-SEED" reveal={<span className="text-titan-emerald italic">She has already seen the Codex Aetherion. When she returns to Lake Silence, she will remember.</span>} /><div className="mt-3"><RedactedBlock lines={6} /></div>
      </DossierSection>
      <DossierNote color="forge-magma">"Subject Myth is not to be terminated under any circumstance. If control fails, containment priority overrides system integrity. Prepare protocol: Ascendancy Collapse Trigger."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={48} reveal={<span className="text-cryo-blue">&gt; ADDENDUM [POST-TRIBUNAL]: Subject was remanded to Helios Vault for psychic dissection. Current location: UNKNOWN. Status: ACTIVE.</span>} /></div>
    </div>
  )
}
