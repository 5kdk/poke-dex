import axios from 'axios';

const remote = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });

export interface PokemonListResponseType {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export const fetchPokemons = async () => {
  const response = await remote.get<PokemonListResponseType>('pokemon');

  return response.data;
};

interface PokemonDetailResponseType {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface pokemonSpeciesResponseType {
  color: {
    name: string;
  };
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
}

export interface PokemonDetailType {
  id: number;
  weight: number;
  height: number;
  name: string;
  koreanName: string;
  color: string;
  types: string[];
  images: {
    frontDefault: string;
    dreamWorldFront: string;
    officialArtworkFront: string;
  };
  baseStats: {
    name: string;
    value: number;
  }[];
}

export const fetchPokemonsDetail = async (
  name: string
): Promise<PokemonDetailType> => {
  const pokemonDetailUrl = `pokemon/${name}`;
  const pokemonSpeciesUrl = `pokemon-species/${name}`;

  const response = await remote.get<PokemonDetailResponseType>(
    pokemonDetailUrl
  );
  const speciesResponse = await remote.get<pokemonSpeciesResponseType>(
    pokemonSpeciesUrl
  );

  const detail = response.data;
  const species = speciesResponse.data;
  console.log(species);

  return {
    id: detail.id,
    name: detail.name,
    koreanName:
      species.names.find(item => item.language.name === 'ko')?.name ??
      detail.name,
    color: species.color.name,
    height: detail.height / 10,
    weight: detail.weight / 10,
    types: detail.types.map(item => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront:
        detail.sprites.other['official-artwork'].front_default,
    },
    baseStats: detail.stats.map(item => {
      return { name: item.stat.name, value: item.base_stat };
    }),
  };
};
