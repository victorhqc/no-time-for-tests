import deepFreeze from 'deep-freeze';

/*
Write a Reducer to handle a shopping cart. It must handle the following logic:
1. Add an item to the cart
2. Remove an item from the cart
 */

import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../constants';

import reducer from './cart';

describe('cart reducer', () => {
  it('Should return default state', () => {
    expect(reducer()).toEqual({
      items: {},
      total: 0,
    });
  });

  it('Should add an item to the cart (when item already existed)', () => {
    const initialState = {
      items: {
        1: {
          id: '1',
          price: 300,
          timesInCart: 1,
        },
        2: {
          id: '2',
          price: 200,
          timesInCart: 1,
        },
      },
      total: 500,
    };
    deepFreeze(initialState);

    const finalState = [
      {
        type: ADD_CART_ITEM,
        payload: {
          id: '1',
          price: 300,
        },
      },
    ].reduce(reducer, initialState);

    const expectedState = {
      items: {
        1: {
          id: '1',
          price: 300,
          timesInCart: 2,
        },
        2: {
          id: '2',
          price: 200,
          timesInCart: 1,
        },
      },
      total: 800,
    };

    expect(finalState).toEqual(expectedState);
  });

  it('Should add an item to the cart (when item did not exist previously)', () => {
    const initialState = {
      items: {
        2: {
          id: '2',
          price: 200,
          timesInCart: 1,
        },
      },
      total: 200,
    };
    deepFreeze(initialState);

    const finalState = [
      {
        type: ADD_CART_ITEM,
        payload: {
          id: '1',
          price: 300,
        },
      },
    ].reduce(reducer, initialState);

    const expectedState = {
      items: {
        1: {
          id: '1',
          price: 300,
          timesInCart: 1,
        },
        2: {
          id: '2',
          price: 200,
          timesInCart: 1,
        },
      },
      total: 500,
    };

    expect(finalState).toEqual(expectedState);
  });

  it('Should remove an item from the cart (when was single item)', () => {
    const initialState = {
      items: {
        1: {
          id: '1',
          price: 300,
          timesInCart: 2,
        },
        2: {
          id: '2',
          price: 200,
          timesInCart: 1,
        },
      },
      total: 800,
    };
    deepFreeze(initialState);

    const finalState = [
      {
        type: REMOVE_CART_ITEM,
        payload: {
          id: '2',
        },
      },
    ].reduce(reducer, initialState);

    const expectedState = {
      items: {
        1: {
          id: '1',
          price: 300,
          timesInCart: 2,
        },
      },
      total: 600,
    };

    expect(finalState).toEqual(expectedState);
  });

  it('Should remove an item from the cart (when is multiple item)', () => {
    const initialState = {
      items: {
        1: {
          id: '1',
          price: 300,
          timesInCart: 2,
        },
        2: {
          id: '2',
          price: 200,
          timesInCart: 1,
        },
      },
      total: 800,
    };
    deepFreeze(initialState);

    const finalState = [
      {
        type: REMOVE_CART_ITEM,
        payload: {
          id: '1',
        },
      },
    ].reduce(reducer, initialState);

    const expectedState = {
      items: {
        1: {
          id: '1',
          price: 300,
          timesInCart: 1,
        },
        2: {
          id: '2',
          price: 200,
          timesInCart: 1,
        },
      },
      total: 500,
    };

    expect(finalState).toEqual(expectedState);
  });
});
