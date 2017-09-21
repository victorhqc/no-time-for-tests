import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
  fetchMenu as fetchMenuAction,
} from '../store/actions/menu';

import {
  formatPrice,
} from '../utils';

const ItemGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
`;

const ItemCard = styled.li`
  list-style: none;
  margin: 10px 20px;
  padding: 0;
  background: white;
  box-shadow: 0 5px 5px #eaeaea;
  width: calc(33.33% - 60px);
  position: relative;
`;

const ItemImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e9e9e9;
`;

const ItemContent = styled.div`
  padding: 5px 10px;
`;

const Button = styled.button`
  background-color: lightseagreen;
  color: white;
  padding: 10px;
  outline: 0;
  border: none;
  font-size: 1.1em;
  cursor: pointer;
  margin-left: 50px;

  :hover {
    background-color: mediumseagreen;
  }

  :active {
    background-color: seagreen;
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);

    const {
      fetchMenu,
    } = this.props;

    fetchMenu();
  }

  render() {
    const {
      items,
    } = this.props;

    return (
      <div>
        <ItemGrid>
          {items.map(item => (
            <ItemCard key={item.id}>
              <ItemImage />
              <ItemContent>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <strong>{formatPrice(item.price)}</strong>
                <Button>Add to cart</Button>
              </ItemContent>
            </ItemCard>
          ))}
        </ItemGrid>
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
    }),
  ),

  fetchMenu: PropTypes.func,
};

Menu.defaultProps = {
  items: [],

  fetchMenu: () => {},
};

const mapStateToProps = state => ({
  items: state.menu.items,
});

const mapDispatchToProps = {
  fetchMenu: fetchMenuAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
