import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function HeliostrandCradleDossier() {
  const headerData = {
    designation: 'GEO-000',
    classification: 'GEOSPHERE // CENTRAL SOUTH EQUATORIAL BELT',
    codename: 'HELIOSTRAND CRADLE',
    headerFields: [
      { label: 'ENVIRONMENT', value: 'Lush, spiraled valley; misty and warm year-round' },
      { label: 'FUNCTION', value: 'Historic landing zone and genetic cradle of the Apex class' },
      { label: 'SIZE', value: 'Approximately 280 km across' },
      { label: 'SHAPE', value: 'Spiral or nautilus-shaped basin' },
      { label: 'LOCATION', value: 'Center-south of Titan\'s equator' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="TERRAIN" color="titan-emerald">
        <p>Lush, spiraled valley surrounded by high ridges and crystallized trees. Misty and warm year-round.</p>
        <p className={`mt-4 ${label}`}>SHAPE:</p>
        <p>A spiral or nautilus-shaped basin; natural Fibonacci cradle.</p>
      </DossierSection>
      <DossierSection title="KEY FUNCTION" color="titan-emerald">
        <p>Historic landing zone and genetic cradle of the Apex class.</p>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p>
        <ul className={mutedList}>
          <li>First terra-settlement dome remnants buried beneath the roots of the Verdant Spiral tree.</li>
          <li>Helios Vault is hidden deep beneath a glacial chasm called the Sunken Halo.</li>
        </ul>
      </DossierSection>
      <DossierSection title="SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>This region pulses faintly with untraceable energy at night - believed to be dormant Catalyst activity.</li>
          <li>Unknown to most, the Vault floor plan shifts weekly. It&apos;s semi-sentient.</li>
        </ul>
        <FragmentLock fragmentKey="MYTH-001X" reveal={<span className="text-titan-emerald italic">Heliostrand Cradle is the genetic cradle of the Apex class.</span>} />
        <RedactedBlock lines={3} />
      </DossierSection>
    </div>
  )
}
