import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomStackParamList } from './types';
import HomeScreen from '../../screens/HomeScreen';

export const Stack = createBottomTabNavigator<BottomStackParamList>();

export const DEFAULT_INITIAL_ROUTE_NAME = 'Home';

export const categoryStackRoutes: Array<
  React.ComponentProps<typeof Stack.Screen>
> = [
  {
    name: 'Home',
    component: HomeScreen,
  },
];
