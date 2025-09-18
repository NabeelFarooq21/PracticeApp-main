import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FeedIntro from '../src/screens/Home/FeedIntro/Index';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="FeedIntro">
      <Stack.Screen name="FeedIntro" component={FeedIntro} />
    </Stack.Navigator>
  );
};

export default HomeStack;
