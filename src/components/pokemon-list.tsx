import { TPokemon } from '@/lib/types';
import PokemonCard from './pokemon-card';
import usePokemonCollectedStatuses from '@/hooks/usePokemonCollectedStatuses';
import { useMemo, useState } from 'react';
import { PaginationControls } from './pagination-controls';

type PokemonListProps = {
  pokemonList: TPokemon[];
};

export default function PokemonList({ pokemonList }: PokemonListProps) {
  const collectedStatuses = usePokemonCollectedStatuses(pokemonList);

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(pokemonList.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentPokemonList = useMemo(() => {
    return pokemonList.slice(indexOfFirstItem, indexOfLastItem);
  }, [indexOfFirstItem, indexOfLastItem, pokemonList]);

  return (
    <>
      <div className="mb-32 w-full gap-x-12 gap-y-9 grid text-center lg:mb-0 md:grid-cols-2 lg:grid-cols-3 lg:text-left">
        {currentPokemonList.map((pokemon, i) => (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            abilities={pokemon.abilities}
            imageDefault={pokemon.imageDefault}
            imageShiny={pokemon.imageShiny}
            id={pokemon.id}
            order={pokemon.order}
            stats={pokemon.stats}
            weight={pokemon.weight}
            isCollected={collectedStatuses[i]}
          />
        ))}
      </div>
      {pokemonList.length > 0 && <PaginationControls prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} />}
    </>
  );
}
