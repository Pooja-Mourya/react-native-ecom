import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons';
import {Colors} from '../assets/Assets';
import CustomDrawer from '../navigation/CustomDrawer';
import {Text} from 'react-native';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const my = () => {
    return <Text>hjf</Text>;
  };
  return (
    <Drawer.Navigator
      options={{
        headerShown: false,
        drawerIcon: () => {
          return <AntDesign name={'user'} />;
        },
      }}
      initialRouteName="SignUp/Login"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {marginTop: 1},
        drawerActiveBackgroundColor: Colors.blue,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        activeTintColor: 'white',
      }}
    >
      <Drawer.Screen
        // options={{headerShown: false}}
        name="Home"
        component={my}
      />
    </Drawer.Navigator>
  );
}
