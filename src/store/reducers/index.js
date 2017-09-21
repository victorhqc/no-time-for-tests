import { combineReducers } from 'redux';

import cart from './cart';
import menu from './menu';

const rootReducer = combineReducers({
  cart,
  menu,
});

export default rootReducer;
