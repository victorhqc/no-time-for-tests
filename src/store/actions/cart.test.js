import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../constants';

import {
  addItem,
  removeItem,
} from './cart';

describe('addItem', () => {
  it('Should add an item to the cart', () => {
    const expectedResult = {
      type: ADD_CART_ITEM,
      payload: {
        id: '1',
        price: 300,
      },
    };

    expect(addItem({
      id: '1',
      price: 300,
    })).toEqual(expectedResult);
  });
});

describe('removeItem', () => {
  it('Should remove an item from the cart', () => {
    const expectedResult = {
      type: REMOVE_CART_ITEM,
      payload: {
        id: '1',
      },
    };

    expect(removeItem({
      id: '1',
    })).toEqual(expectedResult);
  });
});
