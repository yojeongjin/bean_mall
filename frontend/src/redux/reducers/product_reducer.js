import { GET_PRODUCT } from "../actions/types";
import { ALL_PRODUCT } from "../actions/types";

export default function productReducer(state={}, action) {
  switch(action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      Products: action.payload.data}
      break

    case ALL_PRODUCT:
      return {
        ...state,
      AllProducts: action.payload.data}
      break

      default:
        return state;
  }
}