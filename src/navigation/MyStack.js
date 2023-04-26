import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyTab from './MyTab';
import MyDrawer from './MyDrawer';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="MyTab">
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
    </Stack.Navigator>
  );
}

export default MyStack;
