import { useState } from 'react'
import characters from '../data/characters.json'

export default function CharacterDossier({ id = 'nyx' }) {
  const [isDeclassified, setIsDeclassified] = useState(false)
  const character = characters.find((entry) => entry.id === id) ?? characters[0]

  return (
    <article className="dossier">
      <div className="dossier__topline">
        <span>PERSONNEL FILE / {character.classification}</span>
        <span className="dossier__status"><i /> {character.status}</span>
      </div>
      <div className="dossier__body">
        <div className="dossier__portrait" aria-label={`${character.name} silhouette`}>
          <div className="portrait-grid" />
          <div className="portrait-mark">NV</div>
          <span>IMAGE WITHHELD</span>
        </div>
        <div className="dossier__copy">
          <p className="eyebrow">Subject / 01</p>
          <h2>{character.name}</h2>
          <p className="dossier__role">{character.role}</p>
          <p className="dossier__summary">{character.summary}</p>
          <div className="dossier__facts">
            <div><span>ORIGIN</span><strong>{character.origin}</strong></div>
            <div><span>AFFILIATION</span><strong>{character.affiliation}</strong></div>
          </div>
          <blockquote>“{character.quote}”</blockquote>
        </div>
      </div>
      <div className="dossier__bottomline">
        <button className="declassify-button" onClick={() => setIsDeclassified((value) => !value)}>
          <span>{isDeclassified ? 'RECLASSIFY FILE' : 'DECLASSIFY MORE'}</span>
          <b>{isDeclassified ? '−' : '+'}</b>
        </button>
        <audio controls preload="none" src={character.voiceLine} aria-label={`Voice line from ${character.name}`} />
      </div>
      {isDeclassified && (
        <div className="dossier__secret">
          <span className="secret-label">EYES ONLY / OVERRIDE ACCEPTED</span>
          <p>{character.secret}</p>
        </div>
      )}
    </article>
  )
}
