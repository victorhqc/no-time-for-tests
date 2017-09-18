import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store';

import Cart from './Cart';

import './style.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Cart />
  </Provider>
);

export default App;
