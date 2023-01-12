import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from './fraction/home/HomeTab';
import ProductTab from './fraction/product/ProductTab';

const Drawer = createDrawerNavigator();
const Nesting = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Auth"
          component={HomeTab}
          options={{
            // headerShown: false,
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="calculator"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Product"
          component={ProductTab}
          options={{
            // headerShown: false,
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="calculator"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Nesting;

const styles = StyleSheet.create({});
