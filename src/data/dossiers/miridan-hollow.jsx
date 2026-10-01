import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function MiridanHollowDossier() {
  const headerData = {
    designation: 'GEO-040',
    classification: 'GEOSPHERE // MIDWESTERN BIOME SCAR',
    codename: 'MIRIDAN HOLLOW',
    headerFields: [
      { label: 'ENVIRONMENT', value: 'Toxic jungle-like overgrowth, aggressive flora, bioluminescent fungi, and vines' },
      { label: 'FUNCTION', value: 'Failed terraforming zone, biological weapons lab, and exile zone' },
      { label: 'SIZE', value: 'Approximately 400 km' },
      { label: 'SHAPE', value: 'Irregular oval with creeping edges - the jungle spreads' },
      { label: 'LOCATION', value: 'Mid-western quadrant between Skelter and Heliostrand' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="TERRAIN" color="titan-emerald">
        <p>Toxic jungle-like overgrowth, aggressive flora, bioluminescent fungi and vines.</p>
        <p className={`mt-4 ${label}`}>SHAPE:</p>
        <p>Irregular oval with creeping edges - the jungle spreads.</p>
      </DossierSection>
      <DossierSection title="KEY FUNCTION" color="titan-emerald">
        <p>Failed terraforming zone turned biological weapons lab and exile zone.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Constant bio-anomalies. Terrain mutates after storms.</li>
          <li>Hidden Null communes survive off-grid here.</li>
        </ul>
      </DossierSection>
      <DossierSection title="SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>A collapsed Catalyst fragment is buried under the Bleeding Tree Forest. It causes organic matter to reshape unpredictably.</li>
          <li>The jungle mimics human shapes at night - often mistaken as hallucinations.</li>
        </ul>
        <FragmentLock fragmentKey="SEEDLINE-01" reveal={<span className="text-titan-emerald italic">A collapsed Catalyst fragment is buried under the Bleeding Tree Forest.</span>} />
        <RedactedBlock lines={3} />
      </DossierSection>
    </div>
  )
}
