import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const Container = styled.View`
  flex: 1;
  margin-top: ${verticalScale(24)}px;
`;

export const placeholderStyles = StyleSheet.create({
  placeholderRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(8),
    marginBottom: verticalScale(8),
  },
});
