import { HoverReveal, BurnReveal, ChapterLock, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-forge-magma tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function SolarisFistDossier() {
  const headerData = {
    designation: 'PER-009X',
    classification: 'APEX ELITE // VANGUARD UNIT // ESCALATION CLASS - MONITORED',
    codename: 'SOLARIS FIST',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Darius Caelus Valkyrie' },
      { label: 'KNOWN ALIASES', value: 'Sun-Fused, Heat Sovereign, Apex Titan Vanguard' },
      { label: 'MUTATION TIER', value: <>High Nova - <HoverReveal reveal="fluctuating toward early Quasar under Subject Nyx exposure">[REDACTED]</HoverReveal></> },
      { label: 'ENERGY TYPE', value: 'Core-Thermic Resonance (Magma-Fusion Enhanced)' },
      { label: 'CLASS DESIGNATION', value: 'Apex Elite - Dominion Vanguard, 3rd Ring Ascension Candidate' },
      { label: 'BIRTH REGION', value: 'Helion Prime - Upper Boughs, Verdant Spiral' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="forge-magma" />
      <DossierSection title="PHYSICAL PROFILE" color="forge-magma">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6'8"</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> 345 lbs (muscle-dense)</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Apex powerhouse; broad-shouldered, volcanic</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Raven-black, tousled. Singed tips glow faint orange when spiked.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Glowing amber, veined with luminous magma rings.</li></ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>Subdermal magma lines visible during resonance</li><li>Back and shoulder scarring from early power ruptures</li><li>Resonance belt modulates body temperature through conduit veins</li></ul><p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><p>Feels like standing too close to a collapsing sun. Heat presses into the lungs; observers report firelight hallucinations and memory-burns.</p>
      </DossierSection>
      <DossierSection title="MUTATION / ENERGY DETAILS" color="forge-magma">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-emerald">Volcanic Eruption</span> - Channels magma-like energy into concussive blasts, thermic claws, flame pillars, and condensed solar orbs.</p><p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Skin resists extreme temperature but cracks after prolonged combat.</li><li>Body becomes a living furnace if not grounded.</li><li>Under emotional duress, magma escapes through eye ducts, palms, and spine joints.</li><li>Near Nyx, his energy destabilizes and evolves - <HoverReveal reveal="plasmafire (blue -> violet -> redcore)">[REDACTED]</HoverReveal></li></ul><p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Master-level under normal conditions; unstable under emotional compromise or Nyx exposure.</p><p><span className={label}>KNOWN TRIGGERS:</span> Betrayal, suppression attempts, high stress, Nyx's energy pulses.</p><p><span className={label}>COMBAT STYLE:</span> Aggressive, dominant, and unrelenting. Weakness in icy terrain under Cryotherne Protocol.</p><p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><ul className={mutedList}><li>Nyx - energy entanglement causes overclocking and mutation.</li><li>Vaerin Lyric - tag-team wind-fire tactics during Apex drills.</li></ul>
      </DossierSection>
      <DossierSection title="PSYCH PROFILE" color="forge-magma">
        <p><span className={label}>CORE TRAITS:</span> Arrogant, competitive, brooding loyalist. Driven to prove himself beyond his power.</p><p><span className={label}>STRENGTHS:</span> Tactical intuition, instinct-based combat efficiency, impossible stamina.</p><p><span className={label}>WEAKNESSES:</span> Temperamental, validation-seeking, emotionally guarded around Nyx.</p><p><span className={label}>CORE BELIEF:</span> <HoverReveal reveal={'"If I burn long enough, hard enough, maybe I\'ll reach the top."'}>[REDACTED]</HoverReveal></p><p><span className={label}>PRIVATE REALITY:</span> Haunted by cellular breakdown. He trusts Nyx instinctively without understanding why.</p>
      </DossierSection>
      <DossierSection title="FAMILY & ORIGIN" color="forge-magma">
        <p><span className={label}>MOTHER:</span> Serica Valkyrie - former Apex squad captain. Officially voided.</p><p><span className={label}>FATHER:</span> <FragmentLock fragmentKey="SOLARIS-FIST-01" reveal={<span className="text-titan-emerald">Unknown publicly - records sealed by AAN. His bloodline carries an imprint from the KING-LINE-01 embryo splice. Darius does not know.</span>} /></p><p className={`mt-3 ${label}`}>FAMILY DYNAMICS:</p><ul className={mutedList}><li>Imprinted at age 6 by a bonded Apex Ashdog.</li><li>Raised in Dominion Academy dormitories by AAN Command.</li><li>Grandfather: General Titus Valkyrie. Relationship: transactional, cold, violent.</li></ul>
      </DossierSection>
      <DossierSection title="HISTORY / PURPOSE" color="forge-magma">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Recruited into Apex pre-track after vaporizing a resonance drone squad at age 8.</p><p className={`mt-3 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><RedactedBlock lines={2} fragmentKey="ROT-OMEGA-13" reveal={['> Age 6: Body melted through the sleep cell. Ashdog imprint occurred during containment.', '> Age 8: Vaporized an entire resonance drone squad during a live drill.']}/><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>Hero of the Day champion x21</li><li>Led the Firefront Ascension Trial undefeated</li><li>Closed a pulse anomaly at the edge of Blackroot without backup</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Unauthorized emotional meltdown in Cryotherne.</li><li>Found collapsed after a spontaneous overload in Aetherion; only Nyx was present.</li></ul><RedactedBlock lines={3}/><p className={`mt-6 ${label}`}>WHY HE MATTERS TO TITAN'S FUTURE:</p><ul className={mutedList}><li>If Nyx fails, he is the last firewall before total collapse.</li><li>His power could ignite another atmosphere-wide Pulse Reversal.</li></ul>
      </DossierSection>
      <DossierSection title="SECRETS & PREFERENCES" color="forge-magma">
        <p><span className={label}>ROMANTIC HISTORY:</span> <BurnReveal reveal="Several casual encounters with other Apex members. His response to Nyx remains REDACTED by AAN.">[CLASSIFIED - CLICK TO BURN]</BurnReveal></p><p><span className={label}>FEAR PROFILE:</span> Burning alive without control. Being used as a weapon then discarded. Losing Nyx.</p><p><span className={label}>FOOD / STYLE:</span> Heat-melded protein bricks, volcanic salts, fruit freeze-drinks, and jungle-root tea with Dreg spice.</p><p><span className={label}>COMBAT PREFERENCE:</span> Close-range annihilation with flame-sculpted walls and terrain shifts.</p><p className={`mt-6 ${label}`}>ONE SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="SOLARIS-FIST-01" reveal={<span className="text-titan-emerald italic">He has filed paperwork to stand between Nyx and the Tribunal, and burn his own rank if necessary.</span>}/><div className="mt-3"><RedactedBlock lines={4}/></div>
      </DossierSection>
      <DossierNote color="forge-magma">"Subject Valkyrie displays godlike potential but resists full obedience. Continue exposure to Nyx - her presence reduces cellular breakdown. Potential coupling recommended for control purposes."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={49} reveal={<span className="text-cryo-blue">&gt; ADDENDUM [POST-TRIBUNAL]: Subject Valkyrie departed the Tribunal Complex in direct violation of protocol. Current location: UNKNOWN. Status: ACTIVE.</span>}/></div>
    </div>
  )
}
