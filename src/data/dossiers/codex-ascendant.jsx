import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function CodexAscendantDossier() {
  const headerData = {
    designation: 'COD-CLS-02',
    classification: 'CODEX ASCENDANT // FOUNDERS DOCUMENT // COUNCIL ACCESS',
    codename: 'CODEX ASCENDANT',
    headerFields: [
      { label: 'AUTHORSHIP', value: 'AAN founders' },
      { label: 'SUBJECT', value: 'Evolutionary harmony and class cultivation' },
      { label: 'STATUS', value: 'Secret document' },
      { label: 'DECLARED PURPOSE', value: 'Classify and cultivate powers into castes' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="cryo-blue" />
      <DossierSection title="THE SECRET DOCUMENT" color="cryo-blue">
        <p>The Codex Ascendant was written by AAN&apos;s founders.</p>
        <p className={`mt-4 ${label}`}>IT DECLARED:</p>
        <ul className={mutedList}>
          <li>Visual beauty = evolutionary harmony.</li>
          <li>Order = survival.</li>
          <li>Powers would be classified and cultivated into castes.</li>
        </ul>
      </DossierSection>
      <DossierSection title="THE CLASS LIE" color="cryo-blue">
        <p>Apex were not the strongest, just the most refined and most controllable.</p>
        <p className="mt-4">Nulls and Luminals were never meant to survive more than a generation. Their role was to test tech and absorb failure rates.</p>
        <FragmentLock fragmentKey="PROTO-NOVA" reveal={<span className="text-titan-emerald italic">Powers would be classified and cultivated into castes.</span>} />
      </DossierSection>
      <DossierSection title="ARCHIVE CONDITION" color="cryo-blue">
        <RedactedBlock lines={5} />
      </DossierSection>
      <DossierNote color="forge-magma">"Visual beauty = evolutionary harmony. Order = survival."</DossierNote>
    </div>
  )
}
