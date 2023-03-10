import {NavigationContainer, SafeAreaProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import MyTab from './MyTab';
import MyDrawer from './MyDrawer';
import AboutApp from '../screen/first/AboutApp';
import Walkthrough from '../screen/first/Walkthrough';
import NotificationApp from '../screen/second/NotificationApp';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  //   console.log('userCredential', userCredential);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AboutApp">
        <Stack.Screen
          name="MyTab"
          component={MyTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutApp"
          component={AboutApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Walkthrough"
          component={Walkthrough}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationApp"
          component={NotificationApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
