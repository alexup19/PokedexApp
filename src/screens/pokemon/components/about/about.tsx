import React from 'react';

import {WeightIcon, RulerIcon} from 'icons';

import {Body3, Caption} from 'theme/text';
import {Colors} from 'theme/colors';

import {
  AboutContainer,
  AboutCard,
  AboutInfoContainer,
  AboutDivider,
} from './styles';
import {AboutProps} from './types';

const humanize = (str: string) => {
  return str
    .split('-')
    .map(newStr => newStr.charAt(0).toUpperCase() + newStr.slice(1))
    .join(' ');
};

export const About: React.FC<AboutProps> = ({weight, height, moves}) => (
  <AboutContainer>
    <AboutCard>
      <AboutInfoContainer>
        <WeightIcon />
        <Body3 color={Colors.grayscale.dark}>{weight / 10 || '9,9'} kg</Body3>
      </AboutInfoContainer>
      <Caption color={Colors.grayscale.medium} align="center">
        Weight
      </Caption>
    </AboutCard>
    <AboutDivider />
    <AboutCard>
      <AboutInfoContainer>
        <RulerIcon />
        <Body3 color={Colors.grayscale.dark}>{height / 10 || '9,9'} m</Body3>
      </AboutInfoContainer>
      <Caption color={Colors.grayscale.medium} align="center">
        Height
      </Caption>
    </AboutCard>
    <AboutDivider />
    <AboutCard>
      <Body3 color={Colors.grayscale.dark}>{humanize(moves[0])}</Body3>
      <Body3 color={Colors.grayscale.dark}>{humanize(moves[1] || 'N/A')}</Body3>
      <Caption color={Colors.grayscale.medium} align="center">
        Abilities
      </Caption>
    </AboutCard>
  </AboutContainer>
);
