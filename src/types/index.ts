export interface Pokemon {
  name: string
  type: string
  order: number
  sprites: {
    default: string
    shiny?: string
  }
}

export enum PokemonTypes {
  Grass = 'grass',
  Water = 'water',
  Fire = 'fire',
  Bug = 'bug',
}
