import { LOGIN_AUTH } from "../actions/types";
import { LOGOUT_AUTH } from "../actions/types";


export default function (state={}, action) {
  switch(action.type) {
    case LOGIN_AUTH:
      return {
        ...state, 
        loginSuccess: action.payload}
      break
    
    case LOGOUT_AUTH:
      return {
        ...state, 
        token: null }
      break
    
      default:
        return state;
  }
}