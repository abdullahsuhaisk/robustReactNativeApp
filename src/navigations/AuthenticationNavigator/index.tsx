import {
  DEFAULT_INITIAL_ROUTE_NAME,
  Stack,
  authenticationStackRoutes,
} from './constants';

export default function AuthencationStack() {
  return (
    <Stack.Navigator
      initialRouteName={DEFAULT_INITIAL_ROUTE_NAME}
      screenOptions={{ headerShown: false }}
    >
      {authenticationStackRoutes.map((stackRoute) => {
        return <Stack.Screen key={stackRoute.name} {...stackRoute} />;
      })}
    </Stack.Navigator>
  );
}
