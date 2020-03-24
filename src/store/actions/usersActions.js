import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../types";
import axios from "../../services";

export const fetchUsers = (endpoint = "/users") => {
  return async dispatch => {
    dispatch({
      type: FETCH_USERS
    });
    try {
      const { data } = await axios.get(endpoint);
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_ERROR,
        payload: error.message
      });
    }
  };
};
