import { getService } from '../../services/userService';
import { SET_USER_DATA } from '../types';

export function loadUserData(userId) {
  return async (dispatch) => {
    const user = await getService().getUserData(userId);
    dispatch({ type: SET_USER_DATA, userData: user });
  };
}

// export function deleteUserData(userId) {
//   return async (dispatch) => {
//     await getService().deleteUser(userId);
//     dispatch({ type: DELETE_USER_DATA, userId: userId });
//   };
// }
