import { HoverReveal, BurnReveal, FragmentLock, ChapterLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-forge-magma tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function RotSaintDossier() {
  const headerData = {
    designation: 'ANOM-000Ω',
    classification: 'OMEGA ALERT // TERMINAL EXPANSION CLASS // MENTAL RETAINED',
    codename: 'VEXAL',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Vexal Kaine Ophedius' },
      { label: 'KNOWN ALIASES', value: 'The Black Herald, The Rot Saint, Pulseblight, One-Eye, The Whisper in Ash' },
      { label: 'MUTATION TIER', value: 'Omega - classified beyond Quasar' },
      { label: 'ENERGY TYPE', value: 'Entropic Ashvoid - reverse-burn decay field with cross-dimensional rot signature' },
      { label: 'CLASS DESIGNATION', value: 'Abhorrent (Omega Subtype - Mental Retained)' },
      { label: 'BIRTH REGION', value: <>[REDACTED: CLAIMED <HoverReveal reveal="Miridan Hollow - unconfirmed">MIRIDAN HOLLOW</HoverReveal>]</> },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="forge-magma" />
      <DossierSection title="PHYSICAL PROFILE" color="forge-magma">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6'4"</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> 167 lbs</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Lean, muscular</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Snow-white, buzzed on one side, tangled over the left eye. Faintly glows.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Fully black sclera with subtle silver webwork that pulses like cracked obsidian.</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Bone-pale and desaturated; darkens around tech implants.</li></ul><p className={`mt-4 ${label}`}>CYBERNETICS:</p><ul className={mutedList}><li>Left jaw and cheek laced with polished black AlloyBone</li><li>Embedded rot-filtration valve in the throat</li><li>Entropy stabilizer housed in the right palm</li></ul><p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><p>Feels like rot in your bloodstream. Proximity causes hallucinations, mental fractures, nausea, and unshielded system failure within three meters.</p><p className={`mt-4 ${label}`}>WARDROBE:</p><p>Monochrome layered coats with veil-thread lining, Ashguard armor, entropy symbols, and one black lens over his organic eye.</p>
      </DossierSection>
      <DossierSection title="MUTATION / ENERGY DETAILS" color="forge-magma">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-emerald">Ashveil Corruption</span> - Emits an Entropic Ashveil Field that accelerates biological collapse, infection, and neurostatic rupture. A graze can destroy tissue, mutation strands, synthetic compounds, and light-based organisms.</p><p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Controls rot-veins mid-air as necrotic whips.</li><li>Entropy pulses through surrounding matter like a plague.</li><li>Stores decay fields inside tech fragments for later release.</li></ul><p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Externally perfect. Internally unstable. He chooses when to let go.</p><p><span className={label}>KNOWN TRIGGERS:</span> Enclosed spaces, Apex propaganda, emotional displays, and memory feedback loops.</p><p><span className={label}>COMBAT STYLE:</span> Seduce → Sabotage → Rot → Walk Away.</p><p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><p className="text-aan-white/60 italic">None. Those who fought beside him are voided, insane, or still decaying.</p>
      </DossierSection>
      <DossierSection title="PSYCH PROFILE" color="forge-magma">
        <p><span className={label}>CORE TRAITS:</span> Charismatic, coldly playful, hyper-intelligent, nihilistic, unnervingly patient.</p><p><span className={label}>STRENGTHS:</span> Master manipulator, hacker of AAN neural code, polylingual, and fluent in old-Earth weapons.</p><p><span className={label}>WEAKNESSES:</span> God-complex under stress, nonlinear memory, and an inability to sustain trust.</p><p><span className={label}>CORE BELIEF:</span> <HoverReveal reveal={'"Titan is the lie they planted on our corpses. I am the rot beneath it. I am the truth."'}>[REDACTED]</HoverReveal></p><p><span className={label}>PUBLIC BEHAVIOR:</span> Mythological in Dreg quarters; Apex youth are taught never to speak his name aloud.</p><p><span className={label}>PRIVATE REALITY:</span> Wants to destroy the Catalyst Engine and keeps a map of every Apex birth record.</p>
      </DossierSection>
      <DossierSection title="FAMILY & ORIGIN" color="forge-magma">
        <p className={label}>FAMILY MEMBERS:</p><ul className={mutedList}><li>Rumored son of Altae Ophedius, a vanished Helios Vault scientist.</li><li>Other records suggest he was grown from an early Apex experiment.</li><li>A sister named Sira was lost in a rot burst; her body was never recovered.</li></ul><p className={`mt-3 ${label}`}>FAMILY DYNAMICS:</p><p className="text-aan-white/60">Nonexistent. Claims to have voided anyone who claimed him.</p><p className={`mt-3 ${label}`}>NOTABLE HERITAGE SECRETS:</p><ul className={mutedList}><li>DNA shows imprinting from all three Catalyst Wells.</li><li>Some Council members believe he is a mirrored echo of the Engine itself.</li></ul>
      </DossierSection>
      <DossierSection title="HISTORY / PURPOSE" color="forge-magma">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Broke into the Academy during a sabotage run at age 10 and killed a full Apex training squad with rot exposure.</p><p className={`mt-3 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><RedactedBlock lines={3} fragmentKey="ROT-OMEGA-13" reveal={['> His crib rotted into fungus before he could walk.', '> By age 5, trees died when he laughed.', '> First human contact caused a Dreg facility meltdown. Batch designation: ROT-OMEGA-13.']}/><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>Leader of the Ash Blight Rebellion.</li><li>Collapsed an Apex convoy using a hijacked Forge Rail line.</li><li>Orchestrated the Cryotherne Rift Sabotage.</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><RedactedBlock lines={4}/><p className={`mt-6 ${label}`}>WHY HE MATTERS TO TITAN'S FUTURE:</p><ul className={mutedList}><li>He is the antithesis of the Apex dream.</li><li>Every time he rises, more factions fracture.</li></ul>
      </DossierSection>
      <DossierSection title="SECRETS & PREFERENCES" color="forge-magma">
        <p><span className={label}>ROMANTIC HISTORY:</span> <BurnReveal reveal="N/A officially. Lyra Solvyn was once his mirror. Both refuse to name what remains.">[CLASSIFIED - CLICK TO BURN]</BurnReveal></p><p><span className={label}>FEAR PROFILE:</span> Unofficially, that he was meant to die in the joint mutation experiment with Dryst, or that Lyra is already gone.</p><p><span className={label}>FOOD / STYLE:</span> Does not eat conventionally. Always covered. Prefers to be unreadable.</p><p><span className={label}>COMBAT PREFERENCE:</span> Seduce → Sabotage → Rot → Walk Away.</p><p className={`mt-4 ${label}`}>KNOWN TO VISIT:</p><ul className={mutedList}><li>Forgotten barracks under Nocturne Spire</li><li>Ashbreak tunnels laced with grav-stims and corpses</li><li>A memory pit encoded with forbidden Apex birth rites</li></ul><p className={`mt-6 ${label}`}>ONE SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="ROT-OMEGA-13" reveal={<span className="text-titan-emerald italic">He broke into the Academy looking for Myth after seeing her face in a dream-thread. He found only the files. The rest was instinct.</span>}/><div className="mt-3"><RedactedBlock lines={5}/></div>
      </DossierSection>
      <DossierNote color="forge-magma">"Do not attempt re-capture. Do not engage. Kill-switches failed. Subject Vexal is a mobile environmental hazard with pre-sentient tactical intelligence."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={49} reveal={<span className="text-cryo-blue">&gt; ADDENDUM [POST-TRIBUNAL]: Subject Vexal made direct contact with Apex Captain Darius Valkyrie during an unauthorised Tribunal breach. Status: ACTIVE - EXTREME THREAT.</span>}/></div>
    </div>
  )
}
