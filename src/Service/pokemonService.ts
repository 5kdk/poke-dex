import axios from 'axios';

const remote = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon/' });

export interface PokemonListResponseType {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export const fetchPokemons = async () => {
  const response = await remote.get<PokemonListResponseType>('');

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

export interface PokemonDetailType {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: string[];
  images: {
    frontDefault: string;
    dreamWorldFront: string;
    officialArtworkFront: string;
  };
  baseStates: {
    name: string;
    value: number;
  }[];
}

export const fetchPokemonsDetail = async (
  name: string
): Promise<PokemonDetailType> => {
  const response = await remote.get<PokemonDetailResponseType>(`${name}`);
  const detail = response.data;

  return {
    id: detail.id,
    name: detail.name,
    height: detail.height / 10,
    weight: detail.weight / 10,
    types: detail.types.map(item => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront:
        detail.sprites.other['official-artwork'].front_default,
    },
    baseStates: detail.stats.map(item => {
      return { name: item.stat.name, value: item.base_stat };
    }),
  };
};
