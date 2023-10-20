import {Dimensions} from 'react-native';

import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import {verticalScale, scale} from 'utils/scaling';
import {Colors} from 'theme/colors';

import {TypeCapsuleProps} from './types';

const windowWidth = Dimensions.get('window').width;

export const Body = styled.View`
  width: 100%;
  background-color: ${Colors.grayscale.white};
  flex: 1;
  border-radius: 8px;
  border: 1px rgba(0, 0, 0, 0.25);
  margin-bottom: ${verticalScale(70)}px;
`;

export const BodyContainer = styled.View`
  gap: ${verticalScale(16)}px;
  padding: ${verticalScale(56)}px ${scale(20)}px ${verticalScale(20)}px
    ${scale(20)}px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  position: relative;
  padding: ${scale(4)}px ${verticalScale(4)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  gap: ${scale(8)}px;
  justify-content: space-between;
  padding: ${verticalScale(20)}px ${scale(20)}px ${verticalScale(24)}px
    ${scale(20)}px;
`;

export const BackButton = styled.TouchableOpacity`
  height: ${verticalScale(32)}px;
  width: ${verticalScale(32)}px;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px ${scale(20)}px ${verticalScale(16)}px ${scale(20)}px;
  flex-direction: row;
  height: ${verticalScale(144)}px;
`;

export const Background = styled.View`
  position: absolute;
  height: ${verticalScale(208)}px;
  width: ${verticalScale(208)}px;
  justify-content: center;
  align-items: center;
  right: ${scale(8)}px;
  top: ${verticalScale(8)}px;
`;

export const Image = styled(FastImage)`
  width: ${verticalScale(200)}px;
  height: ${verticalScale(200)}px;
  position: absolute;
  top: ${verticalScale(80)}px;
  z-index: 9999;
  left: ${(windowWidth - verticalScale(200)) / 2}px;
`;

export const CapsuleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: ${scale(16)}px;
`;

export const TypeCapsule = styled.View<TypeCapsuleProps>`
  height: ${verticalScale(20)}px;
  padding: ${verticalScale(2)}px ${scale(8)}px ${verticalScale(2)}px
    ${scale(8)}px;
  background-color: ${props => props.color || Colors.grayscale.medium};
  border-radius: 10px;
`;

export const NavigationButton = styled.TouchableOpacity`
  width: ${verticalScale(24)}px;
  height: ${verticalScale(24)}px;
  justify-content: center;
  align-items: center;
`;

export const NavigationView = styled.View`
  width: ${verticalScale(24)}px;
  height: ${verticalScale(24)}px;
`;
