import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PokemonListScreen, PokemonScreen} from 'screens';

import {RouteNames} from './route-names';

export type AppStackParamList = {
  PokemonList: undefined;
  Pokemon: {pokemonId: string; pokemonCount: number};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={RouteNames.pokemonList} component={PokemonListScreen} />
    <Stack.Screen name={RouteNames.pokemon} component={PokemonScreen} />
  </Stack.Navigator>
);
