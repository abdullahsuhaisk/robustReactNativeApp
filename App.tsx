/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import configureStore from './src/core/configurestore';
// import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import AppStack from './src/navigations/AppNavigator';

function App(): JSX.Element {
  // const store = configureStore;
  return (
    <SafeAreaProvider>
      <Provider store={configureStore}>
        <AppStack />
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
