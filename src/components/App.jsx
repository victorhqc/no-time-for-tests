import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store';

import Cart from './Cart';
import Menu from './Menu';

import './style.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <Cart />
      <Menu />
    </div>
  </Provider>
);

export default App;
