import {TextProps} from 'react-native';
import styled from 'styled-components/native';

import {verticalScale} from 'utils/scaling';

import {Colors} from './colors';

export interface ThemeTextProps extends TextProps {
  align?: string;
  color?: string;
  textTransform?: string;
}

export const Headline = styled.Text<ThemeTextProps>`
  font-family: Poppins;
  font-size: ${verticalScale(24)}px;
  font-weight: 700;
  line-height: ${verticalScale(32)}px;
  letter-spacing: 0px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || Colors.grayscale.white};
  text-transform: ${props => props.textTransform || 'none'};
`;

export const Subtitle1 = styled(Headline)`
  font-size: ${verticalScale(14)}px;
  line-height: ${verticalScale(16)}px;
`;

export const Subtitle2 = styled(Subtitle1)`
  font-size: ${verticalScale(12)}px;
`;

export const Subtitle3 = styled(Subtitle1)`
  font-size: ${verticalScale(10)}px;
`;

export const Caption = styled.Text<ThemeTextProps>`
  font-family: Poppins;
  font-size: ${verticalScale(8)}px;
  font-weight: 400;
  line-height: ${verticalScale(12)}px;
  letter-spacing: 0px;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || Colors.grayscale.white};
  text-transform: ${props => props.textTransform || 'none'};
`;

export const Body1 = styled(Caption)`
  font-size: ${verticalScale(14)}px;
  line-height: ${verticalScale(16)}px;
`;

export const Body2 = styled(Body1)`
  font-size: ${verticalScale(12)}px;
`;

export const Body3 = styled(Body1)`
  font-size: ${verticalScale(10)}px;
`;
