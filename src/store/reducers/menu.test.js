/*
Write a Reducer to handle receiving menu items. It must handle the following logic:
1. Wait for the items
2. Set the items
3. Handle an unexpected error
 */
import deepFreeze from 'deep-freeze';

import {
 FETCH_MENU_REQUESTED,
 FETCH_MENU_SUCCEEDED,
 FETCH_MENU_FAILED,
} from '../constants';

import reducer from './menu';

describe('menu reducer', () => {
  it('Should return default state', () => {
    expect(reducer()).toEqual({
      items: [],
    });
  });

  it('Should wait for the items', () => {
    const finalState = [
      { type: FETCH_MENU_REQUESTED },
    ].reduce(reducer, undefined);

    const expectedState = {
      items: [],
      isFetching: true,
      error: null,
    };

    expect(finalState).toEqual(expectedState);
  });

  it('Should wait for the items when there were already items in store', () => {
    const initialState = {
      items: [
        { foo: 'bar' },
      ],
      isFetching: true,
      error: null,
    };
    deepFreeze(initialState);

    const finalState = [
      { type: FETCH_MENU_REQUESTED },
    ].reduce(reducer, undefined);

    const expectedState = {
      items: [],
      isFetching: true,
      error: null,
    };

    expect(finalState).toEqual(expectedState);
  });

  it('Should set the items', () => {
    const items = [
      { foo: 'bar' },
      { baz: 'ho' },
    ];

    const finalState = [
      { type: FETCH_MENU_REQUESTED },
      { type: FETCH_MENU_SUCCEEDED, payload: { items } },
    ].reduce(reducer, undefined);

    const expectedState = {
      items,
      isFetching: false,
      error: null,
    };

    expect(finalState).toEqual(expectedState);
  });

  it('Should handle an unexpected error', () => {
    const error = 'server exploaded!';

    const finalState = [
      { type: FETCH_MENU_REQUESTED },
      { type: FETCH_MENU_FAILED, error },
    ].reduce(reducer, undefined);

    const expectedState = {
      items: [],
      isFetching: false,
      error,
    };

    expect(finalState).toEqual(expectedState);
  });
});
