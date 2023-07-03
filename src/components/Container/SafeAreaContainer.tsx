import React, { FC, ReactNode } from 'react';

import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
import { SafeAreaView } from 'react-native-safe-area-context';

type ContainerProps = {
  children: ReactNode;
};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link ContainerProps}
 */

const Container: FC<ContainerProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    // marginHorizontal: 10,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default Container;
