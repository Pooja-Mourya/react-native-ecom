import {NavigationContainer, SafeAreaProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import DetailUi from '../screen/DetailUi';
import CartUi from '../screen/CartUi';
import HomeUi from '../screen/HomeUi';
import FirstScreen from '../screen/FirstScreen';
import MyTab from './MyTab';
import MyDrawer from './MyDrawer';
import MakePayment from '../screen/MakePayment';
import CashPayment from '../screen/CashPayment';
import LoginUi from '../screen/LoginUi';
import RegisterUi from '../screen/RegisterUi';
import LogoutUi from '../screen/LogoutUi';
import SettingUi from '../screen/SettingUi';
import ViewOrder from '../screen/ViewOrder';
import FavoriteUi from '../screen/FavoriteUi';
import MyTabCart from '../screen/MyTabCart';
import AddProduct from '../dashboard/AddProduct';
import ResentAddProduct from '../dashboard/ResentAddProduct';
import ViewProduct from '../dashboard/ViewProduct';
import Users from '../user/Users';
import WelcomeScreen from '../dashboard/WelcomeScreen';
import FilterFunction from '../dashboard/FilterFunction';
import UpiPayment from '../components/Layout/UpiPayment';
import NatBanking from '../components/Layout/NatBanking';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  //   console.log('userCredential', userCredential);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTab"
          component={MyTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={`DetailUi`}
          component={DetailUi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartUi"
          component={CartUi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeUi"
          component={HomeUi}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MakePayment"
          component={MakePayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CashPayment"
          component={CashPayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginUi"
          component={LoginUi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterUi"
          component={RegisterUi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogoutUi"
          component={LogoutUi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingUi"
          component={SettingUi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewOrder"
          component={ViewOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FavoriteUi"
          component={FavoriteUi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabCart"
          component={MyTabCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResentAddProduct"
          component={ResentAddProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewProduct"
          component={ViewProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpiPayment"
          component={UpiPayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NatBanking"
          component={NatBanking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilterFunction"
          component={FilterFunction}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
