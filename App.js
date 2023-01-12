import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import RootNavigation from './src/navigation/RootNavigation';
import Nesting from './nesting/Nesting';
const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigation />
      {/* <Nesting /> */}
    </Provider>
  );
};

export default App;
