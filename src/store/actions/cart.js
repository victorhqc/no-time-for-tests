import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../constants';

export const addItem = item => ({
  type: ADD_CART_ITEM,
  payload: {
    ...item,
  },
});

export const removeItem = item => ({
  type: REMOVE_CART_ITEM,
  payload: {
    ...item,
  },
});
