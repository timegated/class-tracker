import {
  CURRENT_ITEM_ADD,
  CURRENT_LOADED,
  CURRENT_LOADED_FAIL,
  ADD_CURRENT_SUCCESS,
  ADD_CURRENT_FAIL,
  UPDATE_CURRENT,
  DELETE_CURRENT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CURRENT_ITEM_ADD:
    case ADD_CURRENT_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case CURRENT_LOADED:
      return {
        ...state,
        items: action.payload
      };
    case ADD_CURRENT_FAIL:
      return {
        ...state,
        msg: "Failed to add item."
      };
    case CURRENT_LOADED_FAIL:
      return {
        ...state,
        msg: "Failed to load item"
      };
    case UPDATE_CURRENT:
      return {
        ...state
      };
    case DELETE_CURRENT:
      return {
        ...state,
        items: state.item.docs.filter(
          item => item._id !== action.payload
        ),
      };
    default:
      return state
  };
};