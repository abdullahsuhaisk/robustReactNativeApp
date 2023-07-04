/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import configureStore from './src/core/configurestore';
// import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import AppStack from './src/navigations/AppNavigator';
import { LogBox } from 'react-native';

function App(): JSX.Element {
  // const store = configureStore;
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={configureStore}>
        <AppStack />
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
