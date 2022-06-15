import { GET_USERS_LIST } from "../type";

export const getUsersList = (data) => ({
  type: GET_USERS_LIST,
  payload: data
});
