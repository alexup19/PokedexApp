import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

export const Body = styled.View`
  background-color: ${Colors.grayscale.white};
  flex: 1;
  border-radius: 8px;
  border: 1px ${Colors.grayscale.dark}25;
`;

export const Footer = styled.View`
  height: ${verticalScale(60)}px;
`;

export const LoadingSpinner = styled.ActivityIndicator`
  flex: 1;
`;

export const styles = StyleSheet.create({
  listContentContainer: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: scale(8),
  },
});
