import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function FrostlineDivideDossier() {
  const headerData = {
    designation: 'GEO-030',
    classification: 'GEOSPHERE // SOUTHEASTERN GLACIAL STRETCH',
    codename: 'THE FROSTLINE DIVIDE',
    headerFields: [
      { label: 'ENVIRONMENT', value: 'Jagged ice cliffs, frozen lakes, sub-zero ridges, and glowing frozen-gas veins' },
      { label: 'FUNCTION', value: 'Medical research, cryo-engineering, and hidden cloning facilities' },
      { label: 'SIZE', value: 'Approximately 350 km arc' },
      { label: 'SHAPE', value: 'Crescent-shaped mountain range with deep plateaus' },
      { label: 'LOCATION', value: 'Southeastern curve, near Titan\'s dark hemisphere' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />
      <DossierSection title="TERRAIN" color="titan-emerald">
        <p>Jagged ice cliffs, frozen lakes, sub-zero ridges with glowing veins of frozen gases.</p>
        <p className={`mt-4 ${label}`}>SHAPE:</p>
        <p>Crescent-shaped mountain range with deep plateaus.</p>
      </DossierSection>
      <DossierSection title="KEY FUNCTION" color="titan-emerald">
        <p>Medical research, cryo-engineering, and hidden cloning facilities.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Hosts Vault Zero, an abandoned cryo-complex once used for prototype Apex creation.</li>
          <li>Cold-reactive flora grows here, used in Dreg healing poultices.</li>
        </ul>
      </DossierSection>
      <DossierSection title="SECRETS" color="titan-emerald">
        <ul className={mutedList}>
          <li>Beneath the Divide are Resonant Fossils - mutated humanoid remains fused into ice, still emitting pulses.</li>
          <li>One of the five Catalyst Wells is buried under Lake Silence. Rumored to be unstable.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
    </div>
  )
}
