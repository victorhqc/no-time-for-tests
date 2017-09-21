import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const enhancer = () => composeWithDevTools(applyMiddleware(
  thunkMiddleware,
));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer());
}
