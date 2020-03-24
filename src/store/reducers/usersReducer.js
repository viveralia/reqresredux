import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../types";

const initialState = {
  users: null,
  isLoading: false,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
