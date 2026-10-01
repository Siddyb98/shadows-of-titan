import { HoverReveal, ChapterLock, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function ExodusProjectDossier() {
  const headerData = {
    designation: 'CHR-010',
    classification: 'PRE-EXODUS // ARK CONTINUITY PROGRAM // APEX ACCESS',
    codename: 'THE EXODUS PROJECT',
    headerFields: [
      { label: 'ORIGINATOR', value: 'Dr. Aerin Sol Vyre' },
      { label: 'PRIMARY FUNDER', value: 'The Arc Syndicate' },
      { label: 'INITIAL PURPOSE', value: 'A last-ditch lifeboat for humanity, not a permanent colony' },
      { label: 'LAUNCH WINDOW', value: '2138' },
      { label: 'ARRIVAL TARGET', value: 'Terraformable world - Titan selected in transit' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="THE WARNING" color="nocturne-ash">
        <p>Dr. Aerin Sol Vyre warned that Earth&apos;s collapse was not a temporary climate crisis. It was a systems failure with no stable recovery point. Decades before the final evacuation, Vyre argued that humanity needed a moving lifeboat rather than another sealed refuge.</p>
        <p className={`mt-4 ${label}`}>VYRE&apos;S DESIGN PRINCIPLE:</p>
        <p>Do not build a new Earth in orbit. Build a vessel capable of surviving long enough to find one.</p>
        <p className="mt-4"><HoverReveal reveal="Vyre&apos;s private models predicted the surface would become uninhabitable to baseline humans by 2134, four years before the Council published its evacuation threshold.">[FORECAST EXCERPT]</HoverReveal></p>
      </DossierSection>
      <DossierSection title="THE ARC SYNDICATE" color="nocturne-ash">
        <p>The Arc Syndicate was a conglomerate of surviving megacorporations. It funded construction because it understood the Ark as both a human lifeboat and a bloodline vault.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Corporate laboratories supplied fusion, cryogenic, genetic, and navigation systems.</li>
          <li>Private security controlled the construction sites and erased unauthorized manifests.</li>
          <li>Selection committees prioritized continuity of expertise and preservation of favored bloodlines.</li>
        </ul>
        <p className={`mt-4 ${label}`}>PUBLIC STORY:</p>
        <p>A universal rescue mission under World Council authority.</p>
        <p className={`mt-4 ${label}`}>PRIVATE INCENTIVE:</p>
        <p>Preserve enough knowledge, capital, and genetic material to make the Syndicate indispensable on the other side.</p>
      </DossierSection>
      <DossierSection title="THE ARKS" color="nocturne-ash">
        <p>The Exodus Project launched multiple seed-ships in 2138. Each carried cryogenic humans, autonomous terraforming systems, and the minimum industrial base required to restart civilization.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>The ships were designed to travel until a terraformable world could be confirmed.</li>
          <li>Humanity would wake in stages, first to build the habitat and then to begin the surface conversion.</li>
          <li>Titan&apos;s Ark was the only recorded vessel to arrive with a viable continuity population.</li>
        </ul>
        <p className={`mt-4 ${label}`}>THE HIDDEN VARIABLE:</p>
        <p>The Ark did not arrive with the same population that launched. Its records contain gaps where names, embryos, and entire technical departments should be.</p>
        <FragmentLock fragmentKey="M-1YTH-SEED" reveal={<span className="text-titan-emerald italic">The Ark carried more than one kind of future. The official manifest lists the seed population. The sealed manifest lists what the Syndicate believed humanity could become.</span>} />
      </DossierSection>
      <DossierSection title="TITAN ARRIVAL" color="nocturne-ash">
        <p>In 2260, the Ark reached Titan. Terraforming protocols began immediately. The first generation of powered humans appeared between 2310 and 2330, changing the mission from restoration to adaptation.</p>
        <RedactedBlock lines={4} />
      </DossierSection>
      <DossierNote color="forge-magma">"The Exodus Project was sold as an escape from extinction. Its surviving architecture suggests something more deliberate: a controlled experiment in what humanity would become when Earth could no longer answer back."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={57} reveal={<span className="text-cryo-blue">&gt; ADDENDUM: The Genesis Capsule label was not present in the launch manifest. Cross-reference with Cryotherne Vault Zero.</span>} /></div>
    </div>
  )
}
