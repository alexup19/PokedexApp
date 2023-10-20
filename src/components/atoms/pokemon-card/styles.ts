import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import {Colors} from 'theme/colors';
import {Caption} from 'theme/text';
import {verticalScale, scale} from 'utils/scaling';

export const ListItem = styled.TouchableOpacity`
  flex: 1;
  margin: ${verticalScale(4)}px ${scale(4)}px;
  height: ${verticalScale(108)}px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.grayscale.white};
  position: relative;
`;

export const ListItemBottom = styled.View`
  width: 100%;
  height: ${verticalScale(44)}px;
  background-color: ${Colors.grayscale.background};
  border-radius: 8px;
  position: absolute;
  z-index: -999;
  top: ${verticalScale(108 - 44)}px;
`;

export const ListImage = styled(FastImage)`
  width: ${verticalScale(72)}px;
  height: ${verticalScale(72)}px;
`;

export const PokemonNumber = styled(Caption)`
  width: 100%;
  padding-top: ${verticalScale(4)}px;
  padding-right: ${scale(8)}px;
`;

export const styles = StyleSheet.create({
  listItemShadow: {
    shadowColor: Colors.grayscale.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
});
