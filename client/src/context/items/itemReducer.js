import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  ITEMS_LOADED,
  ITEMS_LOADED_FAIL,
  UPDATE_ITEM,
  DELETE_ITEM,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case ITEMS_LOADED:
      return {
        ...state,
        items: action.payload
      };
    case ADD_ITEM_FAIL:
      return {
        ...state,
        msg: "Failed to add item."
      };
    case ITEMS_LOADED_FAIL:
      return {
        ...state,
        msg: "Failed to load item"
      };
    case UPDATE_ITEM:
      return {
        ...state
      };
    case DELETE_ITEM:
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