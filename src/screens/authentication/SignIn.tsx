import React, { FC, useState } from 'react';

import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS, SIZES } from '../../assets';
import { AuthenticationNavigationProp } from '../../navigations/AuthenticationNavigator/types';
import TextInput from '../../components/TextInput/TextInput';
import SvgButton from '../../components/SvgButton/SvgButton';
import ClickableText from '../../components/ClickableText/ClickableText';
import LineText from '../../components/LineText/LineText';
import Button from '../../components/Button/Button';
import { ICON } from '../../components/Icon/constants';

type SignInProps = {};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link SignInProps}
 */

const SignIn: FC<SignInProps> = ({}) => {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [keepMeSignIn, setKeepMeSignIn] = useState<boolean>(true);
  // const [notification, setNotification] = useState<boolean>(true);

  const navigation = useNavigation<AuthenticationNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* IMAGE  */}
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/images/Authentication/CreateAccount.png')}
            testID="createAccountImage"
          />
        </View>
        <Text style={styles.imageHeader}>CREATE YOUR ACCOUNT</Text>
      </View>
      {/* INPUTS */}
      <TextInput
        text={name}
        setText={setName}
        key={'name'}
        icon={ICON.USER}
        placeHolder={'Name'}
        testID="nameInput"
      />
      <TextInput
        text={mail}
        setText={setMail}
        key={'mail'}
        icon={ICON.MAIL}
        placeHolder={'Mail'}
        testID="mailInput"
      />
      <TextInput
        text={password}
        setText={setPassword}
        key={'password'}
        icon={ICON.PASSWORD}
        placeHolder={'Password'}
        testID="passwordInput"
      />
      <View style={{ marginTop: 5 }}>
        <Button title="Create Account" handlePress={() => {}} testID="signIn" />
      </View>
      {/* OPTIONS */}
      <LineText text="Or sign in with" />
      <View style={styles.svgButtonContainer}>
        <SvgButton
          iconID={ICON.GOOGLE}
          handlePress={() => console.log('aa')}
          text="Google"
        />
        <SvgButton
          iconID={ICON.FACEBOOK}
          handlePress={() => console.log('aa')}
          text="Facebook"
        />
      </View>
      <Text style={styles.text}>Already have an account ? </Text>
      <ClickableText
        title="Sign In"
        handlePress={() => {
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    marginHorizontal: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    marginVertical: 10,
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageHeader: {
    fontSize: SIZES.medium,
    // fontFamily: FONTS.bold,
    fontWeight: '800',
    color: COLORS.fontColor,
    textAlign: 'center',
    lineHeight: 24,
  },
  svgButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // fontFamily: FONTS.light,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: SIZES.small,
    textAlign: 'center',
    color: COLORS.fontColor,
  },
});

export default SignIn;
