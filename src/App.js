import React from 'react';
import { Provider } from 'react-redux';
import Menu from './components/layout/Menu';

import './config/reactotron';
import store from './store/index';

const App = () => (
  <div>
    <Provider store={store}>
      <Menu />
    </Provider>
  </div>
);

export default App;
