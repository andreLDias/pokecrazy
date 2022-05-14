import { Pokemon, PokemonTypes } from 'types'
import grassIcon from '../../images/pokemonTypes/grassIcon.png'
import waterIcon from '../../images/pokemonTypes/waterIcon.png'

export const iconGetter = (pokemon: Pokemon) => {
  if (pokemon.type === PokemonTypes.Grass) return grassIcon
  if (pokemon.type === PokemonTypes.Water) return waterIcon
}
