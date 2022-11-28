import { ORDER_INFO } from "../actions/types";
import { GET_ORDER_ITEM } from "../actions/types";
import { ORDER_COMPLETION } from "../actions/types";

export default function(state={}, action) {
  switch(action.type) {
    case ORDER_INFO:
      return {
        ...state, 
        orderInfo: action.payload}
      break

    case GET_ORDER_ITEM:
      return {
        ...state, 
        orderItem: action.payload}
      break

    case ORDER_COMPLETION:
      return {
        ...state, 
        ordered: action.payload}
      break

      default:
        return state;
  }
}