import { combineReducers } from "redux";
import { ADD_TO_DISPLAY } from "../actions";

const initialMoviesState = {
  checked: false,
};
export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_TO_DISPLAY:
      return {
        ...state,
        checked: true,
      };
    default:
      return state;
  }
}
