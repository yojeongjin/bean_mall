import { GET_PRODUCT } from "../actions/types";
import { ALL_PRODUCT } from "../actions/types";

export default function (state={}, action) {
  switch(action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      Products: action.payload}
      break

    case ALL_PRODUCT:
      return {
        ...state,
      AllProducts: action.payload}
      break

      default:
        return state;
  }
}