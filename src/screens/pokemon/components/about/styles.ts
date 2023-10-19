import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

export const AboutContainer = styled.View`
  width: 100%;
  height: ${verticalScale(48)}px;
  flex-direction: row;
`;

export const AboutCard = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const AboutInfoContainer = styled.View`
  margin-top: ${verticalScale(8)}px;
  flex-direction: row;
  align-items: center;
  gap: ${scale(8)}px;
`;

export const AboutDivider = styled.View`
  height: 100%;
  width: ${scale(1)}px;
  background-color: ${Colors.grayscale.light};
`;
