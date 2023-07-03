import React, { FC } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../assets';

type ClickableTextProps = {
  title: string;
  handlePress: () => void;
  fontSize?: number;
};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link ClickableTextProps}
 */

const ClickableText: FC<ClickableTextProps> = ({
  title,
  handlePress,
  fontSize,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ClickableText} onPress={handlePress}>
        <Text style={[styles.ClickableTextTitle, { fontSize: fontSize }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  ClickableText: {},
  ClickableTextTitle: {
    // fontFamily: FONTS.light,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: SIZES.medium,
    textAlign: 'center',
    color: COLORS.fontColor,
  },
});

export default ClickableText;
