import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../assets';
import Icon from '../Icon';
import { ICON } from '../Icon/constants';
// import Icon from 'react-native-vector-icons/Ionicons';

type SvgButtonProps = {
  handlePress: () => void;
  iconID: (typeof ICON)[keyof typeof ICON];
  text: string;
};

const SvgButton: React.FC<SvgButtonProps> = ({ handlePress, iconID, text }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={buttonstyles.container}>
      <View style={buttonstyles.svgContainer}>
        <Icon id={iconID} width={'30'} height={'30'} />
      </View>
      <View style={buttonstyles.textContainer}>
        <Text style={buttonstyles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const buttonstyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    backgroundColor: COLORS.appIntroBgColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    // width: '100%',
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.fontColor,
    textAlign: 'center',
  },
  svgContainer: {
    marginLeft: 15,
    width: 60,
  },
  textContainer: {
    marginRight: 10,
  },
});

export default SvgButton;
