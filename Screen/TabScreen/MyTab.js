import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
  function EmptyScreen() {
    return (
      <View>
        <Text>empty</Text>
      </View>
    );
  }
  return (
    <Tab.Navigator
      // tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        // tabBarActiveBackgroundColor: 'red',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          margin: 10,
          borderRadius: 50,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="home"
              size={20}
              color={focused ? 'red' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="chat"
              size={20}
              color={focused ? 'red' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Empty"
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                bottom: 23,
                width: 65,
                height: 65,
                backgroundColor: 'red',
                borderRadius: 50,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MaterialIcons
                name="add"
                size={30}
                color={focused ? 'white' : 'grey'}
              />
            </View>
          ),
          //   tabBarItemStyle: {
          //   marginBottom: 100,
          //   width: 50,
          //   height: 50,
          //   backgroundColor: 'red',
          //   // borderRadius: 50,
          //   // paddingVertical: 20,
          //   // position: 'absolute',
          //   },
        }}
      />
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="call"
              size={20}
              color={focused ? 'red' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="filter"
              size={20}
              color={focused ? 'red' : 'grey'}
            />
          ),
        }}
      />
      {/* <View style={{backgroundColor: 'red', width: 50, height: 50}}></View> */}
    </Tab.Navigator>
  );
};

export default MyTab;

const styles = StyleSheet.create({});
