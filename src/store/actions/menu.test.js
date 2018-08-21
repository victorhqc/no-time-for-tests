import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  fetchMenu,
} from './menu';

import {
  FETCH_MENU_REQUESTED,
  FETCH_MENU_SUCCEEDED,
  FETCH_MENU_FAILED,
} from '../constants';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchMenu', () => {
  it('Should fetch menus', () => {});

  it('Should handle unexpected errors', () => {});
});
