import React from 'react';
import PropTypes from 'prop-types';
import partial from 'lodash/partial';
import map from 'lodash/map';
import size from 'lodash/size';
import { connect } from 'react-redux';

import {
  formatPrice,
} from '../utils';

import {
  removeItem as removeItemAction,
} from '../store/actions/cart';

export const Cart = ({
  cart,
  removeItem,
}) => {
  if (!cart.items || size(cart.items) === 0) {
    return (
      <h3>Your cart is empty</h3>
    );
  }

  return (
    <div>
      <ul>
        {map(cart.items, item => (
          <li key={item.id}>
            {item.name}{': '}
            {`${formatPrice(item.price)} (${item.timesInCart})`}
            <button onClick={partial(removeItem, item)}>x</button>
          </li>
        ))}
      </ul>
      <h3>Total in Cart: {formatPrice(cart.total)}</h3>
    </div>
  );
};

Cart.defaultProps = {
  cart: {},

  removeItem: () => {},
};

Cart.propTypes = {
  cart: PropTypes.shape({
    total: PropTypes.number,
  }),

  removeItem: PropTypes.func,
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = {
  removeItem: removeItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
