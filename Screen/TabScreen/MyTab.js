import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import AuthStack from '../StackScreens/AuthStack';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  function HomeScreen() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    );
  }
  function SettingsScreen() {
    return (
      <View>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={AuthStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Home1" component={HomeScreen} />
      <Tab.Screen name="Home2" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default MyTab;

const styles = StyleSheet.create({});
