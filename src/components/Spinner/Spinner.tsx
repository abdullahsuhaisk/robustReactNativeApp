import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../../assets';

interface SpinnerProps {
  size?: number | 'small' | 'large' | undefined;
  color?: 'string' | '#00ff00';
}

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link CardProps}
 */

const Spinner: FC<SpinnerProps> = ({size, color}) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator
      size={size ? size : 'small'}
      color={color ? color : COLORS.primary}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Spinner;
