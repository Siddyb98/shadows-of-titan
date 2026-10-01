import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function StratosGateDossier() {
  const headerData = {
    designation: 'CIT-003',
    classification: 'GEOSPHERE // DEEP CITY // VIRELYN EXPANSE',
    codename: 'STRATOS GATE',
    headerFields: [
      { label: 'LOCATION', value: 'Perched in the sonic bones of the Virelyn Expanse' },
      { label: 'STRUCTURE', value: 'Horizontal sprawl designed to spread with the winds' },
      { label: 'MATERIALS', value: 'Modular, lightweight, and often semi-mobile' },
      { label: 'PRIMARY PRESSURE', value: 'Frequent sonic storms' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="CITY STRUCTURE & LEVELS" color="titan-emerald">
        <p>Stratos Gate is not built up or down. It sprawls horizontally, designed to spread with the winds. Structures are modular, lightweight, and often semi-mobile, adapting to the region&apos;s frequent sonic storms.</p>
        <p className={`mt-4 ${label}`}>THE SPIRELINE ARRAY // CENTRAL VERTICAL ZONE // COMMAND & UPLINKS</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Aerocrypt: Control tower for air traffic, cloud-drones, and sonic barrier management.</li>
          <li>Echo Bastion: Home to the Voxx Vault, a weather manipulation AI that maintains Titan&apos;s upper winds.</li>
          <li>Strata Hall: Tower where traders meet, kinetic transport deals are negotiated, and air-lanes are sanctioned.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Towers float slightly above the ground, anchored by graviton chains.</li>
          <li>Lightning-rods form a sky-spike lattice to redirect lightning surges.</li>
          <li>Halls and walls absorb sound using resonant mesh, creating eerie silence zones.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Pilots and weather-techs walk in noise-halo gear, leaving trails of filtered wind.</li>
          <li>Traders speak in coded gust patterns, a mix of gestures and whistle-tones.</li>
          <li>Apex squads train here using the wind itself to navigate mid-air combat.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE GALE GRID // EASTERN SECTOR // MOBILITY & TRAINING</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>Slipcurrent Fields: Training zones for airborne maneuvers, skyboard duels, and kinetic-boost combat.</li>
          <li>Kite Bay: Engineering zone where gliders, skyplates, and sonic weapons are made or repaired.</li>
          <li>Featherline Rows: A housing zone made of flexible structures that reshape with wind pressure.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Buildings mounted on stabilizing skates that realign with storm directions.</li>
          <li>Sky tunnels allow travel on gliders, zip-tracks, or windboard lanes.</li>
          <li>Wind-harvest turbines grow from the ground like crystal flowers and hum during storms.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Children are taught to ride the storm before they walk.</li>
          <li>Annual Whirlraces through wind tunnels decide who commands the upper lanes.</li>
          <li>Apex initiates pass the Sliptrial, surviving a kinetic jet jump through a controlled tornado.</li>
        </ul>

        <p className={`mt-6 ${label}`}>THE DUST VAULTS // WESTERN SECTOR // OLD CARGO & FORBIDDEN ZONES</p>
        <p className={`mt-3 ${label}`}>DISTRICTS:</p>
        <ul className={mutedList}>
          <li>The Sand Hold: Subsurface warehouse of Earth-era cargo still unopened.</li>
          <li>Banshee Hollow: A dead zone where wind records human voices and repeats them back randomly.</li>
          <li>Craterfall: Long, jagged trench where a sky freight lane collapsed decades ago; scavengers still search for hidden tech.</li>
        </ul>
        <p className={`mt-4 ${label}`}>INFRASTRUCTURE:</p>
        <ul className={mutedList}>
          <li>Layers of sand and wire mesh protect buried items from disruption.</li>
          <li>Sonic pressure stabilizers malfunction frequently, creating sound mirages.</li>
          <li>Sub-chambers require tonal passwords to open, whistled or sung.</li>
        </ul>
        <p className={`mt-4 ${label}`}>CULTURE:</p>
        <ul className={mutedList}>
          <li>Locals avoid the Vaults; only Sandbinders, rogue traders, and kinetic hackers make regular pilgrimages.</li>
          <li>Echo cults believe the wind carries the thoughts of Titan&apos;s dead.</li>
          <li>It&apos;s rumored the original Earth comm logs are stored here, buried in a crate marked X-EX-VEX-AI-07.</li>
        </ul>
      </DossierSection>
      <DossierSection title="DISTRICTS AT A GLANCE" color="titan-emerald">
        <div className="space-y-4 text-aan-white/70">
          <div><p className={label}>AEROCRYPT // SPIRELINE ARRAY // AIR CONTROL</p><p>Graviton-suspended tower for routing all sky lanes.</p></div>
          <div><p className={label}>ECHO BASTION // SPIRELINE ARRAY // WIND AI NODE</p><p>Home of the Voxx Vault; controls regional weather.</p></div>
          <div><p className={label}>STRATA HALL // SPIRELINE ARRAY // TRADE & DIPLOMACY</p><p>Neutral ground for kinetic negotiations.</p></div>
          <div><p className={label}>SLIPCURRENT FIELDS // GALE GRID // COMBAT TRAINING</p><p>Tornado chamber, Apex wind agility tests.</p></div>
          <div><p className={label}>KITE BAY // GALE GRID // TECH DEVELOPMENT</p><p>Sonic gliders, sky weapons, storm armor production.</p></div>
          <div><p className={label}>FEATHERLINE ROWS // GALE GRID // CIVILIAN HOUSING</p><p>Wind-shaped, color-shifting shelters.</p></div>
          <div><p className={label}>THE SAND HOLD // DUST VAULTS // FORBIDDEN STORAGE</p><p>Earth crates, sealed sound crates, blackbox zones.</p></div>
          <div><p className={label}>BANSHEE HOLLOW // DUST VAULTS // AUDIO ANOMALY ZONE</p><p>Voices caught in the wind play on loop.</p></div>
          <div><p className={label}>CRATERFALL // DUST VAULTS // SCAVENGER GROUND</p><p>Legacy tech and possible AAN coverup wreckage.</p></div>
        </div>
      </DossierSection>
      <DossierSection title="INFRASTRUCTURE & ENERGY SYSTEMS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Kinetic Relay Towers: Convert storm wind and motion into power.</li>
          <li>Sonic Barrier Fields: Used to redirect windstorms or protect during Voxx Reversals.</li>
          <li>Resonance Paths: Sound-reactive stone roads that vibrate under movement and light up in rhythmic pulses.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CULTURE & CODE" color="titan-emerald">
        <p className={label}>SYMBOLISM:</p>
        <ul className={mutedList}>
          <li>Movement = status.</li>
          <li>The still are seen as outsiders, dangerous, or dishonest.</li>
          <li>Children wear wind-style tattoos that change with wind fluctuations.</li>
        </ul>
        <p className={`mt-4 ${label}`}>RITUALS:</p>
        <ul className={mutedList}>
          <li>The Gusting: Ceremony where pilots are named by the wind pattern that surrounds them during ascent.</li>
          <li>Echo Baptism: Initiates sit in Banshee Hollow and listen for a message from the wind, then repeat it back word for word. The process can take months.</li>
        </ul>
        <p className={`mt-4 ${label}`}>SOCIAL ROLES:</p>
        <ul className={mutedList}>
          <li>Windwalkers: Civilian air couriers and kinetic scouts.</li>
          <li>Drifts: Engineers trained to listen to Titan&apos;s storms for weather-code predictions.</li>
          <li>Wispborn: Illegally enhanced children rumored to be grown in the slipstream of the Voxx Vault itself.</li>
        </ul>
      </DossierSection>
      <DossierSection title="STRATOS GATE SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>The Voxx Vault is a sound-based AI that has begun mimicking emotional tone, becoming sentient.</li>
          <li>A buried container in the Sand Hold carries the last human voice from Earth - a warning about Titan&apos;s terraforming.</li>
          <li>Wind formations over Slipcurrent Fields occasionally form giant humanoid shapes, visible only from orbit - believed to be Titan&apos;s subconscious trying to communicate.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierNote color="forge-magma">"Perched in the sonic bones of the Virelyn Expanse, the Stratos Gate howls."</DossierNote>
    </div>
  )
}
