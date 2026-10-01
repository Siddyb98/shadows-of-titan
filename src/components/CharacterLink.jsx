import { Link } from 'react-router-dom'
import characters from '../data/characters.json'

export default function CharacterLink({ id }) {
  const character = characters.find((entry) => entry.id === id)
  if (!character) return null

  return (
    <Link className="character-link" to={`/archives#${id}`} title={character.summary}>
      {character.name}
    </Link>
  )
}
