import { getPokemon } from '@/lib/server-utils';
import Image from 'next/image';

export default async function PokemonPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const pokemon = await getPokemon(slug);

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">{pokemon.name}</h1>
      <Image src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} width={200} height={200} />
    </>
  );
}
