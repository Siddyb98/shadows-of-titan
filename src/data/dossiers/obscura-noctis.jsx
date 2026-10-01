import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function ObscuraNoctisDossier() {
  const headerData = {
    designation: 'GEO-OMEGA-01',
    classification: 'GEOSPHERE // OUTER POLAR SHROUD // FORBIDDEN ZONE',
    codename: 'THE OBSCURA NOCTIS BELT',
    headerFields: [
      { label: 'ENVIRONMENT', value: 'Perpetual twilight, deep canyons, ash fields, and storm-ringed hills' },
      { label: 'FUNCTION', value: 'Containment and memory erasure experiments' },
      { label: 'SIZE', value: 'Approximately 700 km band' },
      { label: 'SHAPE', value: 'Jagged mountainous loop like a closed eye or ouroboros' },
      { label: 'LOCATION', value: 'Far north, hugging the Titan polar cap' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="TERRAIN" color="titan-emerald">
        <p>Perpetual twilight, deep canyons, ash fields, storm-ringed hills. No direct sunlight.</p>
        <p className={`mt-4 ${label}`}>SHAPE:</p>
        <p>A jagged mountainous loop like a closed eye or ouroboros around the north pole.</p>
      </DossierSection>
      <DossierSection title="KEY FUNCTION" color="titan-emerald">
        <p>Forbidden zone. Containment. Memory erasure experiments.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Off-limits to civilians. Believed to hold the Obsidian Annex and memory-vault devices.</li>
          <li>Occasional flashes of light deep in the mists - rumored to be early Apex prototypes still alive.</li>
        </ul>
      </DossierSection>
      <DossierSection title="SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Time flows differently here. Some return from expeditions aged years overnight, or unchanged after months.</li>
          <li>VEX fragments monitor this zone through hidden satellite arrays.</li>
          <li>The terrain shifts when not observed directly.</li>
        </ul>
        <RedactedBlock lines={4} />
      </DossierSection>
    </div>
  )
}
