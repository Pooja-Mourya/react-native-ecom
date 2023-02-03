import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../assets/Assets';
import RegisterUi from '../screen/RegisterUi';
import AboutApp from '../screen/first/AboutApp';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="AboutApp"
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
        name="AboutApp"
        component={AboutApp}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={RegisterUi}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite-outline" color={color} size={size} />
          ),
          headerShown: false,
          //   tabBarBadge: like.length,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={RegisterUi}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
          //   tabBarBadge: tabCart.length,
        }}
      />
      <Tab.Screen
        name="RegisterUi"
        component={RegisterUi}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={size} />
          ),

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;

const styles = StyleSheet.create({});
