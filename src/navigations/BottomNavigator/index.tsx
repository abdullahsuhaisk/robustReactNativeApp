import React from 'react';
import {
  DEFAULT_INITIAL_ROUTE_NAME,
  Stack,
  categoryStackRoutes,
} from './constants';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BottomStack(): JSX.Element {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Stack.Navigator
        initialRouteName={DEFAULT_INITIAL_ROUTE_NAME}
        screenOptions={{ headerShown: false }}
      >
        {categoryStackRoutes.map((stackRoute) => {
          return <Stack.Screen key={stackRoute.name} {...stackRoute} />;
        })}
      </Stack.Navigator>
    </View>
  );
}

