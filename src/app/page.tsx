import { getPokemonList } from '@/lib/server-utils';
import Container from '@/components/container';

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <>
      <Container pokemonList={pokemonList} />
    </>
  );
}
