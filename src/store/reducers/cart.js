import compose from 'lodash/fp/compose';
import curryRight from 'lodash/fp/curryRight';
import curry from 'lodash/fp/curry';
import pickBy from 'lodash/pickBy';
import find from 'lodash/find';

import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../constants';

const defaultState = {
  items: {},
  total: 0,
};

const addItem = (state, action) => ({
  ...state,
  [action.id]: {
    id: action.id,
    price: action.price,
    timesInCart: (state[action.id] || { timesInCart: 0 }).timesInCart + 1,
  },
});

const updateItems = (state, action) => ({
  ...state,
  [action.id]: state[action.id].timesInCart === 1
  ? undefined
  : {
    ...state[action.id],
    timesInCart: state[action.id].timesInCart - 1,
  },
});

const addItems = (state, items) => ({
  ...state,
  items,
});

const addPrice = (state, action) => ({
  ...state,
  total: state.total + action.price,
});

const removePrive = (state, item) => ({
  ...state,
  total: state.total - item.price,
});

const filterInvalidItems = state => pickBy(state, item => item);

const removeItemAndRemovePrive = (state, item) => compose(
  // 3. Remove price from state
  curryRight(removePrive)(item),
  // 2. put item list back into state
  curry(addItems)(state),
  // 3. Filter possible `undefined` items
  filterInvalidItems,
  // 1. Update items
  curryRight(updateItems)(item),
)(state.items);

const findItem = (state, action) => find(state, item => item.id === action.id);

const cart = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return compose(
        // 3. Add price to total
        curryRight(addPrice)(action.payload),
        // 2. Put item list back into state
        curry(addItems)(state),
        // 1. Adds item to item list
        curryRight(addItem)(action.payload),
      )(state.items);

    case REMOVE_CART_ITEM:
      return compose(
        // 2. Substract price from total and update items
        curry(removeItemAndRemovePrive)(state),
        // 1. Find item in state
        curryRight(findItem)(action.payload),
      )(state.items);
    default:
      return state;
  }
};

export default cart;
