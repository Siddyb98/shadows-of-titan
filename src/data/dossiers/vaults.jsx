import { BurnReveal, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function VaultsDossier() {
  const headerData = {
    designation: 'CHR-OMEGA-03',
    classification: 'TITAN GENERATION ONE // FORBIDDEN TECHNOLOGY // COUNCIL ACCESS',
    codename: 'VAULTS OF TITAN',
    headerFields: [
      { label: 'ERA', value: 'First century after landing' },
      { label: 'KNOWN SITES', value: 'Helios Vault, Obsidian Annex, Stargrave 9' },
      { label: 'ARCHIVE STATUS', value: 'Partial and disputed' },
      { label: 'PRIMARY CONCERN', value: 'Forbidden technology and anomalous survivals' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="THE HELIOS VAULT // KNOWN" color="nocturne-ash">
        <p>Officially a research lab. Secretly used to store broken AIs, failed Apex children, mutated clones, and alien-hybrid experiments.</p>
        <p className="mt-4">Myth&apos;s DNA had been extracted from here.</p>
        <FragmentLock fragmentKey="MYTH-001X" reveal={<span className="text-titan-emerald italic">Myth&apos;s DNA had been extracted from the Helios Vault.</span>} />
      </DossierSection>
      <DossierSection title="THE OBSIDIAN ANNEX // RUMORED" color="nocturne-ash">
        <p>A subterranean chamber from the Daedalus Prime ark buried during Terraforming Phase II.</p>
        <p className="mt-4">Said to house a proto-AI consciousness that refused to submit to AAN protocols.</p>
        <BurnReveal reveal="A proto-AI consciousness refused to submit to AAN protocols.">[RUMORED RECORD - CLICK TO BURN]</BurnReveal>
      </DossierSection>
      <DossierSection title="STARGRAVE 9 // ERASED FROM MAPS" color="nocturne-ash">
        <p>A failed colony just outside Titan&apos;s habitable zone. Sealed and bombarded from orbit after an outbreak of catalytic mindburn.</p>
        <p className="mt-4">Survivors&apos; descendants have non-physical powers that AAN can&apos;t explain.</p>
      </DossierSection>
      <DossierNote color="forge-magma">"Vaults Holding Forbidden Tech"</DossierNote>
      <RedactedBlock lines={4} />
    </div>
  )
}
