import { HoverReveal, BurnReveal, ChapterLock, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-gold tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function HeliosKingDossier() {
  const headerData = {
    designation: 'PER-001K',
    classification: 'ASCENDANT STATUS // APEX PRIME // NOVA-PLUS',
    codename: 'HELIOS KING',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Helios Caen King' },
      { label: 'KNOWN ALIASES', value: 'The Radiant Spear, Crown of Aegis, First Flame' },
      { label: 'MUTATION TIER', value: 'Stellar-Class Apex - NOVA-PLUS' },
      { label: 'ENERGY TYPE', value: 'Solar Resonance Field - converts solar, cosmic, and radiation energy into light-matter constructs' },
      { label: 'CLASS DESIGNATION', value: 'Apex Prime - Dominion Trainer, Command Class' },
      { label: 'BIRTH REGION', value: 'Helion Prime - Vault Ascendant Womb: Cain Lineage, Line 001' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-gold" />
      <DossierSection title="PHYSICAL PROFILE" color="titan-gold">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6'11"</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> 294 lbs</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Broad-chested, celestial symmetry, extremely muscular</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Golden blond, shoulder-length, filament-like in the light.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Radiant white with a golden flare; no visible pupil unless emotional.</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Bronze, sun-kissed, naturally luminous around shoulders and collarbones.</li></ul><p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>Back-laced light-channel scars resembling carved angelic glyphs</li><li>Voice carries light static that triggers emotional responses in lower classes</li><li>Hard-light wings unfold from his back during combat</li></ul><p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><p>Feels like sacred sunlight. Pulse stabilizes, but prolonged exposure produces visions of order, worship, or burning clarity.</p>
      </DossierSection>
      <DossierSection title="MUTATION / ENERGY DETAILS" color="titan-gold">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-emerald">Solar Resonance</span> - Absorbs light, solar radiation, and cosmic rays to form beams, shields, flight propulsion, blinding flares, and condensed plasma-light.</p><p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Beacon flares that paralyze lower-tier energy classes</li><li>Light-matter spears, walls, wings, and memory-purging flashes</li><li>Focused solar output cleanses low-grade corruption or rot</li><li>Direct control over battlefield illumination and perception</li></ul><p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Absolute. No recorded flare or misfire events.</p><p><span className={label}>KNOWN TRIGGERS:</span> Eclipse conditions and Nyx's energy field.</p><p><span className={label}>COMBAT STYLE:</span> Dominant and divine. Disorients, blinds, overwhelms, then strikes with focused destruction.</p><p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><ul className={mutedList}><li>Vaerin Lyric - stormlight field merging</li><li>Nyx - light resonance forms shapes he does not consciously generate</li></ul>
      </DossierSection>
      <DossierSection title="PSYCH PROFILE" color="titan-gold">
        <p><span className={label}>CORE TRAITS:</span> Noble, disciplined, serene but intense, utterly focused on control.</p><p><span className={label}>STRENGTHS:</span> Tactical foresight, unshakeable presence, master-level trainer and speaker.</p><p><span className={label}>WEAKNESSES:</span> Hyper-perfection pressure; he has never failed and cannot process failure.</p><p><span className={label}>CORE BELIEF:</span> <HoverReveal reveal={'"I am Everything I am Meant to Be."'}>[REDACTED]</HoverReveal></p><p><span className={label}>PUBLIC BEHAVIOR:</span> Inspirational and unreachable. Speaks in deliberate, poetic cadence.</p><p><span className={label}>PRIVATE REALITY:</span> Fears hidden imperfections will surface and increasingly doubts the AAN after encountering Nyx.</p>
      </DossierSection>
      <DossierSection title="FAMILY & ORIGIN" color="titan-gold">
        <p><span className={label}>LINEAGE:</span> Descended from an Apex Corps founder and an original Exodus scientist. Seven generations show no mutation defects.</p><p><span className={label}>FAMILY DYNAMICS:</span> Trained from birth by the Dominion Temple; never lived among civilians.</p><p className={`mt-3 ${label}`}>NOTABLE HERITAGE SECRETS:</p><FragmentLock fragmentKey="KING-LINE-01" reveal={<span className="text-titan-emerald">He was not born naturally. His embryo was spliced with solar conversion protocols from the Catalyst Engine's upper node. He is an extension of the Engine wearing a man's face.</span>} />
      </DossierSection>
      <DossierSection title="HISTORY / PURPOSE" color="titan-gold">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Pre-ordained. Integrated into Dominion Temple before age 3 and never lived among civilians.</p><p className={`mt-3 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><RedactedBlock lines={3} fragmentKey="KING-LINE-01" reveal={['> Age 4: Illuminated the sealed inner walls of the Vault when frightened.', '> Age 7: Achieved flight under his own resonance.', '> Age 10: Burning enemies in controlled simulations.']}/><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>Trained two current Apex Enforcers</li><li>Prevented three Pulse Reversals with solar containment</li><li>Led the capture of the Third Rift Bloom over Stratos Gate</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Incinerated an Echelon medical team during a Cryotherne solar overload.</li><li>Secretly visited Nocturne Spire and returned with white hair at his temples.</li><li>Shown resonance mutations after prolonged exposure to Nyx.</li></ul><RedactedBlock lines={4}/><p className={`mt-6 ${label}`}>WHY HE MATTERS TO TITAN'S FUTURE:</p><ul className={mutedList}><li>If the image of Apex supremacy turns, the people will too.</li><li>Nyx's effect on him may be the greatest threat to AAN stability.</li></ul>
      </DossierSection>
      <DossierSection title="SECRETS & PREFERENCES" color="titan-gold">
        <p><span className={label}>ROMANTIC HISTORY:</span> <BurnReveal reveal="Publicly celibate. Audio logs record him speaking softly to Nyx, the only documented anomaly in his behavioral profile.">[CLASSIFIED - CLICK TO BURN]</BurnReveal></p><p><span className={label}>FEAR PROFILE:</span> Losing control, being revealed as inhuman, and learning Nyx threatens his beliefs rather than his body.</p><p><span className={label}>FOOD / STYLE:</span> Light-based protein gel, solar crystal water, and a melted black-iron Earth relic before battle.</p><p><span className={label}>COMBAT PREFERENCE:</span> Radiant pillars, blinding spear strikes, and battlefield command from the sky. Prefers not to kill.</p><p className={`mt-4 ${label}`}>KNOWN TO VISIT:</p><ul className={mutedList}><li>Memory gardens containing corrupted Apex clones</li><li>The unrepaired rooftop Nyx collapsed during an emotional outburst</li></ul><p className={`mt-6 ${label}`}>ONE SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="KING-LINE-01" reveal={<span className="text-titan-emerald italic">He no longer sees light when he closes his eyes. He sees red. The Catalyst solar protocol is mutating, and he wants to take Nyx's hand anyway.</span>}/><div className="mt-3"><RedactedBlock lines={6}/></div>
      </DossierSection>
      <DossierNote color="forge-magma">"Subject King's light is beginning to destabilize. Do not attempt erasure. If he fractures, the entire Apex ideological structure fractures with him."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={48} reveal={<span className="text-cryo-blue">&gt; ADDENDUM [POST-TRIBUNAL]: Subject King escaped without engaging Vexal directly. Current location: UNKNOWN - status ACTIVE, priority BLACK.</span>}/></div>
    </div>
  )
}
