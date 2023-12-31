import React from 'react';

import Config from 'react-native-config';

import {Colors} from 'theme/colors';
import {Body3} from 'theme/text';

import {
  ListImage,
  ListItem,
  ListItemBottom,
  styles,
  PokemonNumber,
} from './styles';
import {PokemonCardProps} from './types';

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  onPress,
  id,
  count,
}) => (
  <ListItem style={styles.listItemShadow} onPress={() => onPress(id, count)}>
    <PokemonNumber color={Colors.grayscale.medium} align="right">
      #{id.padStart(3, '0')}
    </PokemonNumber>
    <ListImage
      source={{
        uri: `${Config.IMAGE_URL}/${id}.png`,
      }}
    />
    <ListItemBottom />
    <Body3
      color={Colors.grayscale.dark}
      align="center"
      textTransform="capitalize">
      {pokemon.name}
    </Body3>
  </ListItem>
);
