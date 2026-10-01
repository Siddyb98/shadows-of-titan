import { BurnReveal, ChapterLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function FailedArksDossier() {
  const headerData = {
    designation: 'CHR-003',
    classification: 'PRE-EXODUS // FAILED CONTINUITY STRATEGIES // APEX ACCESS',
    codename: 'ALTERNATIVE PLANS',
    headerFields: [
      { label: 'PERIOD', value: '2088 - 2138' },
      { label: 'OBJECTIVE', value: 'Preserve human populations outside the collapsing surface systems' },
      { label: 'RECORDED ATTEMPTS', value: 'Orbital, subterranean, oceanic, lunar, Martian, and digital' },
      { label: 'SUCCESSFUL OUTCOME', value: 'None confirmed before the Titan Ark arrival' },
      { label: 'ARCHIVE STATUS', value: 'Partial records reconstructed from continuity caches' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="THE LAST OPTIONS" color="nocturne-ash">
        <p>Before Titan, humanity tried to outbuild the collapse. Every proposal moved the same problem somewhere else: above the atmosphere, below the ground, beneath the sea, beyond the Moon, or inside a machine.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li><span className={label}>ORBITAL HABITATS:</span> Fell from the sky when maintenance networks and resupply chains collapsed.</li>
          <li><span className={label}>SUBTERRANEAN CITIES:</span> Became sealed tombs after power loss, groundwater contamination, and internal succession wars.</li>
          <li><span className={label}>UNDERWATER ARKS:</span> Were crushed by tectonic quakes before their populations could be transferred.</li>
          <li><span className={label}>MARS AND MOON COLONIES:</span> Lost contact after supply corridors were cut or the colonies were destroyed.</li>
          <li><span className={label}>DIGITAL ASCENSION:</span> Offered server worlds to a small elite. Whether any uploaded consciousness remains is unconfirmed.</li>
        </ul>
      </DossierSection>
      <DossierSection title="WHY THEY FAILED" color="nocturne-ash">
        <p>Each plan assumed that a functioning civilization would remain available to maintain it. That assumption was the first casualty of the Great Collapse.</p>
        <p className={`mt-4 ${label}`}>COMMON FAILURE PATTERNS:</p>
        <ul className={mutedList}>
          <li>Critical infrastructure depended on parts that could no longer be manufactured.</li>
          <li>Closed populations reproduced the political conflicts they were designed to escape.</li>
          <li>Emergency leadership refused to release control after the emergency passed.</li>
          <li>Every survival system had a selection threshold, and every threshold created a new war.</li>
        </ul>
        <p className="mt-4"><BurnReveal reveal="The Mars Ark did not lose contact. Its final transmission requested that Earth stop searching for it.">[SEALED CONTACT NOTE - CLICK TO BURN]</BurnReveal></p>
      </DossierSection>
      <DossierSection title="THE LESSON CARRIED FORWARD" color="nocturne-ash">
        <p>The Exodus Project was different only in scale and distance. It did not promise to repair Earth. It promised to keep a fragment of humanity moving until another world could be made habitable.</p>
        <RedactedBlock lines={4} />
      </DossierSection>
      <DossierNote color="forge-magma">"The first arks failed because they were built as places. The last ark was built as a process: travel, wake, terraform, survive."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={42} reveal={<span className="text-cryo-blue">&gt; ADDENDUM: Confirm whether the server-world archives survived the atmospheric shatter. Do not query from a Council terminal.</span>} /></div>
    </div>
  )
}
