import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'navigation/stack-navigator';

import {RouteNames} from 'navigation/route-names';

export type PokemonListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  RouteNames.pokemonList
>;
