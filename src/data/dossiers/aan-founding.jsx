import { HoverReveal, ChapterLock, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function AanFoundingDossier() {
  const headerData = {
    designation: 'CHR-030',
    classification: 'AAN ERA // INSTITUTIONAL FOUNDING // COUNCIL ACCESS',
    codename: 'FOUNDING OF THE AAN',
    headerFields: [
      { label: 'FOUNDING DATE', value: 'Approximately 60 years after Titan landing' },
      { label: 'FULL NAME', value: 'Aegis Ascension Nexus' },
      { label: 'PUBLIC PURPOSE', value: 'Manage power classification and control mutation spread' },
      { label: 'FOUNDING CRISIS', value: 'The Aberrant Bloom' },
      { label: 'POPULATION LOSS', value: '12% during the mutation surge' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="THE PROMISE OF BALANCE" color="nocturne-ash">
        <p className="text-titan-emerald italic">"They said it was for balance. But balance always tips toward the throne."</p>
        <p className="mt-4">The Aegis Ascension Nexus was established roughly sixty years after the landing. Its stated purpose was to keep the young Titan society from being destroyed by uncontrolled mutation and unequal access to the systems that made survival possible.</p>
        <p className={`mt-4 ${label}`}>WHO FOUNDED IT?</p>
        <p>The founder record is incomplete. The surviving outline identifies an institutional coalition, but not the names of the people who first signed the Nexus charter.</p>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierSection title="THE AAN MANDATE" color="nocturne-ash">
        <p>AAN was created to:</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Manage power classification.</li>
          <li>Control mutation spread.</li>
          <li>Protect society from the Aberrant Bloom, a mutation surge that wiped out 12% of the population.</li>
        </ul>
        <p className={`mt-4 ${label}`}>THE PUBLIC ARGUMENT:</p>
        <p>Classification would make danger legible. Regulation would prevent another population-scale mutation event. Ascension would be safe only if the state could decide who was ready.</p>
      </DossierSection>
      <DossierSection title="CORRUPTION TIMELINE" color="nocturne-ash">
        <p>The AAN began as an idealistic institution. Over decades, its emergency powers became ordinary governance.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Safety classifications became inherited social rank.</li>
          <li>Mutation control became bloodline control.</li>
          <li>Public protection became surveillance of dissent and unauthorized evolution.</li>
          <li>Access to the Catalyst systems became a privilege of the classes the AAN claimed to regulate.</li>
        </ul>
        <p className="mt-4"><HoverReveal reveal="The first AAN charter contains no word for permanent caste. That term appears in the third revision, after the Aberrant Bloom memorials were sealed.">[CHARTER VARIANCE]</HoverReveal></p>
      </DossierSection>
      <DossierSection title="SECRET FOUNDER FILE" color="nocturne-ash">
        <p className={`font-mono text-xs ${label}`}>CODEX AETHERION</p>
        <p>A sealed AI memory file from Dr. Vyre, embedded in the neural core of the Catalyst Engine.</p>
        <p className={`mt-4 ${label}`}>DETAILS:</p>
        <p>The contents remain unprovided in the surviving archive outline.</p>
        <FragmentLock fragmentKey="M-1YTH-SEED" reveal={<span className="text-titan-emerald italic">Codex Aetherion is not an institutional founding document. It is a message from the missing architect, stored inside the machine that made the AAN possible.</span>} />
        <RedactedBlock lines={5} />
      </DossierSection>
      <DossierNote color="forge-magma">"The AAN did not invent the hierarchy. It gave the hierarchy a medical vocabulary, a security mandate, and a permanent archive."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={30} reveal={<span className="text-cryo-blue">&gt; ADDENDUM: Founding signatures cross-reference with the sealed AAN shadow structure.</span>} /></div>
    </div>
  )
}
