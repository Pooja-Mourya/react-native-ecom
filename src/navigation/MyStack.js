import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/user/Login';
import ViewProduct from '../screen/products/ViewProduct';
import Products from '../screen/products/Products';
import CreateUser from '../screen/user/CreateUser';
import AddProducts from '../screen/products/AddProducts';
import AddStock from '../screen/productStock/AddStock';
import Screens from '../screen/Screens';
import StockList from '../screen/productStock/StockList';
import UserList from '../screen/user/UserList';
import FormHook from '../screen/formhook/FormHook';
import ReactHookForm from '../screen/formhook/ReactHookForm';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ViewProduct" component={ViewProduct} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="AddProducts" component={AddProducts} />
      <Stack.Screen name="AddStock" component={AddStock} />
      <Stack.Screen name="Screens" component={Screens} />
      <Stack.Screen name="StockList" component={StockList} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="FormHook" component={FormHook} />
      <Stack.Screen name="ReactHookForm" component={ReactHookForm} />
    </Stack.Navigator>
  );
}

export default MyStack;
