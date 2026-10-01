import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-root-bio tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

const wildlife = {
  'wraithlurks': {
    designation: 'BIO-FAU-02', codename: 'WRAITHS', classification: 'CRYPTOBEAST // WILD CREATURE',
    description: 'Stealth predators that phase between shadows. Slender, sinewy creatures with translucent skin that vibrates like disturbed water.',
    details: ['No eyes. They see via echoes in the environment.', 'Found in Miridan Hollow and the outer Obscura Noctis Belt.', 'Their growls cause minor time distortions in the minds of those nearby.', 'Killing one releases a delayed energy burst, often killing the hunter seconds later if in close quarters.'],
  },
  'glacier-maws': {
    designation: 'BIO-FAU-03', codename: 'GLACIER MAWS', classification: 'CRYPTOBEAST // WILD CREATURE',
    description: 'Titan\'s apex predator of the Frostline Divide. Massive, blind, tunnel-dwelling beasts that resemble a hybrid between an ancient whale and mammoth insect.',
    details: ['Their mouths are ringed with retractable tusks; their bellies glow faint blue.', 'They detect life via sub-crustal vibrations.', 'Their bellow freezes air instantly and shatters surfaces.', 'Believed to be the origin of old Apex ice-wraith myths.'],
  },
  ashdogs: {
    designation: 'BIO-FAU-04', codename: 'ASHDOGS', classification: 'CRYPTOBEAST // WILD CREATURE',
    description: 'Flame-resistant canine packs native to Forgedeep.',
    details: ['Skin is layered basalt-like armor; mouths drip molten slag.', 'Known to chase plasma rail cars and erupt from fissures during tremor spikes.', 'Respond to AAN tech signals, often interfering with field generators.', 'In rare cases, they imprint on Apex children with combustion powers.'],
  },
  'scream-locusts': {
    designation: 'BIO-FAU-05', codename: 'SCREAM LOCUSTS', classification: 'CRYPTOBEAST // WILD CREATURE',
    description: 'Swarming plague species from the Virelyn Expanse. Not insects, but reactive organic drones with mirrored wings and piercing harmonic screeches.',
    details: ['Absorb sound waves and can reproduce via sonic resonance.', 'Entire skyfields go silent when a swarm passes overhead.', 'Used as bio-weapons by rogue Apex during early colony wars.'],
  },
  hollowbacks: {
    designation: 'BIO-FAU-06', codename: 'HOLLOWBACKS', classification: 'CRYPTOBEAST // WILD CREATURE',
    description: 'Twilight-dwelling scavengers of the Obscura Noctis Belt. Ape-like in size but quadrupedal and fused with glassy exoskeletons that reflect incorrectly.',
    details: ['Their backs are hollowed chambers used to trap and echo predator calls.', 'Apex hunters say looking into a Hollowback\'s eye causes you to hear your own death cry.', 'They feed on anomalous biomass and erase all trace of what they consume.'],
  },
  'crested-phasurs': {
    designation: 'BIO-FAU-07', codename: 'CRESTED PHASURS', classification: 'SEMI-DOMESTICATED // HERD ANIMAL',
    description: 'Avian herd animals bred in Helion Prime and Aetherion.',
    details: ['Have crystal plumage and shifting opalescent feathers used for weather sensing.', 'Can hover short distances using gravity sacs beneath their ribs.', 'Used as emotional stabilizers and bio-rhythm anchors in elite Apex settlements.', 'The alpha\'s call can restore calm during chaotic energy spikes.'],
  },
  mossbeasts: {
    designation: 'BIO-FAU-08', codename: 'MOSSBEASTS', classification: 'SEMI-DOMESTICATED // LIVING BIOPLATFORM',
    description: 'Living bioplatforms used in Blackroot Verge. Towering, 16+ meter, slow-moving creatures grown from fused mycelium and bone-flesh.',
    details: ['Their backs become ecosystems: edible plants, sleeping shelters, and water catchers.', 'Used as walking settlements in unstable or shifting terrain.', 'They hum ancient rhythms when distressed, believed to come from original Ark memory cycles.'],
  },
  gravwyrms: {
    designation: 'BIO-FAU-09', codename: 'GRAVWYRMS', classification: 'SEMI-DOMESTICATED // HOVER-SERPENT',
    description: 'Domesticated hover-serpents used in Aetherion. Slender, armor-scaled reptiles that levitate and twist like ribbons in the air.',
    details: ['Respond to resonant whistles and Apex neurotones.', 'Used for high-altitude courier missions and battlefield scouting.', 'Their blood glows silver under pressure, and old legends say it reacts to lies.'],
  },
  burrowguts: {
    designation: 'BIO-FAU-10', codename: 'BURROWGUTS', classification: 'SEMI-DOMESTICATED // TUNNEL-CLEARER',
    description: 'Semi-domesticated tunnel-clearers found in Cryothorne and Skelter Reach. Blunt, heavy quadrupeds that consume soil and metabolize it into clear, stable crystal paths.',
    details: ['Once wild, but now bred for their mineral processing ability.', 'Unpredictable when near unstable Catalyst Wells and can dig straight into seismic zones.'],
  },
  glowbucks: {
    designation: 'BIO-FAU-11', codename: 'GLOWBUCKS', classification: 'DOMESTICATED // LIVESTOCK',
    description: 'Livestock creatures bred from early Earth DNA and Titan\'s resonance flora. They appear like oversized, multi-limbed antelope with soft glowing stripes and antlers that hum when touched.',
    details: ['Their meat is protein-dense and safe for all classes to eat.', 'They feed on harmonic grasses and require timed grazing shifts to prevent mutation.', 'Known to sing before large Titan quakes or Voxx Reversals.'],
  },
  dreamherds: {
    designation: 'BIO-OMEGA-01', codename: 'THE DREAMHERDS', classification: 'ANOMALOUS ENTITY // UNKNOWN',
    description: 'Collective entities glimpsed during fogfall cycles in Nocturne Spire. They appear as overlapping shapes of animals, never quite solid or singular.',
    details: ['Some Apex have chased them into mist and only one ever returned, blind and unable to speak.', 'AAN classifies them as non-violent anomalies, but they are tracked by orbital VEX nodes.', 'Myth is able to interact with them.'],
  },
  'silverlash-eels': {
    designation: 'BIO-AQU-01', codename: 'SILVERLASH EELS', classification: 'AQUATIC LIFE // WILD & MUTATED',
    description: 'Streamlined, serpentine predators that coil through Lake Silence and other deep glacial veins. Their bodies pulse with streaks of moving biolight like data packets in liquid form.',
    details: ['Emit high-frequency clicks that disorient prey by reversing their sense of direction.', 'Highly territorial and believed to nest near one of the buried Catalyst Wells.'],
  },
  'mist-gloamers': {
    designation: 'BIO-AQU-02', codename: 'MIST GLOAMERS', classification: 'AQUATIC LIFE // HIGH-ATMOSPHERE',
    description: 'Jellyfish-like lifeforms that hover through Titan\'s high-atmosphere cloud seas, not actual water. Transparent, semi-solid, and floating using biocharged air sacs.',
    details: ['Sting via electromagnetic threads rather than physical contact.', 'Some are drawn to grief or panic.', 'Aetherion pilots fear cloud drifts where whole flocks drift silently and drain navigational systems.'],
  },
  crystalwolves: {
    designation: 'BIO-AQU-03', codename: 'CRYSTAWOLVES', classification: 'AQUATIC LIFE // WILD & MUTATED',
    description: 'Underwater pack predators with reflective armored fins and multieyed faces. Resemble a cross between a shark and a glass golem.',
    details: ['Hunt in synchronized flashes by blinding prey with bioluminescent bursts before tearing them apart.', 'Found in the frozen rivers beneath Cryothorne.', 'Their hides are used in high-end Apex armor.'],
  },
  tremorbacks: {
    designation: 'BIO-AQU-04', codename: 'TREMORBACKS', classification: 'AQUATIC LIFE // GEOTHERMAL',
    description: 'Massive, bluish grey, shelled bottom-dwellers with six drill-like legs and a magnetic jaw hinge. They feed by collapsing entire ice shelves and filtering the slurry.',
    details: ['Found in the geothermal lakes beneath Skelter Reach.', 'Their low-frequency mating calls cause minor seismic disruptions, often mistaken for quakes.'],
  },
  spindlemaws: {
    designation: 'BIO-AQU-05', codename: 'SPINDLEMAWS', classification: 'AQUATIC LIFE // ACIDIC POOLS',
    description: 'Fast-moving, gas-bubble scaled fish with needle-like teeth and translucent green bodies.',
    details: ['Live in the acidic jungle pools of Blackroot Verge, often feeding on other fish and parasitic growths.', 'Their flesh becomes hallucinogenic if cooked incorrectly.', 'Some Dregs claim Spindlemaws can mimic voices heard during trauma.'],
  },
  'voxx-sirens': {
    designation: 'BIO-AQU-06', codename: 'VOXX SIRENS', classification: 'AQUATIC LIFE // ANOMALOUS MUTATION',
    description: 'Rare, bipedal aquatic mutations capable of sonic projection. Found only in the pressure-folded trenches near Nocturne Spire, where sound moves faster than thought.',
    details: ['Hum strange chords that cause Apex resonance armor to malfunction.', 'Considered myth by most because of the lack of knowledge available about them.'],
  },
  'silent-current': {
    designation: 'BIO-OMEGA-02', codename: 'THE SILENT CURRENT', classification: 'ANOMALOUS AQUATIC ENTITY // UNKNOWN',
    description: 'A massive, undetectable entity or force that moves through Titan\'s underlakes without visible mass.',
    details: ['Leaves trails of de-magnetized matter, neural erosion, and dead memory signatures.', 'Theorized to be a living echo of the Catalyst Engine\'s failure, still swimming through the faultline waters.', 'Myth eventually finds herself drawn to it.'],
  },
  echofoam: {
    designation: 'BIO-OMEGA-03', codename: 'ECHOFOAM PODS', classification: 'ANOMALOUS AQUATIC ENTITY // MEMETIC ORGANISM',
    description: 'Drifting clusters of foam that mimic the voices of the dead. Appear in the aftermath of energy surges, especially in subglacial caves.',
    details: ['Known to follow grieving survivors for days, whispering to them in sleep.', 'VEX labeled them non-threatening memetic organisms, but they are dealt with swiftly as anomalous.'],
  },
}

function WildlifeDossier({ entry }) {
  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={{ designation: entry.designation, classification: entry.classification, codename: entry.codename, headerFields: [] }} color="root-bio" />
      <DossierSection title="PROFILE" color="root-bio">
        <p>{entry.description}</p>
        <ul className={`mt-4 ${mutedList}`}>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      </DossierSection>
      <DossierSection title="ARCHIVE STATUS" color="root-bio"><RedactedBlock lines={3} /></DossierSection>
      <DossierNote color="forge-magma">"Wildlife of Titan"</DossierNote>
    </div>
  )
}

export const WraithsDossier = () => <WildlifeDossier entry={wildlife.wraithlurks} />
export const GlacierMawsDossier = () => <WildlifeDossier entry={wildlife['glacier-maws']} />
export const AshdogsDossier = () => <WildlifeDossier entry={wildlife.ashdogs} />
export const ScreamLocustsDossier = () => <WildlifeDossier entry={wildlife['scream-locusts']} />
export const HollowbacksDossier = () => <WildlifeDossier entry={wildlife.hollowbacks} />
export const CrestedPhasursDossier = () => <WildlifeDossier entry={wildlife['crested-phasurs']} />
export const MossbeastsDossier = () => <WildlifeDossier entry={wildlife.mossbeasts} />
export const GravwyrmsDossier = () => <WildlifeDossier entry={wildlife.gravwyrms} />
export const BurrowgutsDossier = () => <WildlifeDossier entry={wildlife.burrowguts} />
export const GlowbucksDossier = () => <WildlifeDossier entry={wildlife.glowbucks} />
export const DreamherdsDossier = () => <WildlifeDossier entry={wildlife.dreamherds} />
export const SilverlashEelsDossier = () => <WildlifeDossier entry={wildlife['silverlash-eels']} />
export const MistGloamersDossier = () => <WildlifeDossier entry={wildlife['mist-gloamers']} />
export const CrystalwolvesDossier = () => <WildlifeDossier entry={wildlife.crystalwolves} />
export const TremorbacksDossier = () => <WildlifeDossier entry={wildlife.tremorbacks} />
export const SpindlemawsDossier = () => <WildlifeDossier entry={wildlife.spindlemaws} />
export const VoxxSirensDossier = () => <WildlifeDossier entry={wildlife['voxx-sirens']} />
export const SilentCurrentDossier = () => <WildlifeDossier entry={wildlife['silent-current']} />
export const EchofoamDossier = () => <WildlifeDossier entry={wildlife.echofoam} />
