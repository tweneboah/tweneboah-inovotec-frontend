import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../usersActionTypes';
import axios from 'axios';
import baseURL from '../../../utils/baseUrl';
const registerUserAction = (name, email, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = {
        header: {
          'Content-Type': 'application/json',
        },
      };
      const data = await axios.post(
        `${baseURL}/api/users/register`,
        {
          name,
          email,
          password,
        },
        config
      );
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export default { registerUserAction };
