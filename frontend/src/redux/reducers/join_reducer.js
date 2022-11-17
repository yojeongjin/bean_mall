import { JOIN_AUTH } from "../actions/types";

export default function (state={}, action) {
  switch(action.type) {
    case JOIN_AUTH:
      return {
        ...state, 
        joinSuccess: action.payload,
      userID: action.payload.userIdx}
      break

      default:
        return state;
  }
}