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

export const Cart = ({}) => {
  return null;
};

Cart.defaultProps = {
  cart: {},

  removeItem: () => {},
};

Cart.propTypes = {
  cart: PropTypes.shape({
    total: PropTypes.number,
    items: PropTypes.shape({}),
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
