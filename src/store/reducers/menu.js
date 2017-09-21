import compose from 'lodash/fp/compose';
import curry from 'lodash/fp/curry';
import merge from 'lodash/fp/merge';

import {
  FETCH_MENU_REQUESTED,
  FETCH_MENU_SUCCEEDED,
  FETCH_MENU_FAILED,
} from '../constants';

import {
  waitRequest,
  addError,
  finishRequest,
} from '../../utils';

const setItems = (items = []) => ({
  items,
});

const cart = (state = setItems(), action = {}) => {
  switch (action.type) {
    case FETCH_MENU_REQUESTED:
      return compose(
        // 3. Set the error to null
        curry(addError)(null),
        // 2. Reset items
        curry(merge)(setItems()),
        // 1. Set is fetching to true
        waitRequest,
      )(state);
    case FETCH_MENU_SUCCEEDED:
      return compose(
        // 2. Set the items
        curry(merge)(setItems(action.payload.items)),
        // 1. Set is fetching to false
        finishRequest,
      )(state);
    case FETCH_MENU_FAILED:
      return compose(
        // 2. Set the error
        curry(addError)(action.error),
        // 1. Set is fetching to false
        finishRequest,
      )(state);
    default:
      return state;
  }
};

export default cart;
