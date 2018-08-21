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
  it('Should add an item to the cart (when item already existed)', () => {});

  it('Should add an item to the cart (when item did not exist previously)', () => {});

  it('Should remove an item from the cart (when was single item)', () => {});

  it('Should remove an item from the cart (when is multiple item)', () => {});
});
