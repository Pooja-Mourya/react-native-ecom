import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Home = () => {
  return <Text>hfb</Text>;
};

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Home}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
