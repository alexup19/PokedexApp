import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {Subtitle3} from 'theme/text';

import {verticalScale, scale} from 'utils/scaling';

export const StatItem = styled.View`
  width: 100%;
  flex-direction: row;
  gap: ${verticalScale(8)}px;
`;

export const StatInfoContainer = styled.View`
  flex-direction: row;
  gap: ${verticalScale(8)}px;
  align-items: center;
`;

export const StatTitle = styled(Subtitle3)`
  width: ${scale(31)}px;
`;

export const StatDivider = styled.View`
  background-color: ${Colors.grayscale.light};
  height: 100%;
  width: ${scale(1)}px;
`;
