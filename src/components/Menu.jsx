import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchMenu as fetchMenuAction,
} from '../store/actions/menu';

class Menu extends Component {
  constructor(props) {
    super(props);

    const {
      fetchMenu,
    } = this.props;

    fetchMenu();
  }

  render() {
    return (
      <div>Menu</div>
    );
  }
}

Menu.propTypes = {
  fetchMenu: PropTypes.func,
};

Menu.defaultProps = {
  fetchMenu: () => {},
};

const mapStateToProps = state => ({
  items: state.menu.items,
});

const mapDispatchToProps = {
  fetchMenu: fetchMenuAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
