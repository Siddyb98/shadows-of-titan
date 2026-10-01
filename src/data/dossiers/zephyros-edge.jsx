import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function ZephyrosEdgeDossier() {
  const headerData = {
    designation: 'GEO-050',
    classification: 'GEOSPHERE // EASTERN CLOUD-SHELF PLATEAU',
    codename: 'ZEPHYROS EDGE',
    headerFields: [
      { label: 'ENVIRONMENT', value: 'Floating cliffside mesas, high-altitude winds, cloud-seas, sky lakes, and aerial rift zones' },
      { label: 'FUNCTION', value: 'Elite Apex military testing grounds and sensor dome network' },
      { label: 'SIZE', value: 'Approximately 300 km edge; floating radius extends further' },
      { label: 'SHAPE', value: 'Jagged elevated shelf with tear-drop shaped floating islands' },
      { label: 'LOCATION', value: 'Far east, rising sharply from the terraformed crust' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="TERRAIN" color="titan-emerald">
        <p>Floating cliffside mesas, high-altitude winds, cloud-seas, sky lakes, and aerial rift zones.</p>
        <p className={`mt-4 ${label}`}>SHAPE:</p>
        <p>Jagged elevated shelf with tear-drop shaped floating islands.</p>
      </DossierSection>
      <DossierSection title="KEY FUNCTION" color="titan-emerald">
        <p>Elite Apex military testing grounds and sensor dome network.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Home to Skydom Nexus - the anti-gravity complex used to train high-level Apex fliers.</li>
          <li>Gravity fluctuates during solar storms, creating floating ruin pockets.</li>
        </ul>
      </DossierSection>
      <DossierSection title="SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Old Exodus Ark wreckage hangs in the sky above the edge - fused into the clouds.</li>
          <li>Some believe The Oracle Node is hidden here - a fragment of VEXA&apos;s original core.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
    </div>
  )
}
