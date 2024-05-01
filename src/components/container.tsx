'use client';
import React, { useEffect, useState } from 'react';
import { TPokemon } from '@/lib/types';
import SearchBar from './search-bar';
import PokemonList from './pokemon-list';

type PokemonListProps = {
  pokemonList: TPokemon[];
};

function Container({ pokemonList }: PokemonListProps) {
  const [searchText, setSearchText] = useState('');
  const [filteredPokemonList, setFilteredPokemonList] = useState<TPokemon[]>(pokemonList);
  const handleFilterPokemonList = () => {
    const filteredPokemonList = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredPokemonList(filteredPokemonList);
  };

  useEffect(() => {
    if (searchText === '') {
      setFilteredPokemonList(pokemonList);
      return;
    }
  }, [searchText, pokemonList]);

  return (
    <>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleFilterList={handleFilterPokemonList} pokemonList={pokemonList} />
      <PokemonList pokemonList={filteredPokemonList} />
    </>
  );
}

export default Container;
