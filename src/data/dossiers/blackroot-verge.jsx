import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function BlackrootVergeDossier() {
  const headerData = {
    designation: 'CIT-005',
    classification: 'GEOSPHERE // DEEP CITY // MIRIDAN HOLLOW',
    codename: 'BLACKROOT VERGE',
    headerFields: [
      { label: 'REGION', value: 'Miridan Hollow' },
      { label: 'SHAPE', value: 'Irregular oval with creeping borders - the jungle expands like a living tide' },
      { label: 'SIZE', value: 'Approximately 400 km of tangled biomass' },
      { label: 'TERRAIN', value: 'Dense, bioluminescent jungle with mutated flora and terrain that shifts in response to strong emotion' },
      { label: 'HAZARDS', value: 'Neuro-spores, terra-mimicry, and anomaly storms' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="GEOGRAPHIC CONTEXT" color="titan-emerald">
        <p>A living city grown, where every root remembers and the jungle never forgets.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li><span className={label}>REGION:</span> Miridan Hollow.</li>
          <li><span className={label}>SHAPE:</span> Irregular oval with creeping borders - the jungle expands like a living tide.</li>
          <li><span className={label}>SIZE:</span> Approximately 400 km of tangled biomass.</li>
          <li><span className={label}>TERRAIN:</span> Dense, bioluminescent jungle with mutated flora and terrain that shifts in response to strong emotion.</li>
          <li><span className={label}>HAZARDS:</span> Neuro-spores, terra-mimicry, and anomaly storms.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CITY STRUCTURE & ZONES" color="titan-emerald">
        <p>Blackroot Verge breathes and grows like a living ecosystem. Structures are woven, grafted, or grown, and zones can move or mutate. The city is semi-sentient, alive in both terrifying and awe-inspiring ways.</p>
        <p className={`mt-4 ${label}`}>THE OUTER PULSE // PERIMETER RING // ACCESS & WILD GROWTH</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Fungal Bastion: Defensive wall made from stacked, sentient mushroom-trees; emits hallucination-causing fumes when threatened.</li>
          <li>Garden Veins: Makeshift outposts, shrines, and rogue biotech gardens where Dreg cults experiment with regenerative serums.</li>
          <li>The Bloomline: Pathways of vine-roots used for trade and mobility; they rise or withdraw depending on a person&apos;s intent.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>No hard roads; travel relies on living bridges, spore gliders, or beast-spine carts.</li>
          <li>Drones from AAN surveillance are constantly repelled or converted by the forest.</li>
          <li>Communication is done via pollen-laced whispers that carry through trees.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Every child is grown with a symbiotic seed; their bond with the city begins at birth.</li>
          <li>Outsiders must pass the Verdancy Trial, judged by the jungle&apos;s root-mind.</li>
          <li>Artistic expression is woven into living moss murals or sung into root memory.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE MYCEL CORE // MAIN URBAN CLUSTER // LIVING TECH & SOCIAL HUBS</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Spineheart Market: Biotech trade hub, where organs, spliced enhancements, and memory-sap are bartered.</li>
          <li>The Bone Canopy: City center made of fused bone-wood and neuron-root, where leaders commune with the jungle.</li>
          <li>Rootrill Hollows: Housing pods formed from curled branches and pulsing sap membranes; grow based on emotional resonance.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Data runs through bio-fiber roots instead of metal wires.</li>
          <li>Power comes from living reactors of giant fungal cores that pulse like beating hearts.</li>
          <li>Emergency systems rely on adaptive biomass buildings that heal, reshape, or close off when threatened.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Dregs and Nulls have caste-free governance led by the Council of the Fractured Leaf.</li>
          <li>Truth is stored in Sap Oracles - trees grown from memory-infused blood.</li>
          <li>Conflict is resolved in the Vein Arena, where combatants duel within shifting thorn-rings.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE HOLLOW BELOW // BURIED ROOT LAYER // FORBIDDEN GROWTH & ANOMALY ZONES</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>The Bleeding Tree Grove: Hidden anomaly that spawns mirror-clones of those who approach, often hostile.</li>
          <li>Rotmind Gulch: Ravine where failed biotech, Apex castoffs, and early Null experiments are dumped, many still alive.</li>
          <li>Catalyst Sprawl: An overgrown root-system connected to one of the original terraforming fibers, pulsing with corrupted signals.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Little light; glowing moss and nervous-system vines offer visibility.</li>
          <li>Certain roots feed off thoughts rather than nutrients; thinking too hard near them makes them grow.</li>
          <li>No map stays accurate longer than a day; terrain constantly warps based on collective emotion.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>No permanent dwellers; only Anomaly Shepherds and Exile Shamans enter here.</li>
          <li>Offerings of teeth or memory bark are made before crossing into the Grove.</li>
        </ul>
      </DossierSection>
      <DossierSection title="DISTRICTS AT A GLANCE" color="titan-emerald">
        <div className="space-y-4 text-aan-white/70">
          <div><p className={label}>FUNGAL BASTION // OUTER PULSE // PERIMETER DEFENSE</p><p>Emits psychotropic defenses on contact.</p></div>
          <div><p className={label}>GARDEN VEINS // OUTER PULSE // CULT BIO-GARDENS</p><p>Rogue healing serums and spliced flora.</p></div>
          <div><p className={label}>THE BLOOMLINE // OUTER PULSE // TRAVEL ARTERIES</p><p>Intelligent vine-paths that judge intent.</p></div>
          <div><p className={label}>SPINEHEART MARKET // MYCEL CORE // TRADE & EXCHANGE</p><p>Biotech, live enhancements, blackroot tools.</p></div>
          <div><p className={label}>BONE CANOPY // MYCEL CORE // LEADERSHIP + RITUAL</p><p>Council chamber grown from Apex bones.</p></div>
          <div><p className={label}>ROOTRILL HOLLOWS // MYCEL CORE // CIVILIAN HOUSING</p><p>Emotion-shaped living pods.</p></div>
          <div><p className={label}>BLEEDING TREE GROVE // HOLLOW BELOW // MIRROR ANOMALY ZONE</p><p>Creates reflective hostile doubles.</p></div>
          <div><p className={label}>ROTMIND GULCH // HOLLOW BELOW // DUMPING + SURVIVAL ZONE</p><p>Apex experiments and rogue mutations.</p></div>
          <div><p className={label}>CATALYST SPRAWL // HOLLOW BELOW // FORBIDDEN TERRAFORM NODE</p><p>Original fiberline still emits wild signals.</p></div>
        </div>
      </DossierSection>
      <DossierSection title="INFRASTRUCTURE & POWER SYSTEMS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Sap Pulse Grids: Deliver nutrients, information, and thermal energy to structures.</li>
          <li>Neurobark Interfaces: Tactile terminals that feel emotion to access knowledge.</li>
          <li>Biolum Spires: Towering plants that glow brighter with the city&apos;s collective mood, used to tell time and announce danger.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CULTURE & CODE" color="titan-emerald">
        <p className={label}>PHILOSOPHY:</p>
        <ul className={mutedList}>
          <li>Survival is symbiosis.</li>
          <li>Individuality is sacred, but the jungle decides who stays.</li>
        </ul>
        <p className={`mt-4 ${label}`}>RITUALS:</p>
        <ul className={mutedList}>
          <li>Thornbloom Rite: Adolescents are stung by the Rootmind and must survive three days in the jungle alone.</li>
          <li>Myceth Communion: Spirit-melding event where residents share memories through communal fungi ingestion.</li>
          <li>Graft Trials: Volunteers fuse new limbs or neural connections that are permanent and sometimes deadly.</li>
        </ul>
        <p className={`mt-4 ${label}`}>SOCIAL ROLES:</p>
        <ul className={mutedList}>
          <li>Rootcallers: Healers and emotional harmonizers.</li>
          <li>Gloomsmiths: Create tools from living plants and bones.</li>
          <li>Anomaly Shepherds: Brave navigators of the Hollow Below who gather samples or rescue lost minds.</li>
        </ul>
      </DossierSection>
      <DossierSection title="BLACKROOT SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>The Bleeding Tree may be a biological offshoot of the Catalyst Engine, corrupted by emotional overflow.</li>
          <li>Deep beneath the Sprawl lies a dormant seed-chamber labeled Project Bloomhost, once part of an Apex plan to control all biological life on Titan.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierNote color="forge-magma">"A living city grown, where every root remembers and the jungle never forgets."</DossierNote>
    </div>
  )
}
