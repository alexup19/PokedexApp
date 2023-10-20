import React from 'react';

import {RightArrowIcon} from 'icons';

import {NavigationButton, NavigationView} from './styles';
import {NavigationButtonsProps} from './types';

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  pokemonCount,
  setDexNumber,
  dexNumber,
}) => {
  return (
    <>
      {dexNumber - 1 > 0 ? (
        <NavigationButton
          onPress={() => setDexNumber(dexNumber - 1)}
          style={{
            transform: [{scaleX: -1}],
          }}>
          <RightArrowIcon />
        </NavigationButton>
      ) : (
        <NavigationView />
      )}
      {dexNumber + 1 <= pokemonCount ? (
        <NavigationButton onPress={() => setDexNumber(dexNumber + 1)}>
          <RightArrowIcon />
        </NavigationButton>
      ) : (
        <NavigationView />
      )}
    </>
  );
};
