import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from '../BottomNavigator';
import AuthencationStack from '../AuthenticationNavigator';

import { AppStackParamList } from './types';

export const DEFAULT_INITIAL_ROUTE_NAME = 'Authentication';
export const Stack = createNativeStackNavigator<AppStackParamList>();

export const appStackRoutes: Array<React.ComponentProps<typeof Stack.Screen>> =
  [
    {
      name: 'BottomTabNavigator',
      component: BottomTabNavigator,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'Authentication',
      component: AuthencationStack,
      options: {
        headerShown: false,
      },
    },
  ];
