import styled from 'styled-components'
import { PokemonTypes } from 'types'

export const CardWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: gray;
`

const getBackgroundColor = (pokemonType: string) => {
  // TODO improve colors and add every type
  switch (pokemonType) {
    case PokemonTypes.Grass:
      return 'green'
    case PokemonTypes.Water:
      return 'blue'
    default:
      return ''
  }
}

export const PokemonSprite = styled.img<{ pokemonType: string }>`
  border-radius: 50%;
  width: 200px;
  height: 200px;

  border: 1px solid black;
  background-color: ${({ pokemonType }) => getBackgroundColor(pokemonType)};
`

export const PokemonInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0;
  margin: 0 25px 0 25px;
`

export const PokemonName = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 150%;
  color: #2f3133;
  margin: 0;
`

export const TypeIcon = styled.img`
  width: 30px;
`
