import styled from 'styled-components/native';

import {verticalScale} from 'utils/scaling';

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
