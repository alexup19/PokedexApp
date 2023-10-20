import React from 'react';

import {View} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {Colors} from 'theme/colors';
import {verticalScale} from 'utils/scaling';

import {Container, placeholderStyles} from './styles';

export const PlaceholderRow = () => (
  <SkeletonPlaceholder
    backgroundColor={Colors.grayscale.white}
    borderRadius={8}
    highlightColor={Colors.grayscale.default}>
    <View style={placeholderStyles.placeholderRow}>
      <SkeletonPlaceholder.Item
        width={verticalScale(108)}
        height={verticalScale(108)}
      />
      <SkeletonPlaceholder.Item
        width={verticalScale(108)}
        height={verticalScale(108)}
      />
      <SkeletonPlaceholder.Item
        width={verticalScale(108)}
        height={verticalScale(108)}
      />
    </View>
  </SkeletonPlaceholder>
);

export const Placeholder = () => (
  <Container>
    <PlaceholderRow />
    <PlaceholderRow />
    <PlaceholderRow />
    <PlaceholderRow />
  </Container>
);
