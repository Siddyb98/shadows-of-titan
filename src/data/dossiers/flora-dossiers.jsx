import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-root-bio tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

const flora = {
  glowleaf: {
    designation: 'BIO-FLR-01',
    codename: 'GLOWLEAF',
    classification: 'DOMESTICATED FLORA // STAPLE CROP',
    description: 'A wide-leafed, pale violet plant with thick translucent veins that emit a soft bioluminescent glow. Each leaf is broad enough to cover a small table and folds in on itself when touched.',
    details: [
      'Grows best in low-light conditions like Helion Prime\'s misty tree subroots.',
      'The leaves are nutrient-rich, slightly bitter when raw, and become sweet and fibrous when heated.',
    ],
    purpose: ['Staple food crop and emergency light source.', 'Used in Echelon med-stations and for ceremonial wraps during Apex Initiation Rites.'],
  },
  'mycel-bloom': {
    designation: 'BIO-FLR-02',
    codename: 'MYCEL-BLOOM ROOT',
    classification: 'DOMESTICATED FLORA // MEMORY-RESPONSIVE FUNGAL ROOT',
    description: 'A pale yellow fungal root that expands and contracts depending on soil memory, the emotional imprint of the land it\'s grown in. Has a gnarled surface that pulses faintly if exposed to sadness or grief.',
    details: [
      'When sliced, it releases a cooling vapor used to calm trauma victims or suppress intense powers.',
      'Cultivated in Blackroot Verge where Dreg herbalists train it to grow in empathy-patterned gardens.',
      'Flavor profile: Umami-rich, used in broths and memory tea.',
    ],
  },
  dendrantic: {
    designation: 'BIO-FLR-03',
    codename: 'DERDANTRICE VINES',
    classification: 'DOMESTICATED FLORA // STRUCTURAL BIO-MATERIAL',
    description: 'Emerald-green vines that grow several meters per day when exposed to heat or stress. Their movement resembles muscle contraction more than plant growth.',
    details: [
      'Used structurally across Helion Prime, especially in healing towers and research pods.',
      'Vines curl around anchors when sung to in a certain frequency, a technique known as vine-weaving.',
      'The inner sap, if consumed raw, can induce lucid dreams of the first terraforming days.',
    ],
  },
  synthwheat: {
    designation: 'BIO-FLR-04',
    codename: 'SYNTHWHEAT PODS',
    classification: 'DOMESTICATED FLORA // ENGINEERED FOOD CROP',
    description: 'Thick, grayish-gold stalks with metallic sheen husks. The interior is filled with gelatinous protein orbs that replace traditional grains.',
    details: [
      'Originally developed by Dr. Ekros as a food alternative for Nulls but later adapted by Dregs across Skelter Reach.',
      'Resistant to radiation, drought, and acid rain.',
      'The pods crackle softly when disturbed, believed to be a leftover signal from their engineered origin.',
    ],
  },
  'solar-blossoms': {
    designation: 'BIO-FLR-05',
    codename: 'SOLAR BLOSSOMS',
    classification: 'DOMESTICATED FLORA // HARMONIC CULTIVAR',
    description: 'Bright golden-orange blooms that tilt toward solar patterns and release harmonic pulses when brushed.',
    details: [
      'Grown across Aetherion balconies and used in performance rituals for Apex ascension ceremonies.',
      'Each petal vibrates at a slightly different frequency, creating a choral hum when several are planted together.',
      'Believed to reduce aggression when planted near training fields.',
    ],
  },
  'thornshade-ivy': {
    designation: 'BIO-FLR-10',
    codename: 'THORNSHADE IVY',
    classification: 'WILD & ANOMALOUS FLORA // NEUROTOXIC',
    description: 'A fast-climbing vine with deep black leaves and blood-red thorns that exude a neurotoxic vapor.',
    details: [
      'Found at the edges of Blackroot Verge and areas once hit by terra-code ruptures.',
      'When severed, it screams a high-pitched tone that causes vertigo and memory disorientation.',
      'No successful attempts to domesticate it. Some Dregs believe it\'s a guardian grown from Titan\'s grief.',
    ],
  },
  'cryoglass-lily': {
    designation: 'BIO-FLR-11',
    codename: 'CRYOGLASS LILY',
    classification: 'WILD & ANOMALOUS FLORA // CRYOTHORNE',
    description: 'An ethereal, shimmering flower that resembles a blown-glass sculpture. Its petals reflect light into concentrated beams hot enough to burn skin.',
    details: [
      'Found exclusively in Cryothorne, usually blooming over frozen graves or ice-locked anomalies.',
      'Apex engineers have attempted to extract its refractive core for weapon use.',
      'Locals claim that if you look into its center, you see a moment you\'ve forgotten.',
    ],
  },
  'shiver-ferns': {
    designation: 'BIO-FLR-12',
    codename: 'SHIVER FERNS',
    classification: 'WILD & ANOMALOUS FLORA // VIBRATION-REACTIVE',
    description: 'Tightly wound ferns that respond violently to vibration or loud sound. They explode outward in a radial pattern, launching sharp spore-pellets and kinetic shockwaves.',
    details: [
      'Used as perimeter defense in some Stratos Gate towers.',
      'Their seeds can only be collected while whispering.',
    ],
  },
  ashvine: {
    designation: 'BIO-FLR-13',
    codename: 'ASHVINE SPORECLAW',
    classification: 'WILD & ANOMALOUS FLORA // VOLCANIC ASH ZONE',
    description: 'A lava-colored root network that crawls along volcanic ash like a spider made of thorns. It senses motion through ash displacement and detonates spore-pockets on contact.',
    details: [
      'Found throughout Forgedeep\'s unpatrolled zones.',
      'Used in AAN training to test field navigation under stress.',
    ],
  },
  lurefruit: {
    designation: 'BIO-FLR-14',
    codename: 'LUREFRUIT TREES',
    classification: 'WILD & ANOMALOUS FLORA // MIRIDAN HOLLOW',
    description: 'Twisted, silver-barked trees that exude a sweet scent when prey is near. Their fruit resembles ripe peaches but is laced with digestive enzymes that dissolve skin.',
    details: [
      'The trees lean toward targets and entire groves can migrate a few inches a day.',
      'Found deep within Miridan Hollow, often near the Bleeding Tree Grove.',
    ],
  },
}

function FloraDossier({ entry }) {
  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader
        data={{
          designation: entry.designation,
          classification: entry.classification,
          codename: entry.codename,
          headerFields: entry.location ? [{ label: 'LOCATION', value: entry.location }] : [],
        }}
        color="root-bio"
      />
      <DossierSection title="DESCRIPTION" color="root-bio">
        <p>{entry.description}</p>
        <ul className={`mt-4 ${mutedList}`}>
          {entry.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </DossierSection>
      {entry.purpose && <DossierSection title="PURPOSE" color="root-bio"><ul className={mutedList}>{entry.purpose.map((item) => <li key={item}>{item}</li>)}</ul></DossierSection>}
      <DossierSection title="ARCHIVE STATUS" color="root-bio"><RedactedBlock lines={3} /></DossierSection>
      <DossierNote color="forge-magma">"Agriculture & Flora of Titan"</DossierNote>
    </div>
  )
}

export const GlowleafDossier = () => <FloraDossier entry={flora.glowleaf} />
export const MycelBloomDossier = () => <FloraDossier entry={flora['mycel-bloom']} />
export const DendranticDossier = () => <FloraDossier entry={flora.dendrantic} />
export const SynthwheatDossier = () => <FloraDossier entry={flora.synthwheat} />
export const SolarBlossomsDossier = () => <FloraDossier entry={flora['solar-blossoms']} />
export const ThornshadeIvyDossier = () => <FloraDossier entry={flora['thornshade-ivy']} />
export const CryoglassLilyDossier = () => <FloraDossier entry={flora['cryoglass-lily']} />
export const ShiverFernsDossier = () => <FloraDossier entry={flora['shiver-ferns']} />
export const AshvineDossier = () => <FloraDossier entry={flora.ashvine} />
export const LurefruitDossier = () => <FloraDossier entry={flora.lurefruit} />
