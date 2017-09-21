/* eslint import/prefer-default-export: 0 */
import axios from 'axios';

import {
  FETCH_MENU_REQUESTED,
  FETCH_MENU_SUCCEEDED,
  FETCH_MENU_FAILED,
} from '../constants';

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

  axios.get('/v1/menu')
  .then(response => requestFetchMenuSucceeded(response.data.items))
  .catch(requestFetchMenuFailed);
};
