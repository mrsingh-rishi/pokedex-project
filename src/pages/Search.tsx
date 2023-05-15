import React , {useEffect} from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getInitialPokemonData } from '../app/reducers/getinitialPokemonData';
import { getPokemonsData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';
import { debounce } from '../utils/Debounce';

const Search = () => {
  const dispatch = useAppDispatch();
  const handleChange = debounce((value:string) => getPokemon(value), 300);
  const {allPokemon, randomPokemons} = useAppSelector(({pokemon}) => pokemon)
  useEffect(() => {
    dispatch(getInitialPokemonData());
  },[dispatch]);

  useEffect(() => {
    if(allPokemon){
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons.sort(()=>Math.random() - Math.random()).slice(0,20);
      dispatch(getPokemonsData(randomPokemonsId))
    }
  },[allPokemon, dispatch]);

  const getPokemon = async (value : string) => {
    if(value.length ){
      const pokemons = allPokemon?.filter((pokemon) => pokemon.name.includes(value.toLowerCase()));
      dispatch(getPokemonsData(pokemons!));
    }
    else{
      const clonedPokemons = [...(allPokemon as [])];
      const randomPokemonsId = clonedPokemons.sort(()=>Math.random() - Math.random()).slice(0,20);
      dispatch(getPokemonsData(randomPokemonsId))
    }
  }

  return (
    <>
      <div className="search">
        <input type="text" className='pokemon-searchbar' onChange={(e) => handleChange(e.target.value)} placeholder='Search Pokemon'/>
        <PokemonCardGrid pokemons = {randomPokemons!} />
      </div>
    </>
  )
}

export default Wrapper(Search);