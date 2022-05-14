import { Pokemon, PokemonTypes } from 'types'
import grassIcon from '../../images/pokemonTypes/grassIcon.png'
import waterIcon from '../../images/pokemonTypes/waterIcon.png'

export const iconGetter = (pokemon: Pokemon) => {
  switch (pokemon.type) {
    case PokemonTypes.Grass:
      return grassIcon
    case PokemonTypes.Water:
      return waterIcon
    default:
      return ''
  }
}
