import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstScreen from '../screen/FirstScreen';
import RegisterUi from '../screen/RegisterUi';
import LogoutUi from '../screen/LogoutUi';
import SettingUi from '../screen/SettingUi';
import AntDesign from 'react-native-vector-icons';
import {Colors} from '../assets/Assets';
import CustomDrawer from './CustomDrawer';
import ViewOrder from '../screen/ViewOrder';
import HomeUi from '../screen/HomeUi';
import AddProduct from '../dashboard/AddProduct';
import ResentAddProduct from '../dashboard/ResentAddProduct';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import WelcomeScreen from '../dashboard/WelcomeScreen';
import ChatFirebase from '../dashboard/ChatFirebase';
import FilterFunction from '../dashboard/FilterFunction';
import PrimeUser from '../dashboard/PrimeUser';
import MyTab from './MyTab';

const Drawer = createDrawerNavigator();
const user = firebase.auth().currentUser;
if (user == 0) {
  //   console.log('User email: ', user.email, user.userType.userType.label);
  console.log('user', user);
  // return setUserEmail(user1.email);
}
export default function MyDrawer() {
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
      {!user ? (
        <Drawer.Screen name="SignUp/Login" component={RegisterUi} />
      ) : (
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      )}
      {user && (
        <Drawer.Screen
          //   options={{headerShown: false}}
          name="Settings"
          component={SettingUi}
        />
      )}
      {/* {user && (
        <Drawer.Screen
          options={{headerShown: false}}
          name="Add Product"
          component={AddProduct}
        />
      )}
      {user && (
        <Drawer.Screen
          options={{headerShown: false}}
          name="Resent Add Product"
          component={ResentAddProduct}
        />
      )} */}

      {user && (
        <Drawer.Screen
          //   options={{headerShown: false}}
          name="View Order"
          component={ViewOrder}
        />
      )}
      {user && (
        <Drawer.Screen
          //   options={{headerShown: false}}
          name="Chat Support"
          component={ChatFirebase}
        />
      )}
      <Drawer.Screen
        // options={{headerShown: false}}
        name="Take what you want"
        component={FilterFunction}
      />
      {user && (
        <Drawer.Screen
          //   options={{headerShown: false}}
          name="Services For Prime Users"
          component={PrimeUser}
        />
      )}

      {user && (
        <Drawer.Screen
          //   options={{headerShown: false}}
          name="Logout"
          component={LogoutUi}
        />
      )}
      {/* <Drawer.Screen
        // options={{headerShown: false}}
        name="Home"
        component={HomeUi}
      /> */}
    </Drawer.Navigator>
  );
}
