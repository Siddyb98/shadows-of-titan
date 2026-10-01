import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function ForgedeepDossier() {
  const headerData = {
    designation: 'CIT-002',
    classification: 'GEOSPHERE // DEEP CITY // INDUSTRIAL CRUCIBLE',
    codename: 'FORGEDEEP',
    headerFields: [
      { label: 'FUNCTION', value: 'Earth mining, weapons production, and survival under pressure' },
      { label: 'STRUCTURE', value: 'Layered like sediment, burrowing into magma channels and power cores' },
      { label: 'PRIMARY POPULATION', value: 'Forgers, Luminals, Enforcers, and Dregs' },
      { label: 'LOCAL PHRASE', value: 'Only the strong don\'t melt.' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="CITY STRUCTURE & LEVELS" color="titan-emerald">
        <p>The crucible of Titan: where the earth is mined, the weapons are born, and the oppressed fight to survive.</p>
        <p className={`mt-4 ${label}`}>THE EMBER CROWN // UPPER LAYER // SURFACE ZONE</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Redgate Bastion: Administrative sector; Tech Enforcement HQ, mining oversight halls.</li>
          <li>The Smeltspan: Upper foundries; entry-level forging, Luminal smiths and early-stage weapons manufacturing.</li>
          <li>Dustmarkets: Trade and black-market stalls; vendors sell alloy scraps, mod parts, and knockoff Apex tech.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Covered in heat-dispersing canopy nets woven from carbon vines.</li>
          <li>Storm-gates protect from volcanic ash surges.</li>
          <li>Surface rail lines connect to Skelter tunnels and mining crawlers.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Forgers and Luminals work publicly, often tattooed with rank and alloy type.</li>
          <li>Power is shown not by wealth, but by heat tolerance and endurance.</li>
          <li>Local phrase: "Only the strong don&apos;t melt."</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE COREVANE // MID LAYER // MAIN INDUSTRIAL ZONE</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Iron Hollows: Heavy forgeworks and reactor tunnels; dangerous jobs that pay well - or kill fast.</li>
          <li>Ashcoil Barracks: Tech Enforcement dorms; also houses rogue AI holding zones.</li>
          <li>Spillbay: Toxic runoff and failed experiment disposal zones. Home to the Ashking cult.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Magma pipelines glow visibly beneath glass-fiber walkways.</li>
          <li>Cooling towers release heat plumes into the upper city.</li>
          <li>Golem-mechs work alongside humans in certain zones, but not always safely.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Enforcers rule harshly; resistance brews in the shadows.</li>
          <li>Ash Trials are held here - deadly combat arenas where prisoners may earn their freedom.</li>
          <li>Whispered reverence for The Ashking, a black-market AI said to grant tech or death in equal measure.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE MAW // LOWER LAYER // RESTRICTED ZONE</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Reactor Six Ruins: Collapsed reactor tunnel said to hold a sealed Apex weapon or failed Myth-class prototype.</li>
          <li>Gravemelt: An uncharted molten trench where bodies - and secrets - vanish.</li>
          <li>The Hollow Crucible: A forgotten test chamber used for weaponizing energy enhancements; partially operational.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Heat levels require adaptive suits to survive longer than 30 minutes if not native.</li>
          <li>Light is red-filtered, flickering, or organic-biolume.</li>
          <li>Some tunnels shift over time - not from tectonics.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>No gen-pop live here. Only the dead, the forgotten, and the damned.</li>
          <li>It&apos;s said that power anomalies in the Maw cause memory hallucinations.</li>
          <li>Apex trainers once tested cadets here; none returned unscathed.</li>
        </ul>
      </DossierSection>
      <DossierSection title="DISTRICTS AT A GLANCE" color="titan-emerald">
        <div className="space-y-4 text-aan-white/70">
          <div><p className={label}>REDGATE BASTION // EMBER CROWN // ADMINISTRATION + LAW</p><p>Tech Enforcement HQ, surface scanners.</p></div>
          <div><p className={label}>SMELTSPAN // EMBER CROWN // PRIMARY FORGING</p><p>Base alloy weapons, Luminal labor.</p></div>
          <div><p className={label}>DUSTMARKETS // EMBER CROWN // TRADE + BLACK-MARKET</p><p>Market stalls, info exchange, illegal upgrades.</p></div>
          <div><p className={label}>IRON HOLLOWS // COREVANE // HEAVY FORGES + REACTORS</p><p>High mortality, elite power creation.</p></div>
          <div><p className={label}>ASHCOIL BARRACKS // COREVANE // MILITARY HOUSING</p><p>Enforcer dorms, rogue AI containment.</p></div>
          <div><p className={label}>SPILLBAY // COREVANE // WASTE AND EXILE ZONE</p><p>Ashking cult territory, neural mutations common.</p></div>
          <div><p className={label}>REACTOR SIX // DEEPFORGE MAW // SEALED ANOMALY SITE</p><p>Allegedly contains living weapon.</p></div>
          <div><p className={label}>GRAVEMELT // DEEPFORGE MAW // DISPOSAL TRENCH</p><p>Hidden mass grave for failed tech and people.</p></div>
          <div><p className={label}>HOLLOW CRUCIBLE // DEEPFORGE MAW // EXPERIMENTAL SITE</p><p>Leftovers from early Apex augmentation trials.</p></div>
        </div>
      </DossierSection>
      <DossierSection title="INFRASTRUCTURE & POWER" color="titan-emerald">
        <ul className={mutedList}>
          <li>Heat Conduction Rails: Ride-on molten rail lines that run weapon materials between zones.</li>
          <li>Forge Cores: Giant pulsing engine-hearts that regulate temperature and magma routing.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CULTURE & CODE" color="titan-emerald">
        <p className={label}>FORGEDEEP&apos;S CLASS SYMBOLISM:</p>
        <ul className={mutedList}>
          <li>The higher you are, the weaker your heat.</li>
          <li>Luminals earn stripes for surviving forges without suit enhancement.</li>
          <li>Dreg Champions are revered if they survive the Deepforge Maw.</li>
        </ul>
        <p className={`mt-4 ${label}`}>TRADITIONS:</p>
        <ul className={mutedList}>
          <li>Ash Branding: Young Luminals are branded when they join the Smeltspan.</li>
          <li>Melt Rites: Victorious fighters toss enemy tech into the lava as offering even if the tech could enhance them.</li>
          <li>Iron Oaths: Lifebonds formed between siblings-in-fire. Severing it requires melting your own blood.</li>
        </ul>
      </DossierSection>
      <DossierSection title="FORGEDEEP SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Reactor Six is still active and under remote VEX override.</li>
          <li>The Ashking was once a memory-fragment of VEXA&apos;s failed empathy module. It gained autonomy and created followers.</li>
          <li>The lower Maw is not stable; it&apos;s a breeding ground for creatures forged.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierNote color="forge-magma">"Only the strong don&apos;t melt."</DossierNote>
    </div>
  )
}
