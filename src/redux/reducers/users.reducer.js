import { GET_USERS_LIST } from "../type";

const initialState = {
  users: ""
};

export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_LIST:
      const usersList = { ...state, users: payload };
      return usersList;
    default:
      return state;
  }
};
