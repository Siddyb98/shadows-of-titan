import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-gold tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function ThornmotherDossier() {
  const headerData = {
    designation: 'PER-VER-12',
    classification: 'AAN PROFILE: RESTRICTED // VERDANT LEVEL',
    codename: 'THORNMOTHER',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Rhea Amaya Vaelith' },
      { label: 'KNOWN ALIASES', value: 'The Pale Root, Bloomwarden, Mother Green' },
      { label: 'MUTATION TIER', value: 'Echelon Apex (Classified Verge-Origin Variant)' },
      { label: 'ENERGY TYPE', value: 'Bio-Resonance - transfers cellular vitality through harmonic touch' },
      { label: 'CLASS DESIGNATION', value: 'Dominion Academy - Lead Medic & Mutation Trauma Specialist' },
      { label: 'BIRTH REGION', value: 'Blackroot Verge - Verdant Hollow Quarter' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-gold" />
      <DossierSection title="PHYSICAL PROFILE" color="titan-gold">
        <ul className="list-none space-y-1">
          <li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 5&apos;9&quot;</li>
          <li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> Approximately 159 lbs</li>
          <li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Lithe, long-limbed, with soft curves</li>
          <li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Dark emerald-green, worn in long rope braids adorned with woven vines, copper rings, and dried blossoms</li>
          <li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Bronze-flecked hazel, wide and serene</li>
          <li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Warm brown with a soft, moss-like sheen in bright sunlight. Her pulse leaves behind a faint floral scent.</li>
        </ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p>
        <ul className={mutedList}>
          <li>Her veins shimmer pale gold when healing and go black when overused.</li>
          <li>Keeps a faint luminescent tattoo of Titan&apos;s five Catalyst Wells down her spine.</li>
          <li>Wears a curved bone-wood pendant shaped like a seed with something inside.</li>
        </ul>
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p>
        <p>Her presence soothes instinct. Even aggressive Apex feel calmer. Near her, pain subsides and breathing steadies, but if she is overdrawn, the air turns sharp and floral-sour like rotting jasmine.</p>
        <p className={`mt-4 ${label}`}>WARDROBE STYLE:</p>
        <ul className={mutedList}>
          <li>Forest-cloth gowns, asymmetrical tunics, bare feet or curved-root shoes.</li>
          <li>Bio-threads grow with her energy; vines bloom from her cuffs when she channels.</li>
          <li>Wears no insignia, but carries authority that even Voxx will not normally interrupt.</li>
        </ul>
      </DossierSection>

      <DossierSection title="MUTATION / ENERGY DETAILS" color="titan-gold">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-gold">Bio-Resonance</span> - Rhea heals by syncing her frequency with damaged lifeforms and transferring her energy, cell for cell. It is slow, agonizing, and devastatingly effective.</p>
        <p className="mt-4">She can close wounds, reverse mutation corrosion, and reboot failing neural threads. Healing exacts an equal toll: she takes the damage, symptom, or trauma into herself.</p>
        <p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p>
        <ul className={mutedList}>
          <li>Plantlife grows near her as she heals - instinctive and often uncontrolled.</li>
          <li>Her energy enters the bloodstream of others temporarily, leaving resonant shadows in people she saves.</li>
          <li>She has a whispered ability to store one person&apos;s pain and unleash it later - unverified but rumored in the Vault.</li>
        </ul>
        <p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Mastered. She has trained her body to endure years of compounded damage, but every time she heals, something inside her dies.</p>
        <p><span className={label}>KNOWN TRIGGERS:</span> Extreme empathy responses; screams of children or collapsed Apex; any mention of the Blackroot Verge war.</p>
        <p><span className={label}>COMBAT STYLE:</span> Rare. If forced, her vines wrap like restraints and her energy burns cold and reverse-polar - healing allies and rotting enemies from within.</p>
        <p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p>
        <ul className={mutedList}>
          <li>Nyx - Rhea once stabilized Nyx&apos;s unraveling energy for 14 seconds during a trial. It cost her a full lung.</li>
          <li>Kael Drayk - his body accepts her resonance without damage. She calls him safe soil.</li>
        </ul>
      </DossierSection>

      <DossierSection title="PSYCH PROFILE" color="titan-gold">
        <p><span className={label}>CORE PERSONALITY TRAITS:</span> Compassionate, controlled, wise, quietly terrifying.</p>
        <p><span className={label}>STRENGTHS:</span> Emotional regulation master. Tactical empath. Unbreakable bedside manner.</p>
        <p><span className={label}>WEAKNESSES:</span> Self-sacrificing to the point of danger. Over-identifies with pain. Keeps secrets so well they root in her body.</p>
        <p><span className={label}>CORE BELIEF:</span> “We were meant to grow past this. But first, we have to stop the bleeding.”</p>
        <p><span className={label}>PUBLIC BEHAVIOR:</span> Kind. Listens fully. Touches people gently when they cry. Feels like the only adult in a world of screaming, burning children.</p>
        <p><span className={label}>PRIVATE REALITY:</span> Has a room full of dead plants she does not throw away. Talks to something buried in her garden every night. Writes letters to people she has healed and never sends them.</p>
      </DossierSection>

      <DossierSection title="FAMILY & ORIGIN" color="titan-gold">
        <p><span className={label}>FATHER:</span> Vaelith Seedclan, a powerful biotech engineer with lineage native to the walking cities.</p>
        <p><span className={label}>MOTHER:</span> Lasiara Vaelith, founder of the Bleeding Grove.</p>
        <p className={`mt-4 ${label}`}>FAMILY DYNAMICS:</p>
        <ul className={mutedList}>
          <li>Rhea was born during the Walking Bloom Migration, delivered inside a mycelial nursery dome.</li>
          <li>She grew up with sentient plants, bio-coded languages, and a cultural mandate: “If you take life, give life back.”</li>
        </ul>
        <p className={`mt-4 ${label}`}>NOTABLE HERITAGE SECRETS:</p>
        <ul className={mutedList}>
          <li>Her body contains trace Bleeding Tree mutagenics, absorbed through ritual at age 7.</li>
          <li>Officially denied by the AAN once. Privately monitored weekly for anomalous root growth after acceptance.</li>
        </ul>
      </DossierSection>

      <DossierSection title="HISTORY / PURPOSE" color="titan-gold">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Called to the Dominion Academy as a child prodigy after healing an entire cadet squad during a flux surge before age 10.</p>
        <p className="mt-3">She refused Apex classification and demanded to train as a Resonance Practitioner instead.</p>
        <p className={`mt-4 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p>
        <ul className={mutedList}>
          <li>At age 5, brought a dead sparrow back to life - only for it to burst into petals.</li>
          <li>First known to store trauma at age 11 - <span className="text-forge-magma">REDACTED REDACTED REDACTED REDACTED</span>. Collapsed hours later, screaming her name.</li>
        </ul>
        <p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p>
        <ul className={mutedList}>
          <li>Leads the Echo Mend Corps, a team of resonance-based medics deployed to volatile zones.</li>
          <li>Developed pulse-plants - symbiotic root systems that detect trauma in the body before it surfaces.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p>
        <ul className={mutedList}>
          <li>In the Blackroot Purge, she absorbed an entire Dreg plague strain; no vaccine was needed.</li>
          <li>One cadet is listed as permanently missing after Rhea&apos;s failed healing attempt. Some say he fused with her vines.</li>
          <li>Her heartbeat no longer syncs with normal Titan time. AAN technicians cannot explain it.</li>
        </ul>
        <p className={`mt-4 ${label}`}>WHY SHE MATTERS TO TITAN&apos;S FUTURE:</p>
        <ul className={mutedList}>
          <li>Rhea is the last non-synthetic biological field healer trusted by every class.</li>
          <li>She holds the knowledge of Verdant healing and mutation handling - a bridge no one else can walk.</li>
        </ul>
      </DossierSection>

      <DossierNote color="forge-magma">“Subject R. Vaelith displays biomechanic evolution not attributed to known Apex lineage. Her resonance patterns interface with Catalyst Code. Monitor her proximity to Nyx and Blackroot anomalies at all times.”</DossierNote>

      <DossierSection title="SECRETS & PREFERENCES" color="titan-gold">
        <p><span className={label}>ROMANTIC HISTORY:</span> Quiet connections. One former Apex officer left the Academy after she refused his proposal. Rumored to be drawn to those who carry death in their bones; her friends call it her broken bird curse.</p>
        <p className="mt-4">Nyx once <span className="text-forge-magma">REDACTED REDACTED REDACTED REDACTED REDACTED</span>.</p>
        <p><span className={label}>FEAR PROFILE:</span> That one day she will try to heal and only rot will come out. That her body is not hers anymore - that the forest has claimed her.</p>
        <p><span className={label}>FOOD / STYLE PREFERENCES:</span> Eats only plantlife she grows herself. Refuses synth-meals or processed food. Drinks pulse nectar to keep her energy stable. Keeps her room lit by bioluminescent moss that moves when you speak.</p>
        <p><span className={label}>COMBAT PREFERENCE:</span> Rootbind and nerve severance through bio-surge. Can induce controlled death, halting someone&apos;s mutation temporarily by putting them in stillbloom.</p>
        <p className={`mt-4 ${label}`}>FAVORITE CIVILIAN HAUNTS:</p>
        <ul className={mutedList}>
          <li>The Verdant Pools - a subterranean chamber under the Academy with floating flora and soft resonance music.</li>
          <li>The Seedline Archive - a genetic memory garden.</li>
          <li>Blackroot&apos;s forgotten bloomfield, where only she can step without it reacting violently.</li>
        </ul>
        <p className={`mt-4 ${label}`}>KNOWN TO VISIT (OFF-RECORD):</p>
        <ul className={mutedList}>
          <li>The Bleeding Tree once per cycle. No record of what she does.</li>
          <li>Nyx&apos;s file in the Archive Room - she reads it slowly, over and over.</li>
          <li>Wears a ring made of obsidian-root, tuned to nullify only her own pulse.</li>
        </ul>
        <p className={`mt-5 ${label}`}>ONE SECRET NO ONE KNOWS:</p>
        <FragmentLock fragmentKey="SEEDLINE-01" reveal="Rhea's energy is reproducing. REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED." />
        <RedactedBlock lines={7} />
      </DossierSection>
    </div>
  )
}
