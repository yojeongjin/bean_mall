import { JOIN_AUTH } from "../actions/types";
import { GET_USER } from "../actions/types";

export default function (state={}, action) {
  switch(action.type) {
    case JOIN_AUTH:
      return {
        ...state, 
        joinSuccess: action.payload,
      userID: action.payload.userIdx}
      break

      case GET_USER:
        return {
          ...state, 
        userInfo: action.payload}
        break

      default:
        return state;
  }
}