export type PokemonData = {
  count: number;
  next: string;
  previous: string;
  results: Array<{ name: string; url: string }>;
};

export type TPokemon = {
  name: string;
  url: string;
  imageDefault: string;
  imageShiny: string;
  abilities: string[];
  id: number;
  order: number;
  stats: StatObject;
  weight: number;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type StatObject = {
  [key: string]: number;
};

type Ability = {
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
};

export type PokemonAbility = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

export type PokemonAbilities = PokemonAbility[];
