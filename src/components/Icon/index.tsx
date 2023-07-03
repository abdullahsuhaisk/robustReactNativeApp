import React from 'react';

import { View } from 'react-native';

import { SvgUri } from 'react-native-svg';

// import { logger } from '../../constants';

import { findIconById } from './constants';
import styles from './styles';
import { type PropsTypes } from './types';

/**
 * P.N. to use it, you should:
 *
 * @example
 * import Icon from './components/Icon';
 *
 * <Icon src="[https link]" width?=[{} | ""] height?=[{} | ""] />
 *
 * @example
 * import Icon from './components/Icon';
 * import { ICON } from './components/Icon/constants';
 *
 * <Icon id={ICON.USER} width?=[{} | ""] height?=[{} | ""] />
 */
function Icon(props: PropsTypes): JSX.Element {
  const { src, id, ...rest } = props;

  if (!!src && !!id) {
    // logger.warn('[Icon] warn: both src and id retrived... using only src');
    console.log('[Icon] warn: both src and id retrived... using only src');
  }
  if (!src && !id) {
    // logger.error('[Icon] error: at least src or id should be passed');
    console.log('Icon] error: at least src or id should be passed');
  }

  return (
    <>
      {src ? (
        <View style={styles.container}>
          <SvgUri uri={src} {...rest} testID="iconUri" />
        </View>
      ) : (
        findIconById(id, rest)
      )}
    </>
  );
}

export default Icon;
