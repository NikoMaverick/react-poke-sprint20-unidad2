import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [inputName, setinputName] = useState('')
  const [dataPokemon, setDataPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getPokemon = async (pokemon) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
      
      if(!response.ok) {
        throw new Error(`Pokemon no encontrado ${response.status}`) 
      }
      const data = await response.json()
      
      setDataPokemon(data)
      setError(null)
      
    } catch (err) {
      setDataPokemon(null)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    if(inputName !== '') {
      setLoading(true)
    }
    const delay = setTimeout(() => {
      getPokemon(inputName)
    }, 500)

    return () => clearTimeout(delay)
  }, [inputName])

  return (
  <>
    <form>
      <input 
        type='text'
        value={inputName}
        onChange={(e) => setinputName(e.target.value)}
        placeholder='Introduce el nombre del pokemon'
      />
    </form>
    {loading && <div className='spinner'></div>}
    {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
    {dataPokemon && (
      <>
        <h1>{dataPokemon.name}</h1>
        <img src={dataPokemon.sprites?.front_default} alt={dataPokemon.name} />
      </>
    )}
  </>
  ) 
}



export default App;

