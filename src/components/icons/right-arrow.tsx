import * as React from 'react';

import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';

import {verticalScale, scale} from 'utils/scaling';

export const RightArrowIcon = (props: SvgProps) => (
  <Svg
    width={scale(16)}
    height={verticalScale(20)}
    fill="none"
    viewBox="0 0 16 20"
    {...props}>
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M4.85 14.45a.925.925 0 0 1-.213-.55.677.677 0 0 1 .213-.525l4.4-4.4L4.825 4.55c-.133-.133-.196-.312-.188-.537a.769.769 0 0 1 .213-.538c.167-.167.346-.246.537-.237a.755.755 0 0 1 .513.237l4.975 4.975a.763.763 0 0 1 .175.25c.033.083.05.175.05.275 0 .1-.017.192-.05.275a.763.763 0 0 1-.175.25l-4.95 4.95a.677.677 0 0 1-.525.213.924.924 0 0 1-.55-.213Z"
      />
    </G>
    <Defs />
  </Svg>
);
