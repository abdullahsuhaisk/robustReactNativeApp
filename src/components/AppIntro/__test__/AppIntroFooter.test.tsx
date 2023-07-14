import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppIntroFooter from '../AppIntroFooter';

const MockScreensArray = [
  {
    title: ['Welcome to ', 'READDIT'],
    img: require('../../../assets/images/AppIntro/Habits.png'),
  },
  {
    title: ['Welcome to 2', 'READDIT 2'],
    img: require('../../../assets/images/AppIntro/Habits.png'),
  },
  {
    title: ['Welcome to 3', 'READDIT 3'],
    img: require('../../../assets/images/AppIntro/Habits.png'),
  },
];

const width = 300;
const handleScrollTo = jest.fn();
const handleSignInButton = jest.fn();

describe('AppIntroFooter component', () => {
  it('should render the Sign In button on the last page', () => {
    const { getByText } = render(
      <AppIntroFooter
        sliderState={{ currentPage: MockScreensArray.length - 1 }}
        width={width}
        appIntroScreensArray={MockScreensArray}
        handleScrollTo={handleScrollTo}
        handleSignInButton={handleSignInButton}
      />,
    );

    const signInButton = getByText('Sign In');
    expect(signInButton).toBeTruthy();
  });

  it('should render the Skip and Next buttons on non-last page', () => {
    const handleScrollTo = jest.fn();
    const { getByText } = render(
      <AppIntroFooter
        sliderState={{ currentPage: 1 }}
        width={width}
        appIntroScreensArray={MockScreensArray}
        handleScrollTo={handleScrollTo}
        handleSignInButton={handleSignInButton}
      />,
    );

    const skipButton = getByText('Skip');
    const nextButton = getByText('Next');
    expect(skipButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });

  it('should call handleScrollTo when Skip button is pressed', () => {
    const { getByText } = render(
      <AppIntroFooter
        sliderState={{ currentPage: 0 }}
        width={width}
        appIntroScreensArray={MockScreensArray}
        handleScrollTo={handleScrollTo}
        handleSignInButton={handleSignInButton}
      />,
    );

    const skipButton = getByText('Skip');
    fireEvent.press(skipButton);

    expect(handleScrollTo).toHaveBeenCalledWith(MockScreensArray.length - 1);
  });

  it('should call handleScrollTo when Next button is pressed', () => {
    const { getByText } = render(
      <AppIntroFooter
        sliderState={{ currentPage: 0 }}
        width={width}
        appIntroScreensArray={MockScreensArray}
        handleScrollTo={handleScrollTo}
        handleSignInButton={handleSignInButton}
      />,
    );

    const nextButton = getByText('Next');
    fireEvent.press(nextButton);

    expect(handleScrollTo).toHaveBeenCalledWith(1);
  });

  it('should call handleSignInButton when Sign In button is pressed', () => {
    const { getByText } = render(
      <AppIntroFooter
        sliderState={{ currentPage: MockScreensArray.length - 1 }}
        width={width}
        appIntroScreensArray={MockScreensArray}
        handleScrollTo={handleScrollTo}
        handleSignInButton={handleSignInButton}
      />,
    );

    const signInButton = getByText('Sign In');
    fireEvent.press(signInButton);

    expect(handleSignInButton).toHaveBeenCalled();
  });
});
