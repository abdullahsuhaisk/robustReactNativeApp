import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, FONTS, SIZES } from '../../assets';
import SvgButton from '../../components/SvgButton/SvgButton';
import { ICON } from '../../components/Icon/constants';
import ClickableText from '../../components/ClickableText/ClickableText';
import { useNavigation } from '@react-navigation/native';
import { AuthenticationNavigationProp } from '../../navigations/AuthenticationNavigator/types';
import { useDispatch, useSelector } from 'react-redux';
import { GET_AUTHENTICATION } from '../../core/authentication/authenticationActionTypes';
import { AppState } from '../../core/rootReducer';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import { getLogin } from '../../core/authentication/authenticationActionCreators';

const Login: React.FC<{}> = () => {
  const [mail, setMail] = useState<string>('kminchelle');
  const [password, setPassword] = useState<string>('0lelplR');

  const navigation = useNavigation<AuthenticationNavigationProp>();
  const dispatch = useDispatch();

  const { authentication, isLoading, error } = useSelector<AppState>(
    (state) => state,
  );

  console.log(isLoading[GET_AUTHENTICATION]);

  useEffect(() => {
    if (authentication.data) {
      navigation.navigate('BottomTabNavigator', { screen: 'Home' });
    }
  }, [authentication]);

  function handleforgetPassword() {
    navigation.navigate('ForgetPassword');
  }

  function handleSignIn() {
    navigation.navigate('SignIn');
  }

  function handleLogin() {
    dispatch(getLogin(mail, password));
    // navigation.navigate('BottomTabNavigator', { screen: 'Home' });
  }

  return (
    <ImageBackground
      source={require('../../assets/images/Splash.png')}
      resizeMode="cover"
      style={styles.imageBg}
    >
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to Readdit</Text>
          </View>
          <SvgButton
            iconID={ICON.GOOGLE}
            handlePress={() => console.log('aa')}
            text="Countinue with Google"
          />
          <SvgButton
            iconID={ICON.FACEBOOK}
            handlePress={() => console.log('aa')}
            text="Countinue with Facebook"
          />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.bottomTitle}>
            <Text style={styles.bottomTitleText}>Log in with email</Text>
          </View>
          <View style={styles.line}></View>
          <TextInput
            text={mail}
            setText={setMail}
            key={'mail'}
            color={COLORS.backgroundColor}
            icon={ICON.MAIL}
            placeHolder={'Mail'}
            testID="mail"
          />
          <TextInput
            text={password}
            setText={setPassword}
            key={'pass'}
            color={COLORS.backgroundColor}
            icon={ICON.PASSWORD}
            placeHolder={'Password'}
            testID="password"
          />
          <Button
            title="Login"
            handlePress={handleLogin}
            testID="login"
            isLoading={isLoading[GET_AUTHENTICATION]}
          />
          <View style={styles.footer}>
            <ClickableText
              title="Forget Password ?"
              handlePress={() => handleforgetPassword()}
              fontSize={SIZES.small}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={styles.text}>Don't have an account ? </Text>
              <ClickableText
                title="Sign Up"
                handlePress={() => handleSignIn()}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageBg: {
    width: '100%',
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.fontColor,
    textAlign: 'center',
  },
  bottomSection: {
    backgroundColor: COLORS.appIntroBgColor,
    borderTopRightRadius: 30,
    borderTopStartRadius: 30,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  bottomTitle: {
    alignSelf: 'center',
  },
  bottomTitleText: {
    fontSize: SIZES.medium,
    // fontFamily: FONTS.light,
    fontWeight: '500',
    color: COLORS.fontColor,
    textAlign: 'center',
    lineHeight: 24,
  },
  line: {
    borderColor: '#FFF3E9',
    borderWidth: 0.4,
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    // fontFamily: FONTS.light,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: SIZES.small,
    textAlign: 'center',
    color: COLORS.fontColor,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 5,
  },
});
export default Login;
