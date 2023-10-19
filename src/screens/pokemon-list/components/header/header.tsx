import React from 'react';

import {Headline} from 'theme/text';
import {Colors} from 'theme/colors';

import {PokeballIcon, FilterIcon, SearchIcon} from 'icons';

import {
  FilterButton,
  ListHeader,
  SearchBar,
  SearchContainer,
  SearchInput,
  TitleContainer,
} from './styles';

export const Header: React.FC = () => (
  <ListHeader>
    <TitleContainer>
      <PokeballIcon color={Colors.grayscale.white} />
      <Headline>Pokédex</Headline>
    </TitleContainer>
    <SearchContainer>
      <SearchBar>
        <SearchIcon />
        <SearchInput
          placeholderTextColor={Colors.grayscale.medium}
          placeholder="Search"
        />
      </SearchBar>
      <FilterButton>
        <FilterIcon />
      </FilterButton>
    </SearchContainer>
  </ListHeader>
);
