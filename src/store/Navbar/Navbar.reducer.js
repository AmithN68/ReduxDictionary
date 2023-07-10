import { HANDLE_SEARCH } from "./Navbar.type";

const initialState = {
  search: "",
  previousSearch: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SEARCH:
      return {...state,search:action.payload};
    default:
      state;
  }
};
