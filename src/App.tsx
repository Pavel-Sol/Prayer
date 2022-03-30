import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';

import {RootStack} from './navigation/RootStack';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
