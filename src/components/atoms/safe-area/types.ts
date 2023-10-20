import {ReactNode} from 'react';

import {ViewProps} from 'react-native';

export type SafeAreaProps = ViewProps & {
  children: ReactNode;
  backgroundColor?: string;
  insetBottom?: boolean;
  style?: object;
};

export type SafeAreViewProps = {
  backgroundColor?: string;
  paddingTop: number;
  paddingBottom: number;
};
