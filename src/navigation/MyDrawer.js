import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons';
import {Colors} from '../assets/Assets';

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  function Home() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    );
  }
  return (
    <Drawer.Navigator
      options={{
        headerShown: false,
        drawerIcon: () => {
          return <AntDesign name={'user'} />;
        },
      }}
      initialRouteName="Home"
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
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Drawer.Navigator>
  );
}
