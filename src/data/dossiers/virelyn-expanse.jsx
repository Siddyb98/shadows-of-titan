import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function VirelynExpanseDossier() {
  const headerData = {
    designation: 'GEO-020',
    classification: 'GEOSPHERE // NORTHERN WIND BASIN',
    codename: 'VIRELYN EXPANSE',
    headerFields: [
      { label: 'ENVIRONMENT', value: 'Wind-scoured plains, metallic dunes, and petrified lightning fields' },
      { label: 'FUNCTION', value: 'Flight and mobility training, atmospheric science, and secret storage' },
      { label: 'SIZE', value: 'Approximately 600 km across' },
      { label: 'SHAPE', value: 'Flat-bottomed megabasin with ridges and a central canyon' },
      { label: 'LOCATION', value: 'North equatorial zone, stretching westward' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="TERRAIN" color="titan-emerald">
        <p>Wind-scoured plains, shifting metallic dunes, and ancient petrified lightning fields.</p>
        <p className={`mt-4 ${label}`}>SHAPE:</p>
        <p>Flat-bottomed megabasin with ridges; central canyon runs like a scar through it.</p>
      </DossierSection>
      <DossierSection title="KEY FUNCTION" color="titan-emerald">
        <p>Flight and mobility training, atmospheric science zones, and secret storage silos.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Houses AAN skyport towers and long-range satellite uplink cores.</li>
          <li>Wind towers harvest kinetic energy through resonance vibration.</li>
          <li>Sonic storms occur in cycles called Voxx Reversals.</li>
        </ul>
      </DossierSection>
      <DossierSection title="SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Beneath the dunes are old Earth cargo containers never unloaded, said to hold forgotten AI units.</li>
          <li>The sand sings to certain Apex children in dreams.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
    </div>
  )
}
