import { type SvgProps } from 'react-native-svg';

import { ICON } from './constants';

type PropsTypes = {
  src?: string;
  id?: (typeof ICON)[keyof typeof ICON];
} & Omit<SvgProps, 'uri'>;

export { type PropsTypes };
