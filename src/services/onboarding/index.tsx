import {View} from 'react-native';
import React from 'react';
import AppIntroSlider from '../../components/organisms/AppIntroSlider';

const AppIntro: React.FC<{}> = () => {
  const appIntroScreensArray = [
    {
      title: ['Welcome to ', 'READDIT'],
      img: require('../../assets/images/intro1.png'),
      content: 'You can help you to be a better version of yourself',
    },
    {
      title: ['Create an English ', 'Reading HABIT'],
      img: require('../../assets/images/AppIntro/Habits.png'),
      content:
        'Embark on a transformative journey by creating a daily reading habit to master the English language and unlock a world of knowledge and opportunities',
    },
    {
      title: ['Track your progress ', 'READDIT'],
      img: require('../../assets/images/AppIntro/Progress.png'),
      content:
        'Elevate your English skills, as you effortlessly track your progress and witness the power of consistent reading.',
    },
    {
      title: ['JOIN to ', 'READDIT 2'],
      img: require('../../assets/images/AppIntro/join.png'),
      content:
        'Join the community to cultivate a love for reading and connect with like-minded English learners',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <AppIntroSlider appIntroScreensArray={appIntroScreensArray} />
    </View>
  );
};

export default AppIntro;
