import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {Colors} from 'theme/colors';
import {verticalScale} from 'utils/scaling';

import {LeftArrow} from 'icons';

import {Header, BackButton, Divider} from '../../styles';
import {PlaceholderProps} from './types';

export const Placeholder: React.FC<PlaceholderProps> = ({goBack}) => (
  <>
    <Header>
      <BackButton onPress={goBack}>
        <LeftArrow />
      </BackButton>
    </Header>
    <Divider />
    <SkeletonPlaceholder
      backgroundColor={Colors.grayscale.white}
      borderRadius={8}
      highlightColor={Colors.grayscale.default}>
      <SkeletonPlaceholder.Item
        width="100%"
        height={verticalScale(390)}
        marginBottom={verticalScale(70)}
      />
    </SkeletonPlaceholder>
  </>
);
