import './App.css'
import { Pokecard } from 'components'

function App() {
  return (
    <div className="App">
      <Pokecard
        imgUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        pokemon={{ name: 'bulba', type: 'grass', number: 1 }}
      />
    </div>
  )
}

export default App
