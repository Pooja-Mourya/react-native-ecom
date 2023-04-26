import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../assets/Assets';
import Banner from '../components/Home/Banner';
import Home from '../components/Home/Home';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Contact from '../components/contact/Contact';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: {},
        // tabBarInactiveBackgroundColor: 'blue',
        // tabBarIconStyle: {
        //   borderWidth: 2,
        //   width: 50,
        //   borderRadius: 100,
        //   backgroundColor: 'cyan',
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-convert-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="apple-keyboard-command"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cellphone-link"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;

const styles = StyleSheet.create({});
