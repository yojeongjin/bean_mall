import { LOGIN_AUTH } from "../actions/types";

export default function (state={}, action) {
  switch(action.type) {
    case LOGIN_AUTH:
      return {...state, loginSuccess: action.payload}
      break
    
      default:
        return state;
  }
}