import { ORDER_INFO } from "../actions/types";
import { GET_ORDER_ITEM } from "../actions/types";
import { ORDER_COMPLETION } from "../actions/types";
import { ADD_HISTORY } from "../actions/types";
import { GET_PAYMENT_INFO } from "../actions/types";
import { GET_HISTORY } from "../actions/types";

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
        paymentToken: action.payload.payment_token}
      break

    case ADD_HISTORY:
      return {
        ...state, 
        getHistory: action.payload.success}
      break

    case GET_PAYMENT_INFO:
      return {
        ...state, 
        paymentSuccess: action.payload}
      break
  
    case GET_HISTORY:
      return {
        ...state, 
        historySuccess: action.payload}
      break

      default:
        return state;
  }
}