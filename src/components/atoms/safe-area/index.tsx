import React from 'react';

import {SafeAreaView} from './styles';
import {SafeAreaProps} from './types';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeArea = ({
  children,
  backgroundColor,
  style,
  insetBottom = true,
}: SafeAreaProps) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      backgroundColor={backgroundColor}
      paddingTop={insets.top}
      paddingBottom={insetBottom ? insets.bottom : 0}
      style={style}>
      {children}
    </SafeAreaView>
  );
};
