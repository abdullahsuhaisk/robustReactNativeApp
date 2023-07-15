import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  const mockTitle = 'Submit';
  const mockHandlePress = jest.fn();
  const mockTestID = 'submitButton';

  it('render correctly and displays the correct title', () => {
    const { getByText } = render(
      <Button title={mockTitle} handlePress={mockHandlePress} testID={mockTestID} />
    );
    const titleElement = getByText(mockTitle);
    expect(titleElement).toBeDefined();
  });

  it('calls handlePress when button is pressed', () => {
    const { getByTestId } = render(
      <Button title={mockTitle} handlePress={mockHandlePress} testID={mockTestID} />
    );
    const button = getByTestId(mockTestID);

    fireEvent.press(button);
    expect(mockHandlePress).toHaveBeenCalled();
  });

  it('displays the spinner when isLoading is true', () => {
    const { getByTestId } = render(
      <Button title={mockTitle} handlePress={mockHandlePress} testID={mockTestID} isLoading={true} />
    );
    const spinner = getByTestId('spinner');
    expect(spinner).toBeDefined();
  });

  it('displays the button when isLoading is false', () => {
    const { queryByTestId } = render(
      <Button title={mockTitle} handlePress={mockHandlePress} testID={mockTestID} isLoading={false} />
    );
    const spinner = queryByTestId('spinner');
    expect(spinner).toBeNull();
  });
});