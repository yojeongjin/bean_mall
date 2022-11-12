import { ADD_TO_CART } from "../actions/types";
import { GET_CART } from "../actions/types";
import { PATCH_CART } from "../actions/types";
import { DELETE_CART } from "../actions/types";

export default function (state={}, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state, 
        cart: action.payload.data}
      break
    case GET_CART:
      return {
        ...state, 
        getCartInfo: action.payload,
        cart: action.payload.length}
      break

    case PATCH_CART:
      return {
        ...state, 
        getCartInfo: action.payload}
      break
    
    case DELETE_CART:
      return {...state}
      break
    
      default:
        return state;
  }
}