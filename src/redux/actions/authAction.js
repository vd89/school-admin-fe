/* eslint-disable import/prefer-default-export */
import appApi from '../../../utils/api';
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../types';

// Login admin
export const loginAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await appApi.post('/admin/login', formData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({ type: LOGIN_FAIL });
  }
};
