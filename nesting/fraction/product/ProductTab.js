import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductStack from './productStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductLike from './ProductLike';

const Tab = createBottomTabNavigator();

const ProductTab = () => {
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
      }}
    >
      <Tab.Screen
        name="ProductList"
        component={ProductStack}
        options={{
          headerShown: false,
          //   tabBarLabel: 'Trans.',
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name={'format-list-text'}
                size={25}
                color={'indigo'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={ProductLike}
        options={{
          headerShown: false,
          //   tabBarLabel: 'Trans.',
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name={'format-list-text'}
                size={25}
                color={'indigo'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ProductStack}
        options={{
          headerShown: false,
          //   tabBarLabel: 'Trans.',
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name={'format-list-text'}
                size={25}
                color={'indigo'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Filter"
        component={ProductStack}
        options={{
          headerShown: false,
          //   tabBarLabel: 'Trans.',
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name={'format-list-text'}
                size={25}
                color={'indigo'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ProductTab;

const styles = StyleSheet.create({});
