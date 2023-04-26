import {View, Text} from 'react-native';
import React from 'react';
import Banner from './src/components/Home/Banner';
import RootNavigation from './src/navigation/RootNavigation';
import MyTab from './src/navigation/MyTab';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
};

export default App;
