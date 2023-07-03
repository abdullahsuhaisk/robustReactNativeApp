import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, TextInput as ReactTextInput, View } from 'react-native';
import Icon from '../Icon';
import { ICON } from '../Icon/constants';
import { COLORS } from '../../assets';

type TextInputProps = {
  placeHolder?: string;
  setText: Dispatch<SetStateAction<string>>;
  text: string;
  color?: string;
  icon?: (typeof ICON)[keyof typeof ICON];
  testID: string;
};

/**
 * Component description
 * Resuable TextInput Component
 * Color option
 * @param props - {@link TextInputProps}
 */

const TextInput: React.FC<TextInputProps> = ({
  placeHolder,
  setText,
  text,
  color,
  icon,
  testID,
}) => {
  function onChangeText(text: React.SetStateAction<string>) {
    setText(text);
  }
  // console.log(icon);

  return (
    <View
      style={[
        styles.container,
        color ? { backgroundColor: color } : { backgroundColor: COLORS.white },
      ]}
    >
      {icon ? (
        <View style={styles.iconContainer}>
          <Icon id={icon} width={'20'} height={'20'} />
        </View>
      ) : null}
      <ReactTextInput
        style={[styles.input]}
        onChangeText={(text: string) => onChangeText(text)}
        value={text}
        placeholder={placeHolder}
        testID={testID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    margin: 15,
  },
  input: {
    height: '100%',
    // marginLeft: 15,
    width: '100%',
    // borderWidth: 1,
    // padding: 10,
    borderRadius: 5,
    color: COLORS.primary,
  },
});

export default TextInput;
