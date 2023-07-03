import React, { FC } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../assets';
import Spinner from '../Spinner/Spinner';

type ButtonProps = {
  title: string;
  handlePress: () => void;
  testID: string;
  isLoading?: boolean;
};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link ButtonProps}
 */

const Button: FC<ButtonProps> = ({ title, handlePress, testID, isLoading }) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner size={'large'} />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
          testID={testID}
        >
          <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 50,
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
  },
  buttonTitle: {
    // fontFamily: FONTS.light,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: SIZES.medium,
    lineHeight: 24,
    /* identical to box height, or 141% */
    textAlign: 'center',
    color: '#573353',
  },
});

export default Button;
