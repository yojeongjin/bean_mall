import { ADD_TO_BOARD } from "../actions/types";
import { GET_LIST } from "../actions/types";

export default function (state={}, action) {
  switch(action.type) {
    case ADD_TO_BOARD:
      return {
        ...state,
      addSuccess: action.payload}
      break

    case GET_LIST:
      return {
        ...state,
      getList: action.payload}
      break

      default:
        return state;
  }
}