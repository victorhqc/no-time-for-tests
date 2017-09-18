/*
Write a Reducer to handle a shopping cart. It must handle the following logic:
1. Add an item to the cart
2. Remove an item from the cart
3. Edit the amount of an item in the cart.
4. Finish the purhcase (clean the cart).
 */

import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  FINISH_PURCHASE,
} from '../constants';

const cart = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cart;
