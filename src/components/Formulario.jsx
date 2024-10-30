import {useState, useEffec} from 'react';

function Formulario() {
    const [search, setSearch] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffec(() => {
        const fetchPokemon = async () => {
            if(search === '') {
                setPokemonData(null);
                setError('')
                return;
            }
        }   
    })
}



export default Formulario