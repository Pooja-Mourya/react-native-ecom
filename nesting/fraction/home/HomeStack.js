import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeLogin from './HomeLogin';
import HomeRegister from './HomeRegister';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeLogin}
      />
      <Stack.Screen name="Profile" component={HomeLogin} />
      <Stack.Screen name="Settings" component={HomeRegister} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
