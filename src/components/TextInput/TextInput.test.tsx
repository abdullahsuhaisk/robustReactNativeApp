/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import TextInput from './TextInput';
import { ICON } from '../Icon/constants';

describe('TextInput component', () => {
  const placeHolder = 'Place Holder...';
  const setTextMock = jest.fn();
  const testText = 'Test Input';
  const color = 'red';
  const testID = 'mytext';
  const testIcon = ICON.MAIL;
  const iconTestId = ICON.MAIL + 'Icon';
  it('should update text value when typing', () => {
    const { getByPlaceholderText } = render(
      <TextInput
        placeHolder={placeHolder}
        setText={setTextMock}
        text=""
        color={color}
        testID={testID}
      />,
    );

    const inputElement = getByPlaceholderText(placeHolder);
    fireEvent.changeText(inputElement, testText);
    expect(setTextMock).toHaveBeenCalledWith(testText);
  });
  it('should render an icon if the icon prop is provided', () => {
    const { getByTestId } = render(
      <TextInput
        placeHolder={placeHolder}
        setText={setTextMock}
        text={testText}
        icon={testIcon}
        testID={testID}
      />,
    );
    const iconElement = getByTestId(iconTestId);
    expect(iconElement).toBeTruthy();
  });

  it('should render with props bgColor if the color prop is provided', () => {
    const { getByTestId } = render(
      <TextInput
        placeHolder={placeHolder}
        setText={setTextMock}
        text={testText}
        icon={testIcon}
        testID={testID}
        color={color}
      />,
    );
    const textInput = getByTestId(testID).parent;
    expect(textInput).toHaveStyle({ backgroundColor: color });
  });
});
