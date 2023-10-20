import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {IPokemon, IPokemonSpecies} from 'pokeapi-typescript';

import {api} from '../axios.instance';
import {pokemonKeyFactory} from './key-factory';

const fetchPokemon = async ({pageParam}: {pageParam: string}) => {
  const {data} = await api.get(pageParam);
  const {results, next, count} = data;
  return {response: results, nextPage: next, count};
};

export const fetchAllPokemon = async (id: number) =>
  (await api.get<IPokemon>(`/pokemon/${id}`)).data;

export const fetchPokemonDescription = async (id: number) =>
  (await api.get<IPokemonSpecies>(`/pokemon-species/${id}`)).data;

export const useGetPokemon = (id: number) =>
  useQuery({
    queryKey: [...pokemonKeyFactory.pokemon, id],
    queryFn: () => fetchAllPokemon(id),
  });

export const useGetPokemonDescription = (id: number) =>
  useQuery({
    queryKey: [...pokemonKeyFactory.pokemonDescription, id],
    queryFn: () => fetchPokemonDescription(id),
    select: data => {
      const textEntries = data.flavor_text_entries;
      const selectedEntry = textEntries.filter(
        entry => entry.language.name === 'en',
      );
      return {
        description: selectedEntry[0]?.flavor_text || 'N/A',
      };
    },
  });

export const useGetAllPokemon = (limit: number) =>
  useInfiniteQuery({
    queryFn: fetchPokemon,
    queryKey: [...pokemonKeyFactory.allPokemon],
    getNextPageParam: lastPage => lastPage.nextPage,
    initialPageParam: `/pokemon-species?limit=${limit}`,
    select: data => ({
      flattenData: data.pages.flatMap(page => page.response),
      count: data.pages[0]?.count || 0,
    }),
  });
