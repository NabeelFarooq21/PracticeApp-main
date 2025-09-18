import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AuthStack from '../navigation/Auth';
import HomeStack from '../navigation/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default Navigation;
