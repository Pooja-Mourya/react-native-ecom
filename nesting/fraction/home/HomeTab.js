import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Nesting from '../../Nesting';
import HomeLogin from './HomeLogin';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          display: 'flex',
          flex: 1,
        },
        tabBarStyle: {
          display: 'flex',
          paddingTop: 10,
          height: 60,
          backgroundColor: '#fff',
        },

        // tabBarShowLabel: false,
        // tabBarActiveTintColor: 'tomato',
        // tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Trans.',
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name={'format-list-text'} size={25} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Prime"
        component={HomeLogin}
        options={{
          headerShown: false,
          tabBarLabel: 'more',
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name={'format-list-text'} size={25} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Local"
        component={HomeLogin}
        options={{
          headerShown: false,
          tabBarLabel: 'more',
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name={'format-list-text'} size={25} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Seller"
        component={HomeLogin}
        options={{
          headerShown: false,
          tabBarLabel: 'more',
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name={'format-list-text'} size={25} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
