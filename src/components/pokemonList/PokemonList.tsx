import { useEffect, useState } from 'react'
import { Pokecard } from 'components'
import { getPokemon } from 'api'
import { Pokemon } from 'types'
import { Wrapper } from './PokemonList.styles'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Array<Pokemon | undefined>>([])

  useEffect(() => {
    const getPkm = async () => {
      const numberOfPokemons = 151
      const arrayWithNelements = Array.from(Array(numberOfPokemons).keys())

      const pokes = await Promise.all(
        arrayWithNelements.map(async (id) => getPokemon(id + 1))
      )
      setPokemons(pokes)
    }

    getPkm()
  }, [])

  return (
    <Wrapper>
      {pokemons.map((pokemon: any) => {
        return <Pokecard key={pokemon.order} pokemon={pokemon} />
      })}
    </Wrapper>
  )
}

export { PokemonList }
