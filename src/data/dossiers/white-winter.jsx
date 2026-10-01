import { HoverReveal, BurnReveal, FragmentLock, ChapterLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function WhiteWinterDossier() {
  const headerData = {
    designation: 'PER-014E',
    classification: 'LEGACY INDEX // APEX TRACK - LINEAGE-CLEARED (CRYOTHERNE CADRE)',
    codename: 'WHITE WINTER',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Eira Niveus Solaris' },
      { label: 'KNOWN ALIASES', value: 'Lady Frostburn, Glass Flame, The Quiet Ember' },
      { label: 'MUTATION TIER', value: 'Diamond-Tier Hybrid (Cryo-Pyroline Cross-Anomaly)' },
      { label: 'ENERGY TYPE', value: 'Cryo-Pyrokinesis - Bluefire Entropy Layered with Subzero Flow' },
      { label: 'CLASS DESIGNATION', value: 'Apex Track - Lineage-Cleared (Cryotherne Cadre)' },
      { label: 'BIRTH REGION', value: 'Cryotherne - Vault Zero Surrogacy Wing' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="cryo-blue" />
      <DossierSection title="PHYSICAL PROFILE" color="cryo-blue">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 5'10"</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> 120 lbs</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Thin, long-limbed; almost weightless in movement</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Frost-white, straight to mid-back. Frostflake patterns appear when distressed.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Pale glacier blue with flickers of soft flame.</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Porcelain pale. Veins glow blue during focus.</li></ul><p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>Frost trail follows her barefoot in Cryotherne</li><li>Breath freezes in midair in all climates</li><li>Scar over left clavicle from failed heat-stabilization injection</li></ul><p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><p>Feels like standing at the edge of a frozen cliff under a clear moon.</p>
      </DossierSection>
      <DossierSection title="MUTATION / ENERGY DETAILS" color="cryo-blue">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-emerald">Cryo-Pyrokinetics</span> - Manifests cold fire and frozen heat. Her burning cold extinguishes fire, halts energy surges, and freezes enemies mid-motion.</p><p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Freezes metal on contact under stress</li><li>Creates whitefire domes that slow kinetic attacks</li><li>Keeps a light-blue inner burn active to prevent internal freezing</li></ul><p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Masterful under pressure, but overly cautious unless emotion fractures.</p><p><span className={label}>KNOWN TRIGGERS:</span> Apex cruelty, her mother, attempted containment, and Nyx's refracting proximity.</p><p><span className={label}>COMBAT STYLE:</span> Defensive and graceful until provoked; traps rather than kills, but can stop atoms from moving.</p><p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><ul className={mutedList}><li>Rhea Vaelith - preserves life while Eira slows entropy</li><li>Kael Drayk - safely adapts to her sparring output</li></ul>
      </DossierSection>
      <DossierSection title="PSYCH PROFILE" color="cryo-blue">
        <p><span className={label}>CORE TRAITS:</span> Elegant, emotionally distant, fiercely observant, brokenly loyal.</p><p><span className={label}>STRENGTHS:</span> Thinks ten moves ahead and maintains impeccable control under duress.</p><p><span className={label}>WEAKNESSES:</span> Bloodline guilt, fear of intimacy, and dissociation when overwhelmed.</p><p><span className={label}>CORE BELIEF:</span> <HoverReveal reveal={'"If I remain warm enough, maybe I won\'t destroy anything else."'}>[REDACTED]</HoverReveal></p><p><span className={label}>PUBLIC BEHAVIOR:</span> Polite, formal, and coldly perfect.</p><p><span className={label}>PRIVATE REALITY:</span> Keeps a frozen locket containing an image of a brother she refuses to confirm exists.</p>
      </DossierSection>
      <DossierSection title="FAMILY & ORIGIN" color="cryo-blue">
        <p><span className={label}>FATHER:</span> AAN Apex Vanguard Commander - deceased in the Frostfall Conflagration.</p><p><span className={label}>MOTHER:</span> Former Abhorrent-class Null - voided after childbirth.</p><p className={`mt-3 ${label}`}>FAMILY DYNAMICS:</p><ul className={mutedList}><li>Genetic scandal, almost terminated in embryo.</li><li>Protected by an AAN scientist who falsified her class markers.</li></ul><p className={`mt-3 ${label}`}>NOTABLE HERITAGE SECRETS:</p><FragmentLock fragmentKey="FROSTBORNE-ZERO" reveal={<span className="text-titan-emerald">Her cryo-path signature matches a Cryotherne fossil exactly. She may be the first living iteration of a pre-Exodus bloodline.</span>} />
      </DossierSection>
      <DossierSection title="HISTORY / PURPOSE" color="cryo-blue">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Admitted under Apex clearance for flame-variant testing; rose rapidly through exams and simulations.</p><p className={`mt-3 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><RedactedBlock lines={2} fragmentKey="FROSTBORNE-ZERO" reveal={['> Age 3: Her tears froze mid-fall.', '> Age 7: Stopped an uncontrolled firestorm by walking into the center and breathing outward.']}/><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>Developed the Cold Flame Drill Matrix</li><li>Froze a collapsing Frostline Divide bridge, saving 27 citizens</li><li>Honored in the Ascendant Winter Rite</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Accidentally froze her handler at age 9; reframed as resonance shock.</li><li>May have met Vexal in the ice tunnels beneath Cryotherne.</li><li>Won a secret pulse duel against Darius; neither speaks of it.</li></ul><RedactedBlock lines={3}/><p className={`mt-6 ${label}`}>WHY SHE MATTERS TO TITAN'S FUTURE:</p><ul className={mutedList}><li>Her existence disproves class purity.</li><li>She may be the only slim chance to freeze Nyx back into Titan's core.</li></ul>
      </DossierSection>
      <DossierSection title="SECRETS & PREFERENCES" color="cryo-blue">
        <p><span className={label}>ROMANTIC HISTORY:</span> <BurnReveal reveal="No confirmed partners. One rumor of a kiss; when pressed, she goes silent for exactly eleven seconds.">[CLASSIFIED - CLICK TO BURN]</BurnReveal></p><p><span className={label}>FEAR PROFILE:</span> Being locked underground, losing control of her flame, or discovering it was only borrowed.</p><p><span className={label}>FOOD / STYLE:</span> Freezes food first; prefers silk, frostglass jewelry, silver, pearl, and mist blue.</p><p><span className={label}>COMBAT PREFERENCE:</span> Frostbite traps, whiteflame lances, pressure domes.</p><p className={`mt-4 ${label}`}>KNOWN TO VISIT:</p><ul className={mutedList}><li>Ice gardens in Cryotherne</li><li>Vault Zero's silent wing</li><li>The Lake of Silence</li></ul><p className={`mt-6 ${label}`}>ONE SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="FROSTBORNE-ZERO" reveal={<span className="text-titan-emerald italic">She can create heatless flame. The locket contains a brother who was never born; she carved his face from a fossil echo.</span>}/><div className="mt-3"><RedactedBlock lines={5}/></div>
      </DossierSection>
      <DossierNote color="forge-magma">"Subject Solaris presents dangerously balanced traits. If she ever freezes herself, we lose our last cryo-lock on the Lake Silence Well."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={55} reveal={<span className="text-cryo-blue">&gt; ADDENDUM [POST-TRIBUNAL]: Subject Solaris left with Cryotherne delegates and has not reported for Apex duty in 72 hours. Current location: UNKNOWN - priority BLUE.</span>}/></div>
    </div>
  )
}
