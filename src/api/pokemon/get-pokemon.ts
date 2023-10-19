import {useQuery} from '@tanstack/react-query';
import {IPokemon, IPokemonSpecies} from 'pokeapi-typescript';

import {api} from '../axios.instance';
import {pokemonKeyFactory} from './key-factory';

export const fetchPokemon = async (id: number) =>
  (await api.get<IPokemon>(`/pokemon/${id}`)).data;

export const fetchPokemonDescription = async (id: number) =>
  (await api.get<IPokemonSpecies>(`/pokemon-species/${id}`)).data;

export const useGetPokemon = (id: number) =>
  useQuery({
    queryKey: [...pokemonKeyFactory.pokemon, id],
    queryFn: () => fetchPokemon(id),
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
