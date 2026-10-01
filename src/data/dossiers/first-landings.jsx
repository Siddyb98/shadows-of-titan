import { ChapterLock, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function FirstLandingsDossier() {
  const headerData = {
    designation: 'CHR-021',
    classification: 'TITAN LANDINGS // FOUNDING SETTLEMENT // PUBLIC RECORD',
    codename: 'THE FIRST LANDINGS',
    headerFields: [
      { label: 'ARRIVAL', value: '2260' },
      { label: 'ORIGINAL SITE', value: 'Heliostrand Cradle' },
      { label: 'SITE DESCRIPTION', value: 'A valley shaped like a spiral sunburst' },
      { label: 'FIRST SETTLEMENT', value: 'Original colony site, now buried beneath a fortress' },
      { label: 'CLASS STRUCTURE', value: 'Not present at landing - developed within 30 years' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="THE FIRST WALKERS" color="nocturne-ash">
        <p className="text-titan-emerald italic">"The ones who walked first still walk among us in dreams, in vaults, and in ash."</p>
        <p className="mt-4">The first settlers landed in Heliostrand Cradle, a valley shaped like a spiral sunburst. It became the original colony site and, later, the foundation buried beneath a fortress.</p>
        <p className={`mt-4 ${label}`}>ORIGINAL SETTLERS:</p>
        <p>The surviving outline identifies a mixed population drawn from the Ark&apos;s cryogenic passengers, Voyageborn, engineers, command staff, and continuity specialists.</p>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierSection title="THE BIRTH OF CLASS" color="nocturne-ash">
        <p>Class division was not present when the Ark landed. It evolved within thirty years as access to technology, mutation treatment, education, and the terraforming systems became unequal.</p>
        <p className={`mt-4 ${label}`}>THE ORIGINAL ORDER:</p>
        <p>The source record is incomplete. The first settlement appears to have begun as a shared survival project before the first Apex traits and inherited privileges hardened into law.</p>
        <RedactedBlock lines={4} />
      </DossierSection>
      <DossierSection title="FIRST APEX GENERATION" color="nocturne-ash">
        <p>Early Apex were not fully human in the baseline sense. They were the children of people exposed to both Catalyst anomalies and Helios resonance, a rare atmospheric phenomenon.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Some were born with neural threads connected to dormant ship systems.</li>
          <li>Some displayed a strange awareness of Titan&apos;s will.</li>
          <li>Later classification systems treated their descendants as proof that mutation could be inherited, controlled, and ranked.</li>
        </ul>
        <p className="mt-4">Myth is a direct descendant of a first-generation Apex touched by both Catalyst radiation and unclassified alien spores.</p>
        <FragmentLock fragmentKey="MYTH-001X" reveal={<span className="text-titan-emerald italic">The first Apex line was not a clean inheritance. It was a three-way contact event between human biology, Catalyst radiation, and Titan&apos;s unclassified microbial life.</span>} />
      </DossierSection>
      <DossierNote color="forge-magma">"The first settlers built a home. Their children built categories. Their grandchildren mistook the categories for nature."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={48} reveal={<span className="text-cryo-blue">&gt; ADDENDUM: Myth-001X remains the clearest surviving link to the first Apex generation.</span>} /></div>
    </div>
  )
}
