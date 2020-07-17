import React, { useReducer } from "react";
import axios from "axios";
import ItemContext from "./itemContext";
import itemReducer from "./itemReducer";
import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  ITEMS_LOADED,
  ITEMS_LOADED_FAIL,
  UPDATE_ITEM,
  DELETE_ITEM
} from "../types";

const ItemState = props => {
  const initialState = {
    items: null,
  }

  const [state, dispatch] = useReducer(itemReducer, initialState);

  const loadItems = async () => {
    try {
      const res = await axios.get("/api/items");
      dispatch({
        type: ITEMS_LOADED,
        payload: res.data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: ITEMS_LOADED_FAIL
      });
    }
  };

  const addItem = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const res = axios.post("/api/items", formData, config);
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      console.error(error);
      dispatch({
        type: ADD_ITEM_FAIL
      });
    }
  };





  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        loadItems,
        addItem,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  )
}

export default ItemState;