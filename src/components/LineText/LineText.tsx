import React, {FC} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../assets';

type LineTextProps = {
  text: string;
};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link LineTextProps}
 */

const LineText: FC<LineTextProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    borderBottomWidth: 0.7,
    borderBottomColor: COLORS.fontColor,
    opacity: 0.6,
    flex: 1,
    alignItems: 'center',
    width: 100,
  },
  textContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: SIZES.small,
    // fontFamily: FONTS.bold,
    fontWeight: '600',
    color: COLORS.fontColor,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default LineText;
