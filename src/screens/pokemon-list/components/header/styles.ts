import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';
import {Colors} from 'theme/colors';

export const FilterButton = styled.TouchableOpacity`
  width: ${verticalScale(32)}px;
  height: ${verticalScale(32)}px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.grayscale.white};
  border-radius: 100px;
  border: 1px rgba(0, 0, 0, 0.25);
`;

export const ListHeader = styled.View`
  width: 100%;
  padding: ${verticalScale(12)}px ${scale(12)}px ${verticalScale(24)}px
    ${scale(12)}px;
  gap: ${verticalScale(8)}px;
`;

export const SearchBar = styled.View`
  width: ${scale(280)}px;
  height: 100%;
  border-radius: 16px;
  background-color: ${Colors.grayscale.white};
  align-items: center;
  padding: 0px ${scale(16)}px 0px ${scale(12)}px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${scale(8)}px;
  border: 1px ${Colors.grayscale.dark}25;
`;

export const SearchInput = styled.TextInput`
  font-family: Poppins;
  font-size: ${verticalScale(10)}px;
  font-weight: 400;
  color: ${Colors.grayscale.dark};
  flex: 1;
  height: 100%;
`;

export const SearchContainer = styled.View`
  width: 100%;
  height: ${verticalScale(32)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: ${verticalScale(32)}px;
  flex-direction: row;
  align-items: center;
  gap: ${scale(16)}px;
`;
