import { Pokemon, PokemonTypes } from 'types'
import grassIcon from '../../images/pokemonTypes/grassIcon.png'
import waterIcon from '../../images/pokemonTypes/waterIcon.png'
import fireIcon from '../../images/pokemonTypes/fireIcon.png'
import bugIcon from '../../images/pokemonTypes/bugIcon.png'

export const iconGetter = (pokemon: Pokemon) => {
  switch (pokemon.type) {
    case PokemonTypes.Grass:
      return grassIcon
    case PokemonTypes.Water:
      return waterIcon
    case PokemonTypes.Fire:
      return fireIcon
    case PokemonTypes.Bug:
      return bugIcon
    default:
      return ''
  }
}
