import React, {useState} from 'react';

import {StatusBar} from 'react-native';

import Config from 'react-native-config';
import {IPokemonType} from 'pokeapi-typescript';

import {useGetPokemon, useGetPokemonDescription} from 'api/pokemon/get-pokemon';
import {Body3, Headline, Subtitle1, Subtitle2, Subtitle3} from 'theme/text';
import {Colors, getTypeColor} from 'theme/colors';
import {verticalScale} from 'utils/scaling';

import {SafeArea} from 'atoms';
import {LeftArrow, PokeballIcon, RightArrowIcon} from 'icons';

import {BaseStats, About} from './components';
import {
  Body,
  Container,
  Header,
  BackButton,
  TextContainer,
  Divider,
  Background,
  Image,
  CapsuleContainer,
  TypeCapsule,
  NavigationButton,
  NavigationView,
} from './styles';
import {PokemonScreenProps} from './types';

const formatText = (textToFormat: string = 'N/A') =>
  textToFormat.replaceAll('\n', ' ').replace('\f', ' ');

export const PokemonScreen: React.FC<PokemonScreenProps> = ({
  navigation,
  route,
}) => {
  const {pokemonId, pokemonCount} = route.params;
  const [dexNumber, setDexNumber] = useState(Number(pokemonId));

  const {data: pokemon} = useGetPokemon(dexNumber);
  const {data: descriptionData} = useGetPokemonDescription(dexNumber);

  const goBack = () => navigation.goBack();

  if (pokemon === undefined || descriptionData === undefined) {
    return (
      <SafeArea backgroundColor={getTypeColor('')}>
        <Container>
          <StatusBar barStyle="light-content" />
          <Background>
            <PokeballIcon
              width={verticalScale(208)}
              height={verticalScale(208)}
              color={`${Colors.grayscale.white}10`}
            />
          </Background>
          <Header>
            <BackButton onPress={goBack}>
              <LeftArrow />
            </BackButton>
          </Header>
        </Container>
      </SafeArea>
    );
  }

  const backgroundColor = getTypeColor(pokemon.types[0]?.type.name);

  return (
    <SafeArea backgroundColor={backgroundColor}>
      <Container>
        <StatusBar barStyle="light-content" />
        <Background>
          <PokeballIcon
            width={verticalScale(208)}
            height={verticalScale(208)}
            color={`${Colors.grayscale.white}10`}
          />
        </Background>
        <Image
          source={{
            uri: `${Config.IMAGE_URL}/${pokemon.id}.png`,
          }}
        />
        <Header>
          <BackButton onPress={goBack}>
            <LeftArrow />
          </BackButton>
          <TextContainer>
            <Headline color={Colors.grayscale.white} textTransform="capitalize">
              {pokemon.name}
            </Headline>
            <Subtitle2 color={Colors.grayscale.white}>
              #{pokemon.id.toString().padStart(3, '0')}
            </Subtitle2>
          </TextContainer>
        </Header>
        <Divider>
          {dexNumber - 1 > 0 ? (
            <NavigationButton
              onPress={() => setDexNumber(dexNumber - 1)}
              style={{
                transform: [{scaleX: -1}],
              }}>
              <RightArrowIcon />
            </NavigationButton>
          ) : (
            <NavigationView />
          )}
          {dexNumber + 1 <= pokemonCount ? (
            <NavigationButton onPress={() => setDexNumber(dexNumber + 1)}>
              <RightArrowIcon />
            </NavigationButton>
          ) : (
            <NavigationView />
          )}
        </Divider>
        <Body>
          <CapsuleContainer>
            {pokemon.types.map((creature: IPokemonType) => (
              <TypeCapsule
                color={getTypeColor(creature.type.name)}
                key={creature.type.name}>
                <Subtitle3 textTransform="capitalize">
                  {creature.type.name}
                </Subtitle3>
              </TypeCapsule>
            ))}
          </CapsuleContainer>
          <Subtitle1 color={backgroundColor} align="center">
            About
          </Subtitle1>
          <About
            height={pokemon.height}
            weight={pokemon.weight}
            moves={pokemon.abilities.map(move => move.ability.name)}
          />
          <Body3 align="justify" color={Colors.grayscale.dark}>
            {formatText(descriptionData.description)}
          </Body3>
          <Subtitle1 color={backgroundColor} align="center">
            Base Stats
          </Subtitle1>
          <BaseStats stats={pokemon.stats} themeColor={backgroundColor} />
        </Body>
      </Container>
    </SafeArea>
  );
};
