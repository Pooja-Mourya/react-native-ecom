import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductLike from './ProductLike';

const Stack = createStackNavigator();

const productStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomePro"
        component={ProductLike}
      />
      <Stack.Screen name="Profile" component={ProductLike} />
      <Stack.Screen name="Settings" component={ProductLike} />
    </Stack.Navigator>
  );
};

export default productStack;

const styles = StyleSheet.create({});
