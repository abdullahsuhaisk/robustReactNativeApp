import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../AppNavigator/types';

export type AuthenticationStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  Login: undefined;
  ForgetPassword: undefined;
};

export type AuthenticationNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AuthenticationStackParamList, 'Onboarding'>,
  NativeStackNavigationProp<AppStackParamList>
>;

export type AuthenticationRouteProp = RouteProp<
  AuthenticationStackParamList,
  'Onboarding'
>;
