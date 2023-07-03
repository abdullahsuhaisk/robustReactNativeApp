import React, { FC, useRef, useState } from 'react';

import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroScreen from './AppIntroScreen';
import { COLORS } from '../../assets';
import AppIntroFooter from './AppIntroFooter';
import { useNavigation } from '@react-navigation/native';
import { AuthenticationNavigationProp } from '../../navigations/AuthenticationNavigator/types';
import { appIntroScreenType } from '../../screens/Onboarding';

type AppIntroSliderProps = {
  appIntroScreensArray: Array<appIntroScreenType>;
};

const AppIntroSlider: FC<AppIntroSliderProps> = ({ appIntroScreensArray }) => {
  const { width } = Dimensions.get('window');
  const sliderRef = useRef<ScrollView>(null);
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const navigation = useNavigation<AuthenticationNavigationProp>();

  function handleSignInButton() {
    navigation.navigate('Login');
  }

  function handleScrollTo(destination: number) {
    // width;
    if (sliderRef !== null) {
      sliderRef.current.scrollTo({
        x: width * destination,
        y: 0,
        animated: true,
      });
    }
  }

  const setSliderPage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.appIntroBgColor, flex: 1 }}>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          setSliderPage(event);
        }}
        ref={sliderRef}
        testID="onBoardingContainer"
      >
        {appIntroScreensArray.map((screen, index) => (
          <AppIntroScreen width={width} screen={screen} key={index} />
        ))}
      </ScrollView>
      {/* FOOTER */}
      <AppIntroFooter
        sliderState={sliderState}
        width={width}
        appIntroScreensArray={appIntroScreensArray}
        handleScrollTo={handleScrollTo}
        handleSignInButton={handleSignInButton}
      />
    </SafeAreaView>
  );
};

export default AppIntroSlider;
