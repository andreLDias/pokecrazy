import axios from 'axios'
import { Pokemon } from 'types'

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
const api = axios.create({ baseURL })

export const getPokemon = async (id: number) => {
  try {
    const { data } = await api.get(id.toString())

    return {
      name: data.name,
      type: data.types[0].type.name,
      order: data.order,
      sprites: {
        default: data.sprites.front_default,
        shiny: data.sprites.front_shiny,
      },
    } as Pokemon
  } catch (_err) {
    return undefined
  }
}
