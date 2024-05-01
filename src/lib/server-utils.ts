import { toast } from '@/components/ui/use-toast';
import { TPokemon, PokemonAbility, Stat, StatObject } from './types';

export async function getPokemon(name: string) {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  try {
    const res = await fetch(`${apiUrl}/${name}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data for ${name}. Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data, 'data');
    return data;
  } catch (error: any) {
    console.error(error);
    toast({
      title: 'Error',
      description: error.message || `An error occurred while fetching data for ${name}.`,
    });
    return null;
  }
}

export async function getPokemonList() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  try {
    const res = await fetch(`${apiUrl}?limit=151`);
    if (!res.ok) throw new Error('Failed to fetch the Pokémon list.');
    const { results } = await res.json();
    const detailsPromises = results.map((pokemon: TPokemon) =>
      fetch(pokemon.url).then((response) => {
        if (!response.ok) throw new Error(`Failed to fetch details for ${pokemon.name}.`);
        return response.json();
      })
    );
    const detailsResults = await Promise.all(detailsPromises);

    const pokemonWithDetails = results.map((pokemon: TPokemon, index: number) => {
      const detailedInfo = detailsResults[index];
      const statsObject = detailedInfo.stats.reduce((acc: StatObject, statInfo: Stat) => {
        acc[statInfo.stat.name] = statInfo.base_stat;
        return acc;
      }, {} as StatObject);
      const order = detailedInfo.order;
      const weight = detailedInfo.weight;
      const urlSegments = pokemon.url.trim().split('/');
      const id = urlSegments[urlSegments.length - 2];
      const imageDefault = detailedInfo.sprites.other['official-artwork'].front_default;
      const imageShiny = detailedInfo.sprites.other['official-artwork'].front_shiny;

      return {
        ...pokemon,
        id,
        imageDefault,
        imageShiny,
        abilities: detailedInfo.abilities.map((abilityInfo: PokemonAbility) => abilityInfo.ability.name),
        order,
        stats: statsObject,
        weight,
      };
    });
    console.log(pokemonWithDetails);
    return pokemonWithDetails;
  } catch (error: any) {
    console.error(error);
    toast({
      title: 'Error',
      description: error.message || 'An error occurred while fetching Pokémon data.',
      variant: 'destructive',
    });
    return [];
  }
}
