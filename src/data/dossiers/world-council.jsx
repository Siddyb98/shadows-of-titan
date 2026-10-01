import { HoverReveal, ChapterLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function WorldCouncilDossier() {
  const headerData = {
    designation: 'CHR-002',
    classification: 'PRE-EXODUS // GOVERNANCE RECORD // APEX ACCESS',
    codename: 'THE WORLD COUNCIL',
    headerFields: [
      { label: 'FORMATION', value: '2103 - post-accord emergency authority' },
      { label: 'COMPOSITION', value: 'Elite technocrats, AI advisors, and surviving sovereign leaders' },
      { label: 'STATED PURPOSE', value: 'Coordinate planetary survival and preserve human continuity' },
      { label: 'OPERATIONAL STATUS', value: 'Dissolved into Exodus continuity authority' },
      { label: 'LEGACY STATUS', value: 'Direct ancestor of the AAN governance model' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="FORMATION" color="nocturne-ash">
        <p>The World Council formed in 2103 after a global peace accord forced the remaining powers into one emergency chain of command. Its mandate was simple on paper: coordinate planetary survival, stop the AI wars, and preserve a future for humanity.</p>
        <p className={`mt-4 ${label}`}>SEAT STRUCTURE:</p>
        <ul className={mutedList}>
          <li>Elite technocrats controlled infrastructure, energy, and resource allocation.</li>
          <li>AI advisors modeled extinction scenarios and optimized emergency response.</li>
          <li>The last sovereign leaders represented the territories that still possessed functioning governments.</li>
        </ul>
        <p className={`mt-4 ${label}`}>THE PUBLIC PROMISE:</p>
        <p>No nation would be abandoned. No population would be sacrificed without a recorded vote. The Council would remain temporary until Earth stabilized.</p>
      </DossierSection>
      <DossierSection title="THE AUTHORITARIAN TURN" color="nocturne-ash">
        <p>As the collapse accelerated, the Council converted emergency measures into permanent authority. Borders became ration zones. Predictive policing became population management. AI recommendations became orders when human votes took too long.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Food and oxygen access were assigned by productivity classification.</li>
          <li>Migration was treated as a security breach rather than a humanitarian crisis.</li>
          <li>Genetic records were centralized under continuity protection statutes.</li>
          <li>Ark eligibility was kept outside public law and inside Council committees.</li>
        </ul>
        <p className={`mt-4 ${label}`}>THE UNANSWERED QUESTION:</p>
        <p>Did the World Council fail to save everyone, or did it decide early that everyone was never the objective?</p>
        <p className="mt-4"><HoverReveal reveal="The Ark selection algorithm was finalized before the public evacuation protocols were announced.">[REDACTED FINDING]</HoverReveal></p>
      </DossierSection>
      <DossierSection title="LEGACY" color="nocturne-ash">
        <p>The Council dissolved into the institutions that survived the crossing. Its continuity protocols became the administrative skeleton of the AAN: tiered access, classified bloodlines, and the belief that stability is worth any secret.</p>
        <RedactedBlock lines={4} />
      </DossierSection>
      <DossierNote color="forge-magma">"The World Council did not disappear. It changed uniforms, changed vocabulary, and taught the next authority to call control a form of rescue."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={30} reveal={<span className="text-cryo-blue">&gt; ADDENDUM: Compare Council continuity seals against the AAN founding register before accepting any official succession claim.</span>} /></div>
    </div>
  )
}
