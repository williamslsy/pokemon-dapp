'use client';
import Container from '@/components/container';
import useUserFilteredPokemons from '@/hooks/useUserFilteredPokemons';

export default function MyPokemons() {
  const filteredPokemonList = useUserFilteredPokemons();

  return (
    <>
      <Container pokemonList={filteredPokemonList} />
    </>
  );
}
