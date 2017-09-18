import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

const enhancer = () => applyMiddleware(
  thunkMiddleware,
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
