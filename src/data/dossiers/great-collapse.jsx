import { ChapterLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function GreatCollapseDossier() {
  const headerData = {
    designation: 'CHR-001',
    classification: 'PRE-EXODUS // PLANETARY FAILURE // PUBLIC RECORD',
    codename: 'THE GREAT COLLAPSE',
    headerFields: [
      { label: 'ERA', value: '2084 - 2134' },
      { label: 'PRIMARY WORLD', value: 'Earth' },
      { label: 'FAILURE TYPE', value: 'Environmental, political, biological, and atmospheric cascade' },
      { label: 'SURVIVOR STATUS', value: 'Baseline surface habitation terminated' },
      { label: 'ARCHIVE SOURCE', value: 'Recovered World Council continuity records' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="THE STATE OF EARTH" color="nocturne-ash">
        <p>Earth did not end in a single event. It failed as a chain reaction: each emergency made the next one harder to survive, until the systems built to preserve civilization became the systems accelerating its collapse.</p>
        <p className={`mt-4 ${label}`}>ENVIRONMENTAL DECAY:</p>
        <ul className={mutedList}>
          <li>Rising sea levels consumed coastal population centers and displaced millions.</li>
          <li>Acidic rain stripped soil and infrastructure across former agricultural belts.</li>
          <li>Crop collapse and unbreathable air made the megacities dependent on failing filtration systems.</li>
        </ul>
        <p className={`mt-4 ${label}`}>GEOPOLITICAL BREAKDOWN:</p>
        <p>Nationalist blocs and globalist emergency coalitions fought over the remaining food, water, and orbital infrastructure. AI-controlled war zones fragmented governments into armed territories with incompatible chains of command.</p>
        <p className={`mt-4 ${label}`}>GENETIC TINKERING GONE WRONG:</p>
        <p>Experimental modifications, engineered bio-weapons, and successive super-viruses erased the distinction between medical research and weapons development.</p>
        <p className={`mt-4 ${label}`}>TECH DEPENDENCY:</p>
        <p>Earth&apos;s ecosystem relied on machines that could no longer be maintained. Every grid collapse became a mass-death event, taking water pumps, crop towers, hospitals, and atmospheric scrubbers offline together.</p>
        <p className={`mt-4 ${label}`}>ATMOSPHERIC SHATTER:</p>
        <p>A failed planetary climate-control attempt cracked the upper atmosphere. The repair effort stabilized nothing. It only made the surface more hostile and shortened the window for evacuation.</p>
      </DossierSection>
      <DossierSection title="TIMELINE MILESTONES" color="nocturne-ash">
        <ul className="list-none space-y-3 text-aan-white/70">
          <li><span className={label}>2084:</span> The Great Collapse begins: global crop failures, megastorms, and mass migration.</li>
          <li><span className={label}>2096:</span> The first AI wars begin between militarized drones and rogue nations.</li>
          <li><span className={label}>2103:</span> The World Council forms after a global peace accord.</li>
          <li><span className={label}>2110:</span> A failed Mars Ark loses all contact.</li>
          <li><span className={label}>2117:</span> The Catalyst Strain virus wipes out three billion people.</li>
          <li><span className={label}>2125:</span> The Exodus Project secretly begins construction of the Arks.</li>
          <li><span className={label}>2134:</span> Earth&apos;s surface becomes uninhabitable to baseline humans.</li>
          <li><span className={label}>2138:</span> Multiple seed-ships launch into deep space. Titan&apos;s Ark is the only one to arrive.</li>
          <li><span className={label}>2260:</span> The Ark reaches Titan and terraforming protocols begin.</li>
          <li><span className={label}>2310 - 2330:</span> The first generation of powered humans is born.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierNote color="forge-magma">"The planet was not abandoned when it became difficult to save. It was abandoned when the people capable of saving it stopped agreeing on who deserved to live."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={22} reveal={<span className="text-cryo-blue">&gt; ADDENDUM: Atmospheric Shatter remediation data remains sealed under World Council continuity authority.</span>} /></div>
    </div>
  )
}
