/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ReviewScreen from './src/screens/ReviewScreen';

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  Reviews: undefined;
  Login: undefined;
  // Add any other screens as needed
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'GameSphere Features' }} />
        <Stack.Screen name="Reviews" component={ReviewScreen} options={{ title: 'Reviews' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

