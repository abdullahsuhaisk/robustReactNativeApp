import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../assets';
import {ICON} from '../../components/Icon/constants';
import ClickableText from '../../components/ClickableText/ClickableText';
import {useNavigation} from '@react-navigation/native';
import {AuthenticationNavigationProp} from '../../navigations/AuthenticationNavigator/types';
import Container from '../../components/Container/SafeAreaContainer';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import Box from '../../components/Box/Box';

const ForgetPassword: React.FC<{}> = () => {
  const [mail, setMail] = useState<string>('');
  const navigation = useNavigation<AuthenticationNavigationProp>();
  return (
    <Container>
      <View style={styles.imageContainer}>
        <Text style={styles.imageHeader}>FORGOT YOUR PASSWORD ?</Text>
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/images/Authentication/forgot.png')}
            testID="createAccountImage"
          />
        </View>
      </View>
      <View style={styles.boxContainer}>
        <Box>
          <Text style={styles.textStyle}>
            Enter your registered email below to receive password reset
            introduction
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput
              text={mail}
              setText={setMail}
              key={'mail'}
              color={COLORS.backgroundColor}
              icon={ICON.MAIL}
              placeHolder={'Mail'}
              testID="mail"
            />
          </View>
          <View style={{marginTop: 10}}>
            <Button
              title="Send Reset Link"
              handlePress={() => console.log('press')}
              testID="resetLink"
            />
          </View>
        </Box>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <Text style={styles.text}>Remember password? </Text>
        <ClickableText
          title="Login"
          handlePress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    // marginVertical: 30,
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
    marginBottom: 20,
  },
  svgButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    // fontFamily: FONTS.light,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: SIZES.small,
    textAlign: 'center',
    color: COLORS.fontColor,
    paddingHorizontal: 10,
  },
  boxContainer: {
    flex: 1,
  },
  textInputContainer: {
    marginTop: 10,
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

export default ForgetPassword;
