import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function SkelterReachDossier() {
  const headerData = {
    designation: 'GEO-010',
    classification: 'GEOSPHERE // WESTERN TERRAFORMING FAULTLINE',
    codename: 'THE SKELTER REACH',
    headerFields: [
      { label: 'ENVIRONMENT', value: 'Craggy, sharp-angled volcanic ridges and broken crust' },
      { label: 'FUNCTION', value: 'Power generation and resource extraction' },
      { label: 'SIZE', value: 'Approximately 500 km long, 100-200 km wide' },
      { label: 'SHAPE', value: 'Long jagged rift zone, like a lightning scar' },
      { label: 'LOCATION', value: 'West-central band, bordering outer tectonic zone' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="TERRAIN" color="titan-emerald">
        <p>Craggy, sharp-angled volcanic ridges and broken crust. Constant minor tremors.</p>
        <p className={`mt-4 ${label}`}>SHAPE:</p>
        <p>Long jagged rift zone, stretching like a lightning scar.</p>
      </DossierSection>
      <DossierSection title="KEY FUNCTION" color="titan-emerald">
        <p>Power generation and resource extraction.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Titan&apos;s geothermal reactors tap into this unstable bedrock.</li>
          <li>Surface cracked by glowing mineral rivers - radiant ore harvested for AI interface power.</li>
        </ul>
      </DossierSection>
      <DossierSection title="SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Beneath the Reach lies Stargrave 9, the quarantined failed colony. Technically erased.</li>
          <li>The Pulse Grid is most unstable here. Some say Titan screams at night through the caverns.</li>
        </ul>
        <FragmentLock fragmentKey="ADAPT-STACK-7" reveal={<span className="text-titan-emerald italic">The Skelter Reach is a western terraforming faultline.</span>} />
        <RedactedBlock lines={3} />
      </DossierSection>
    </div>
  )
}
