import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'navigation/stack-navigator';

import {RouteNames} from 'navigation/route-names';

export type PokemonScreenProps = NativeStackScreenProps<
  AppStackParamList,
  RouteNames.pokemon
>;

export type Stat = {
  name: string;
  value: number;
  maxValue: number;
};

export type TypeCapsuleProps = {
  color: string;
};
