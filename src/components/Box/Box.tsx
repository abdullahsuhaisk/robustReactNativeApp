import React, { FC, ReactNode } from 'react';

import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../assets';

type BoxProps = {
  children: ReactNode;
};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link BoxProps}
 */

const Box: FC<BoxProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    backgroundColor: COLORS.appIntroBgColor,
  },
});

export default Box;
