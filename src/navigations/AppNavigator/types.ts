import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomStackParamList } from '../BottomNavigator/types';
import { NavigatorScreenParams } from '@react-navigation/native';
import { AuthenticationStackParamList } from '../AuthenticationNavigator/types';

export type AppStackParamList = {
  BottomTabNavigator: BottomTabNavigationProp<BottomStackParamList>;
  Authentication: NavigatorScreenParams<AuthenticationStackParamList>;
};
