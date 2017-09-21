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
  it('Should fetch menus', () => {
    const items = [
      { foo: 'bar' },
      { baz: 'ho' },
    ];

    mock.onGet('/v1/menu').replyOnce(200, {
      items,
    });

    const expectedActions = [
      { type: FETCH_MENU_REQUESTED },
      { type: FETCH_MENU_SUCCEEDED, payload: { items } },
    ];

    const { dispatch, getActions } = mockStore({});

    return dispatch(fetchMenu()).then(() => {
      expect(getActions()).toEqual(expectedActions);
    });
  });

  it('Should handle unexpected errors', () => {
    const error = new Error('Request failed with status code 500');

    mock.onGet('/v1/menu').replyOnce(500, {
      error,
    });

    const expectedActions = [
      { type: FETCH_MENU_REQUESTED },
      { type: FETCH_MENU_FAILED, error },
    ];

    const { dispatch, getActions } = mockStore({});

    return dispatch(fetchMenu()).then(() => {
      expect(getActions()).toEqual(expectedActions);
    });
  });
});
