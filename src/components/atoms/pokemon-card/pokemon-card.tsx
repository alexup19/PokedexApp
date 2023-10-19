import React from 'react';

import Config from 'react-native-config';

import {Colors} from 'theme/colors';
import {Caption, Body3} from 'theme/text';

import {ListImage, ListItem, ListItemBottom, styles} from './styles';
import {PokemonCardProps} from './types';

export const PokemonCard = ({
  pokemon,
  onPress,
  id,
  count,
}: {
  pokemon: PokemonCardProps;
  onPress: (itemId: string, count: number) => void;
  id: string;
  count: number;
}) => (
  <ListItem style={styles.listItemShadow} onPress={() => onPress(id, count)}>
    <Caption color={Colors.grayscale.medium} align="right">
      #{id.padStart(3, '0')}
    </Caption>
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
