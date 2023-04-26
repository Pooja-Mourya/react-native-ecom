import {NavigationContainer, SafeAreaProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import MyTab from './MyTab';
import MyDrawer from './MyDrawer';
import MyStack from './MyStack';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  //   console.log('userCredential', userCredential);
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
