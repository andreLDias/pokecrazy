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
  imgUrl: string
  shinyImgUrl?: string
  pokemon: Pokemon
}

const Pokecard: FunctionComponent<PokecardProps> = ({
  imgUrl,
  shinyImgUrl,
  pokemon,
}) => {
  return (
    <CardWrapper>
      <PokemonSprite src={imgUrl} pokemonType={pokemon.type} />
      {shinyImgUrl && (
        <PokemonSprite src={shinyImgUrl} pokemonType={pokemon.type} />
      )}
      <PokemonInfoWrapper>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypeIcon src={iconGetter(pokemon)} />
      </PokemonInfoWrapper>
    </CardWrapper>
  )
}

export { Pokecard }
