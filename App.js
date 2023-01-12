import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import MyStack from './src/navigation/MyStack';
import {Store} from './src/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
