import React, { FC } from 'react';

import { Image, PixelRatio, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../../assets';
import { appIntroScreenType } from '../../screens/Onboarding';

type AppIntroScreenProps = {
  width: number;
  screen: appIntroScreenType;
};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link AppIntroScreenProps}
 */

const AppIntroScreen: FC<AppIntroScreenProps> = ({ width, screen }) => {
  return (
    <View style={[styles.container, { width }]} testID={"appIntroScreen"}>
      {/* HEADER */}
      <View testID="welcomeHeader" style={styles.header}>
        <Text style={styles.headerText}>{screen.title[0]}</Text>
        <Text style={styles.headerText}>{screen.title[1]}</Text>
      </View>
      {/* IMAGE */}
      <Image source={screen.img} style={styles.imageStyle} testID='appIntroImage'/>
      {/* CONTENT */}
      <View style={styles.wrapper}>
        <Text style={[styles.headerText, styles.content]}>
          You can help you{' '}
          <Text style={{ color: COLORS.primary }}>to be a better</Text> version
          of <Text style={{ color: COLORS.primary }}>yourself</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appIntroBgColor,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
    paddingTop: 20,
  },
  headerText: {
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.fontColor,
    textAlign: 'center',
  },
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(130),
    width: '100%',
    resizeMode: 'contain',
  },
  content: {
    fontSize: SIZES.large,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default AppIntroScreen;
