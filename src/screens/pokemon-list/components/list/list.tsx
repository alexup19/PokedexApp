import React, {useState} from 'react';

import {FlashList} from '@shopify/flash-list';

import {useGetAllPokemon} from 'api/pokemon/';
import {scale} from 'utils/scaling';
import {Colors} from 'theme/colors';

import {PokemonCard} from 'atoms';

import {Placeholder} from '../';
import {Footer, LoadingSpinner, Body, styles} from './styles';
import {ListItemProps, ListProps} from './types';

const getSubstring = (startStr: string, endStr: string, str: string) => {
  let pos = str.indexOf(startStr) + startStr.length;
  return str.substring(pos, str.indexOf(endStr, pos));
};

const getPokemonId = (url: string) =>
  getSubstring('/pokemon-species/', '/', url);

export const List: React.FC<ListProps> = ({goToPokemonScreen}) => {
  const [limit] = useState(90);

  const {isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useGetAllPokemon(limit);

  const _keyExtractor = (item: ListItemProps) => item.url;

  const _renderItem = ({item}: {item: ListItemProps}) => (
    <PokemonCard
      pokemon={item}
      onPress={goToPokemonScreen}
      id={getPokemonId(item.url)}
      count={data?.count}
    />
  );

  const _onEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const _listFooterComponent = () => {
    if (hasNextPage) {
      return (
        <Footer>
          <LoadingSpinner color={Colors.identity.primary} />
        </Footer>
      );
    }
    return <></>;
  };

  return (
    <Body>
      {isLoading || data === undefined ? (
        <Placeholder />
      ) : (
        <FlashList
          numColumns={3}
          data={data.flattenData}
          renderItem={_renderItem}
          contentContainerStyle={styles.listContentContainer}
          keyExtractor={_keyExtractor}
          showsVerticalScrollIndicator={false}
          onEndReached={_onEndReached}
          onEndReachedThreshold={0.5}
          estimatedItemSize={scale(108 + 8)}
          ListFooterComponent={_listFooterComponent}
        />
      )}
    </Body>
  );
};
