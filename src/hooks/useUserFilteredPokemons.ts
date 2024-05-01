'use client';
import { getPokemonList } from '@/lib/server-utils';
import { TPokemon } from '@/lib/types';
import React, { useEffect, useState } from 'react';

function useUserFilteredPokemons() {
  const [filteredPokemonList, setFilteredPokemonList] = useState<TPokemon[]>([]);
  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonList = await getPokemonList();
      const collectedPokemons = JSON.parse(localStorage.getItem('collectedPokemons') || '[]');

      const filteredList = pokemonList.filter((pokemon: TPokemon) => collectedPokemons.includes(pokemon.id));
      setFilteredPokemonList(filteredList);
    };
    fetchPokemonList();
  }, []);

  return filteredPokemonList;
}

export default useUserFilteredPokemons;
