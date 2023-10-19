import React from 'react';

import {FlatList} from 'react-native';

import * as Progress from 'react-native-progress';

import {verticalScale} from 'utils/scaling';
import {Body3} from 'theme/text';
import {Colors} from 'theme/colors';

import {StatDivider, StatInfoContainer, StatItem, StatTitle} from './styles';
import {BaseStat, BaseStatItem, BaseStatsProps} from './types';

const Stat: React.FC<BaseStatItem> = ({item, themeColor}) => (
  <StatItem>
    <StatTitle color={themeColor || Colors.grayscale.dark} align="right">
      {item.name}
    </StatTitle>
    <StatDivider />
    <StatInfoContainer>
      <Body3 color={Colors.grayscale.dark}>{item.value}</Body3>
      <Progress.Bar
        progress={item.value / 255}
        width={233}
        height={verticalScale(4)}
        color={themeColor}
        borderWidth={0}
        unfilledColor={`${themeColor}20`}
      />
    </StatInfoContainer>
  </StatItem>
);

export const BaseStats: React.FC<BaseStatsProps> = ({stats, themeColor}) => {
  const statsData = [
    {
      name: 'HP',
      value: stats[0]?.base_stat || 0,
    },
    {
      name: 'ATK',
      value: stats[1]?.base_stat || 0,
    },
    {
      name: 'DEF',
      value: stats[2]?.base_stat || 0,
    },
    {
      name: 'SATK',
      value: stats[3]?.base_stat || 0,
    },
    {
      name: 'SDEF',
      value: stats[4]?.base_stat || 0,
    },
    {
      name: 'SPD',
      value: stats[5]?.base_stat || 0,
    },
  ];

  const _renderItem = ({item}: {item: BaseStat}) => (
    <Stat item={item} themeColor={themeColor} />
  );

  const _keyExtractor = (item: BaseStat) => item.name;

  return (
    <FlatList
      data={statsData}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
    />
  );
};
