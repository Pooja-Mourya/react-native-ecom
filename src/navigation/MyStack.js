import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/user/Login';
import ViewProduct from '../screen/products/ViewProduct';
import Products from '../screen/products/Products';
import CreateUser from '../screen/user/CreateUser';
import AddProducts from '../screen/products/AddProducts';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ViewProduct" component={ViewProduct} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="AddProducts" component={AddProducts} />
    </Stack.Navigator>
  );
}

export default MyStack;
