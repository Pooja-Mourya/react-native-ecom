import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import RootNavigation from './src/navigation/RootNavigation';
const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
