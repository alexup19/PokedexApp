import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const Container = styled.View`
  flex: 1;
  padding: ${scale(4)}px ${verticalScale(4)}px;
`;

export const ItemSeparator = styled.View`
  height: ${verticalScale(8)}px;
  width: ${scale(8)}px;
`;
