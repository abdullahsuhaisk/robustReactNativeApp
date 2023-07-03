import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticationStackParamList } from './types';
import Onboarding from '../../screens/Onboarding';
import SignIn from '../../screens/authentication/SignIn';
import Login from '../../screens/authentication/Login';
import ForgetPassword from '../../screens/authentication/ForgetPassword';
import { COLORS } from '../../assets';

export const DEFAULT_INITIAL_ROUTE_NAME = 'Onboarding';
export const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

export const authenticationStackRoutes: Array<
  React.ComponentProps<typeof Stack.Screen>
> = [
  {
    name: DEFAULT_INITIAL_ROUTE_NAME,
    component: Onboarding,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'SignIn',
    component: SignIn,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'ForgetPassword',
    component: ForgetPassword,
    options: {
      headerShown: true,
      headerBackTitleVisible: true,
      title: null,
    },
  },
];
