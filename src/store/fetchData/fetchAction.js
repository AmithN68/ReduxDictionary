import { FETCH_SUCCESS, FETCH_REQUEST, FETCH_FAILURE } from "./fetchType";

export const fetchSuccess = (users) => {
    return {
        type: FETCH_SUCCESS,
        payload:users,
    };
}
export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload:error,
    };
}
export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};