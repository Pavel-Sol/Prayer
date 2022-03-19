import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';

import RootStack from './navigation/RootStack';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
