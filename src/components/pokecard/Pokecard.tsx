import { iconGetter } from 'helpers'
import { FunctionComponent } from 'react'
import { Pokemon } from 'types'
import {
  PokemonSprite,
  PokemonName,
  CardWrapper,
  TypeIcon,
  PokemonInfoWrapper,
} from './Pokecard.styles'

interface PokecardProps {
  pokemon?: Pokemon
}

const Pokecard: FunctionComponent<PokecardProps> = ({ pokemon }) => {
  if (!pokemon) return null

  return (
    <CardWrapper>
      <PokemonSprite src={pokemon.sprites.default} pokemonType={pokemon.type} />
      {/* {pokemon.sprites.shiny && (
        <PokemonSprite src={pokemon.sprites.shiny} pokemonType={pokemon.type} />
      )} */}
      <PokemonInfoWrapper>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypeIcon src={iconGetter(pokemon)} />
      </PokemonInfoWrapper>
    </CardWrapper>
  )
}

export { Pokecard }
