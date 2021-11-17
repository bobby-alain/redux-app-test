import axios from 'axios';
import { getService } from '../../services/userService';
import { SET_USER_DATA, DELETE_USER_DATA } from '../types';

export function loadUserData(userId) {
  return async (dispatch) => {
    await getService().getUserData(userId);
    // dispatch({ type: SET_USER_DATA, payload: user });

    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    dispatch({ type: SET_USER_DATA, payload: resp.data });
  };
}

export function deleteUserData(userId) {
  return async (dispatch) => {
    await getService().deleteUser(userId);
    // dispatch({ type: DELETE_USER_DATA, payload: deleteUser });

    const resp = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    dispatch({ type: DELETE_USER_DATA, payload: resp.data });
  };
}
