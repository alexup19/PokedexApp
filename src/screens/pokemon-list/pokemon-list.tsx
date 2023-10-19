import React from 'react';

import {StatusBar} from 'react-native';

import {RouteNames} from 'navigation/route-names';
import {Colors} from 'theme/colors';

import {SafeArea} from 'atoms';

import {Header, List} from './components';
import {Container} from './styles';
import {PokemonListScreenProps} from './types';

export const PokemonListScreen: React.FC<PokemonListScreenProps> = ({
  navigation,
}) => {
  const goToPokemonScreen = (pokemonId: string, pokemonCount: number) =>
    navigation.navigate(RouteNames.pokemon, {pokemonId, pokemonCount});

  return (
    <SafeArea backgroundColor={Colors.identity.primary}>
      <Container>
        <StatusBar animated={true} barStyle="light-content" />
        <Header />
        <List goToPokemonScreen={goToPokemonScreen} />
      </Container>
    </SafeArea>
  );
};
