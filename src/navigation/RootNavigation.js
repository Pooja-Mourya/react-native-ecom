import {NavigationContainer, SafeAreaProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import MyTab from './MyTab';
import MyDrawer from './MyDrawer';
import AboutApp from '../screen/first/AboutApp';
import Walkthrough from '../screen/first/Walkthrough';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  //   console.log('userCredential', userCredential);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AboutApp">
        <Stack.Screen
          name="MyTab"
          component={MyTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutApp"
          component={AboutApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Walkthrough"
          component={Walkthrough}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
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
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
