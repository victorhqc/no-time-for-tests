import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'jest-styled-components';

import CartComponent, { Cart } from './Cart';

const cartWrapper = props => shallow(<Cart {...props} />);
const cartComponentWrapper = props => shallow(<CartComponent {...props} />);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const testAction = () => ({ type: 'test' });

jest.mock('../store/actions/cart');
const {
  removeItem,
} = require('../store/actions/cart');

removeItem.mockImplementation(testAction);

describe('Cart', () => {
  afterEach(() => {
    removeItem.mockClear();
  });

  it('renders', () => {
    expect(cartWrapper()).toMatchSnapshot();
  });

  it('render items from cart', () => {
    const component = cartWrapper({
      cart: {
        items: {
          1: {
            id: '1',
            name: 'foo',
            price: 1000,
            timesInCart: 1,
          },
          2: {
            id: '2',
            name: 'bar',
            price: 1500,
            timesInCart: 2,
          },
        },
      },
    });

    expect(component).toMatchSnapshot();
  });

  it('render total amount in cart', () => {
    const component = cartWrapper({
      cart: {
        items: {
          1: {
            id: '1',
            name: 'foo',
            price: 10000,
            timesInCart: 2,
          },
        },
        total: 20000,
      },
    });

    expect(component).toMatchSnapshot();
  });

  it('should pass the cart as props', () => {
    const store = mockStore({
      cart: {
        items: {
          1: { id: '1', name: 'foo' },
        },
      },
    });

    const component = cartComponentWrapper({
      store,
    });

    expect(
      component.props().cart,
    ).toEqual({
      items: {
        1: { id: '1', name: 'foo' },
      },
    });
  });

  it('Should map the `removeItem` action to props', () => {
    const store = mockStore({});

    const component = cartComponentWrapper({
      store,
    });

    component.props().removeItem({ foo: 'bar' });

    expect(
      removeItem,
    ).toHaveBeenCalledTimes(1);

    expect(
      removeItem,
    ).toHaveBeenCalledWith({ foo: 'bar' });
  });

  it('remove button should call `removeItem` prop', () => {
    const removeItemSpy = jest.fn();

    const component = cartWrapper({
      removeItem: removeItemSpy,
      cart: {
        items: {
          1: {
            id: '1',
            name: 'foo',
            price: 1000,
            timesInCart: 1,
          },
          2: {
            id: '2',
            name: 'bar',
            price: 1500,
            timesInCart: 2,
          },
        },
      },
    });

    component.find('button').first().simulate('click');

    expect(removeItemSpy).toHaveBeenCalledTimes(1);

    expect(removeItemSpy).toHaveBeenCalledWith({
      id: '1',
      name: 'foo',
      price: 1000,
      timesInCart: 1,
    });
  });
});
