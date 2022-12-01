import { ADD_TO_CART } from "../actions/types";
import { GET_CART } from "../actions/types";
import { PATCH_CART } from "../actions/types";
import { DELETE_CART } from "../actions/types";
import { VERIFIED_AUTH } from "../actions/types"
import { DELETE_ALL_CART } from "../actions/types";

import { PURGE } from 'redux-persist'

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
      
    case VERIFIED_AUTH:
      return {
        ...state, 
        userName: action.payload.result.UserName,
        idUser: action.payload.result.userIdx}
      break

    case DELETE_ALL_CART:
      return {...state,
      cart: 0}

    case PURGE:
      return {}
      break
    
      default:
        return state;
  }
}