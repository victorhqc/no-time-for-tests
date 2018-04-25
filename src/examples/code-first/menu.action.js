/* eslint import/prefer-default-export: 0 */
import axios from 'axios';

import {
  FETCH_MENU_REQUESTED,
  FETCH_MENU_SUCCEEDED,
  FETCH_MENU_FAILED,
} from '../../store/constants';

const requestFetchMenu = () => ({
  type: FETCH_MENU_REQUESTED,
});

const requestFetchMenuSucceeded = items => ({
  type: FETCH_MENU_SUCCEEDED,
  payload: { items },
});

const requestFetchMenuFailed = error => ({
  type: FETCH_MENU_FAILED,
  error,
});

export const fetchMenu = () => (dispatch) => {
  dispatch(requestFetchMenu());

  return axios.get('/v1/menu', {
    baseURL: `//localhost${process.env.REACT_APP_SERVER_PORT ? `:${process.env.REACT_APP_SERVER_PORT}` : ''}`,
  })
  .then(response => dispatch(requestFetchMenuSucceeded(response.data.items)))
  .catch(e => dispatch(requestFetchMenuFailed(e)));
};
