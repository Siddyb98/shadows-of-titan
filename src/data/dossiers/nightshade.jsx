import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-gold tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function NightshadeDossier() {
  const headerData = {
    designation: 'PER-137',
    classification: 'AAN PROFILE: NOCTURNE-CLEARANCE INFILTRATOR // SHADOW CODE ACTIVE',
    codename: 'NIGHTSHADE',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Bryn Elisar Alaric' },
      { label: 'KNOWN ALIASES', value: 'Whisper, Noct\'s Son, The Halflight' },
      { label: 'MUTATION TIER', value: 'Echelon - Black-Trace Authorization' },
      { label: 'ENERGY TYPE', value: 'Shadowforge - constructs physical forms from ambient or artificial darkness' },
      { label: 'CLASS DESIGNATION', value: 'Dominion Academy - Covert Operations Wing (Infiltration, Recovery, Erasure)' },
      { label: 'BIRTH REGION', value: 'Registered as Nocturne Perimeter Zone - Sector N0-V7 (abandoned)' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-gold" />
      <DossierSection title="PHYSICAL PROFILE" color="titan-gold">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6&apos;7&quot;</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> Approximately 165 lbs</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Lean, ghostlike, wiry but strong</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Black with silver streaks, tousled and neck-length, often obscuring one eye</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Soft violet-gray that dulls in light but glows dimly in dark spaces</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Pale with faint shadow-veins visible under certain lights; reacts negatively to direct sunlight over time</li></ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>Tattooed spiral pattern down his spine - the Nocturne Mark, required for entry into the Obsidian Annex.</li><li>Full-finger gloves and a high-collar cloak with woven shadowline channels.</li><li>Shadow-forged fragments occasionally flicker from his palms, even when calm.</li></ul>
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><ul className={mutedList}><li>Shadows stretch toward him whenever he enters a room; daylight stealth tasks are difficult.</li><li>When agitated, nearby shadows stretch unnaturally, even across lit floors.</li></ul>
        <p className={`mt-4 ${label}`}>WARDROBE STYLE:</p><ul className={mutedList}><li>Operative-style high-collared coats, stealth-tact gloves, and flexible armor that folds into shadow holsters.</li><li>Never seen without his cloak, rumored to be partially sentient and forged in Nocturne&apos;s depths.</li><li>Clothing reflects very little light; cameras struggle to capture it, creating an awkward floating-head effect in videos and pictures.</li></ul>
      </DossierSection>

      <DossierSection title="MUTATION / ENERGY DETAILS" color="titan-gold">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-gold">Shadowforge</span> - Manipulates shadows to craft solid, functional structures ranging from weapons to decoys, shields, or partial avatars.</p><ul className={`mt-4 ${mutedList}`}><li>Constructs last approximately 10-60 seconds depending on complexity and darkness level.</li><li>In void conditions, he can generate black glass weapons that are nearly indestructible.</li><li>Overuse under direct sunlight causes rapid cellular fatigue; he can pass out mid-combat if exposed too long.</li></ul>
        <p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Shadow Bleed: Can partially phase through thin objects in low light.</li><li>Echo Construct: Can leave a hollow clone behind to mislead observers.</li><li>Dark Field: Creates a light-absorption dome that dulls all noise and vision inside.</li></ul>
        <p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Advanced and surgically precise. Trained in the Annex Fold technique, allowing mental-construct binding.</p><p>Fails only when his pulse rate exceeds 160 bpm; his body starts rejecting light-based stimuli violently.</p><p><span className={label}>KNOWN TRIGGERS:</span> Bright light, sudden betrayals, memories from Nocturne that do not match his recollection, and seeing blood on a reflective surface.</p><p><span className={label}>COMBAT STYLE:</span> Phantom-tactician. Never direct, always destabilizing. Uses shadow terrain to manipulate enemy movement; his constructs do the work while he watches from the dark.</p>
        <p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><ul className={mutedList}><li>Nyx - her power distorts light and time; their abilities complement like fractal twins.</li><li>Rhea Vaelith - occasionally partners with her for covert rescue operations. He saves, she restores.</li><li>Cassian Dreylin - once worked together under Project Echo; now they avoid each other with lethal intent.</li></ul>
      </DossierSection>

      <DossierSection title="PSYCH PROFILE" color="titan-gold">
        <p><span className={label}>CORE PERSONALITY TRAITS:</span> Quiet, cunning, patient, hyper-observant.</p><p><span className={label}>STRENGTHS:</span> Expert infiltrator, silent interrogator, high emotional intelligence masked beneath stoicism, and strategic enough to play long games even with himself.</p><p><span className={label}>WEAKNESSES:</span> Identity fragility, disassociation episodes under artificial light, and uncertainty about his own memories.</p><p><span className={label}>CORE BELIEF:</span> “Light reveals. But shadow understands.”</p><p><span className={label}>PUBLIC BEHAVIOR:</span> Withdrawn, respectful, rarely speaks without need. Disappears between drills; instructors do not ask where he goes. Records AAN lessons by hand in a cipher no one else understands.</p><p><span className={label}>PRIVATE REALITY:</span> Sleeps underground even within dorms. Sometimes sits motionless for hours, waiting to see if his own shadow moves without him. Hears faint whispers near mirrors or screens but never records them.</p>
      </DossierSection>

      <DossierSection title="FAMILY & ORIGIN" color="titan-gold">
        <p><span className={label}>FAMILY MEMBERS:</span> Unknown - all data flagged AAN-Classified: REDACTED.</p><ul className={`mt-3 ${mutedList}`}><li>Multiple entries suggest possible artificial memory curation.</li><li>No family dynamics confirmed. All emotional development monitored via Resonance Evaluation Nodes.</li><li>May not be his first personality iteration.</li></ul><p className={`mt-4 ${label}`}>NOTABLE HERITAGE SECRETS:</p><ul className={mutedList}><li>One of three known survivors of the Nocturne Memory Bloom, a city-wide phase-shift incident.</li><li>Files suggest his DNA carries remnants of a Catalyst Thread Imprint, possibly experimental.</li></ul>
      </DossierSection>

      <DossierSection title="HISTORY / PURPOSE" color="titan-gold">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Discovered walking alone from a sealed Nocturne corridor. Cameras never showed him enter. Declared inhumanly calm under psychometric duress and fast-tracked into Covert Ops despite no prior education.</p><p className={`mt-4 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><ul className={mutedList}><li>Created a cage of shadowglass to trap a Tier-4 energy leech during training.</li><li>Survived four days in simulated void without speaking or signaling for exit.</li><li>Vanished in mid-lesson and appeared two days later with classified documents he claimed to have found.</li></ul><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>Recovered an Apex asset lost in Blackroot Verge without alerting local forces.</li><li>Assisted in shutting down a rogue Dreg signal tower, collapsing the antenna without a civilian casualty.</li><li>Discovered a false Apex ID ring operating under AAN supervision and erased it quietly.</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Briefly disappeared for 11 hours. During that time, Vault Zero&apos;s temperature dropped 12 degrees; no explanation was offered.</li><li>May have infiltrated the Obsidian Annex without permission. Archive footage loops in that section.</li></ul><p className={`mt-4 ${label}`}>WHY HE MATTERS TO TITAN&apos;S FUTURE:</p><p>He holds secrets even he does not understand, and Nocturne never lets its children go without purpose.</p>
      </DossierSection>

      <DossierNote color="forge-magma">“Subject B. Alaric operates within tolerable variance. Do not test his loyalty under lunar shift. Direct exposure to Nyx discouraged - results in light-warping.”</DossierNote>

      <DossierSection title="SECRETS & PREFERENCES" color="titan-gold">
        <p><span className={label}>ROMANTIC HISTORY:</span> Unknown. Shadow constructs have appeared in vaguely humanoid forms, some feminine. Believed to have a fixation on Eira Solaris. Nyx once smiled at him in a hallway; he stood there in the dark long after she vanished.</p><p><span className={label}>FEAR PROFILE:</span> That he is already dead and does not know it. That his shadow is not his.</p><p><span className={label}>FOOD / STYLE PREFERENCES:</span> Eats in silence and consumes only dark-colored foods: black root paste, voidberries, and ash-nuts. Refuses mirrors, covers reflective surfaces, and maintains a journal in a language no one has decoded.</p><p><span className={label}>COMBAT PREFERENCE:</span> Covert neutralization. Fear over flash. Destroys communications, disables light, traps survivors, and leaves a small folded shadow-origami at every mission site.</p><p className={`mt-4 ${label}`}>FAVORITE CIVILIAN HAUNTS:</p><ul className={mutedList}><li>Underbridge markets at dusk.</li><li>The edges of teleportation fields, where he watches light fragments.</li><li>A door beneath the Academy no one else can find.</li></ul><p className={`mt-5 ${label}`}>ONE SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="NOCT-LOOP-11" reveal={<span>Bryn&apos;s shadow once moved independently during a solar glitch.</span>} /><RedactedBlock lines={5} />
      </DossierSection>
    </div>
  )
}
