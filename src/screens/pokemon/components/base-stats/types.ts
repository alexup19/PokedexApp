import {IPokemonStat} from 'pokeapi-typescript';

export type BaseStat = {
  name: string;
  value: number;
};

export type BaseStatItem = {
  item: BaseStat;
  themeColor: string;
};

export type BaseStatsProps = {
  stats: IPokemonStat[];
  themeColor: string;
};
