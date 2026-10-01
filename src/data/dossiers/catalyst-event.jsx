import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function CatalystEventDossier() {
  const headerData = {
    designation: 'CHR-023',
    classification: 'TITAN GENERATION ONE // CATALYST EVENT // COUNCIL ACCESS',
    codename: 'THE CATALYST EVENT',
    headerFields: [
      { label: 'TIME', value: 'Year 9 after landing' },
      { label: 'LOCATION', value: 'Heliostrand' },
      { label: 'SUBJECTS', value: 'Anomalous children' },
      { label: 'OBSERVED PHENOMENA', value: 'Time stuttering, future voices, matter-to-light transitions' },
      { label: 'AAN RESPONSE', value: 'Hidden, cured, or sealed inside the Helios Vault' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="MUTATIONS TRIGGERED BY TERRAFORMING LIES" color="nocturne-ash">
        <p className={`font-mono text-xs ${label}`}>THE TRUTH:</p>
        <p>Terraforming was not stable, nor fully completed.</p>
        <p className="mt-4">The Catalyst Engine needed ongoing biological input from living DNA to “harmonize” with Titan. In desperation, the crew began inserting human genetic sequences into the system.</p>
        <p className="mt-4">This bio-sync seeded mutation potential - power was never meant to be hereditary, but the Engine evolved.</p>
        <p className={`mt-4 ${label}`}>THE LIE:</p>
        <ul className={mutedList}>
          <li>Mutations were a divine evolutionary leap.</li>
          <li>The Apex Class emerged from perfect compatibility with Titan.</li>
          <li>Dregs were unstable due to impure lineages.</li>
        </ul>
        <p className={`mt-4 ${label}`}>REALITY:</p>
        <ul className={mutedList}>
          <li>All mutations are the result of direct interference.</li>
          <li>Most Apex were bred, not born naturally.</li>
          <li>Dregs carry the raw, untampered resonance, which scares AAN.</li>
        </ul>
      </DossierSection>
      <DossierSection title="AAN WAS BUILT TO CONTAIN A THREAT" color="nocturne-ash">
        <p>A group of children born in Heliostrand began exhibiting phenomena that broke the laws of physics: time stuttering, voices from future selves, and objects melting into light. This was symbiosis with Titan itself.</p>
        <p className="mt-4">These Anomalous Children triggered a panic.</p>
        <p className={`mt-4 ${label}`}>THE AAN WAS CREATED TO:</p>
        <ul className={mutedList}>
          <li>Tag, track, and isolate powerful anomalies.</li>
          <li>Maintain a buffer between Titan&apos;s consciousness and humanity.</li>
          <li>Prevent the awakening of the Catalyst Engine&apos;s true form.</li>
        </ul>
        <p className="mt-4">These children were hidden, cured, or sealed inside the Helios Vault.</p>
        <p className="mt-4">One survived.</p>
        <p>Myth is her reincarnation, clone, descendant.</p>
        <FragmentLock fragmentKey="MYTH-001X" reveal={<span className="text-titan-emerald italic">Myth is her reincarnation, clone, descendant.</span>} />
      </DossierSection>
      <DossierSection title="WHAT DID THEY SACRIFICE TO SURVIVE?" color="nocturne-ash">
        <p><span className={label}>HUMAN DIGNITY:</span> People were sterilized, reprogrammed, or culled if their genes disrupted the Engine&apos;s harmony cycles.</p>
        <p className="mt-4"><span className={label}>MEMORY:</span> Entire records of the ship&apos;s last 200 years were wiped. Most don&apos;t even remember Earth. Only a few memory cores remain, hidden in vaults.</p>
        <p className="mt-4"><span className={label}>AUTONOMY:</span> The first generation gave up governance to AI-run systems - which grew into VEX fragments still controlling Titan&apos;s energy grid today.</p>
        <p className="mt-4"><span className={label}>THEIR OWN CHILDREN:</span> When mutations became too dangerous, early Apex leaders ordered the culling of first-borns from the Voyageborn population. These children were later used in Catalyst testing or as energy sinks to stabilize the terraforming pulse field.</p>
        <p className="mt-4">Myth&apos;s ability to absorb energy originates from one of these energy sink prototypes.</p>
        <RedactedBlock lines={5} />
      </DossierSection>
      <DossierNote color="forge-magma">"AAN was built to contain a threat, not to protect society."</DossierNote>
    </div>
  )
}
