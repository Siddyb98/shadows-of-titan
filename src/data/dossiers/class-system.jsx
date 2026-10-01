import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function ClassSystemDossier() {
  const headerData = {
    designation: 'COD-CLS-01',
    classification: 'CLASS SYSTEM // FIRST CENTURY // APEX ACCESS',
    codename: 'CLASS SYSTEM',
    headerFields: [
      { label: 'INITIAL STRUCTURE', value: 'Roles assigned by skill' },
      { label: 'LATER STRUCTURE', value: 'Mutation advantages converted into social classes' },
      { label: 'PRIORITIZED TRAITS', value: 'Strength, flight, heat resistance, and other stable mutations' },
      { label: 'MARGINALIZED TRAITS', value: 'Grotesque or unpredictable powers' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="cryo-blue" />
      <DossierSection title="INITIALLY" color="cryo-blue">
        <p>There was no class system. Everyone was assigned roles based on skill.</p>
      </DossierSection>
      <DossierSection title="THEN" color="cryo-blue">
        <ul className={mutedList}>
          <li>Mutations started showing distinct advantages.</li>
          <li>Those with stable mutations - strength, flight, heat resistance - were prioritized.</li>
          <li>Others with grotesque or unpredictable powers were marginalized.</li>
        </ul>
      </DossierSection>
      <DossierSection title="CLASSIFICATION BECAME CASTE" color="cryo-blue">
        <p>Apex were not the strongest, just the most refined and most controllable.</p>
        <p className="mt-4">Nulls and Luminals were never meant to survive more than a generation. Their role was to test tech and absorb failure rates.</p>
        <RedactedBlock lines={4} />
      </DossierSection>
      <DossierNote color="forge-magma">"Apex were not the strongest, just the most refined and most controllable."</DossierNote>
    </div>
  )
}
