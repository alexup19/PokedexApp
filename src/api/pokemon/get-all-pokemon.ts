import {useInfiniteQuery} from '@tanstack/react-query';

import {api} from '../axios.instance';
import {pokemonKeyFactory} from './key-factory';

const fetchPokemon = async ({pageParam}: {pageParam: string}) => {
  const {data} = await api.get(pageParam);
  const {results, next, count} = data;
  return {response: results, nextPage: next, count};
};

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
