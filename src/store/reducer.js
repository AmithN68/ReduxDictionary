import { combineReducers } from "redux";
import { fetchReducer } from "./fetchData/fetchReducer";


export const Reducer = combineReducers({
    data:fetchReducer,
}); 