import React, { FC } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../assets';
import Button from '../Button/Button';

type appIntroButtonType = {
  title: string;
  handlePress: () => void;
};

const AppIntroButton: FC<appIntroButtonType> = ({ title, handlePress }) => {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.fontStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

type AppIntroFooterProps = {
  sliderState: {
    currentPage: number;
  };
  width: number;
  appIntroScreensArray: Array<any>;
  handleScrollTo: (destination: number) => void;
  handleSignInButton: () => void;
};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link AppIntroFooterProps}
 */

const AppIntroFooter: FC<AppIntroFooterProps> = ({
  sliderState,
  width,
  appIntroScreensArray,
  handleScrollTo,
  handleSignInButton,
}) => {
  const { currentPage: pageIndex } = sliderState;
  function handlePress(destination: number): void {
    // console.log(event);
    handleScrollTo(destination);
  }
  return (
    <View style={[styles.container, { width }]} testID={"appIntroFooter"}>
      {pageIndex >= appIntroScreensArray.length - 1 ? (
        <View style={{ width: width - 20 }}>
          <Button
            title="Sign In"
            handlePress={() => handleSignInButton()}
            testID="signIn"
          />
        </View>
      ) : (
        <View style={[styles.container, { width }]}>
          <AppIntroButton
            handlePress={() => {
              handlePress(appIntroScreensArray.length - 1);
            }}
            title="Skip"
          />
          <View style={styles.paginationWrapper}>
            {appIntroScreensArray.map((key, index) => (
              <View
                style={[
                  styles.paginationDots,
                  { opacity: pageIndex === index ? 1 : 0.2 },
                ]}
                key={index}
              />
            ))}
          </View>
          {/* handlePress(pageIndex) */}
          <AppIntroButton
            handlePress={() => {
              handlePress(pageIndex + 1);
            }}
            title="Next"
            handleSignInButton={handleSignInButton}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    // backgroundColor: 'green',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: COLORS.primary,
    marginLeft: 10,
  },
  fontStyle: {
    /* Skip */
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

export default AppIntroFooter;
