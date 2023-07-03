// import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { DEFAULT_INITIAL_ROUTE_NAME, Stack, appStackRoutes } from './constants';
import React from 'react';

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={DEFAULT_INITIAL_ROUTE_NAME}
        screenOptions={{ headerShown: false }}
      >
        {appStackRoutes.map((stackRoute) => {
          return <Stack.Screen key={stackRoute.name} {...stackRoute} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <NavigationContainer>
// <AppStack />
// </NavigationContainer>
