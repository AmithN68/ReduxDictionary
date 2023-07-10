import { FETCH_SUCCESS, FETCH_REQUEST, FETCH_FAILURE } from "./fetchType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
