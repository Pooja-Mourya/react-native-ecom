import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeUi from '../screen/HomeUi';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FavoriteUi from '../screen/FavoriteUi';
import ProfileUi from '../screen/ProfileUi';
import {Colors} from '../assets/Assets';
import MyTabCart from '../screen/MyTabCart';
import {useSelector} from 'react-redux';
import MyDrawer from './MyDrawer';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';
import {color} from 'react-native-reanimated';
import RootNavigation from './RootNavigation';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  const like = useSelector(state => state.toCart.items);
  const tabCart = useSelector(state => state.wishlist.wishlist);

  const user1 = firebase.auth().currentUser;
  if (user1) {
    console.log('User email: ', user1.email, user1.userType);
    // return setUserEmail(user1.email);
  }
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
        component={HomeUi}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyStack"
        component={RootNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteUi}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite-outline" color={color} size={size} />
          ),
          headerShown: false,
          tabBarBadge: like.length,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={MyTabCart}
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
          tabBarBadge: tabCart.length,
        }}
      />
      {!user1 ? (
        <Tab.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            tabBarLabel: 'MyDrawer',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="bars" color={color} size={size} />
            ),

            headerShown: false,
          }}
        />
      ) : (
        <Tab.Screen
          name="Profile"
          component={ProfileUi}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="user" color={color} size={size} />
            ),

            headerShown: false,
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default MyTab;

const styles = StyleSheet.create({});
