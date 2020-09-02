import React, { useReducer } from "react";
import axios from "axios";
import ItemContext from "./itemContext";
import itemReducer from "./itemReducer";
import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  ITEMS_LOADED,
  ITEMS_LOADED_FAIL,
  CURRENT_ITEM_ADD,
} from "../types";

const ItemState = props => {
  const initialState = {
    items: null,
    currentItems: null,
  }

  const [state, dispatch] = useReducer(itemReducer, initialState);

  const loadFromDB = async () => {
    try {

    } catch (error) {
      
    }
  }
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

  const addCurrentItem = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = axios.post("/api/current", formData, config);
      dispatch({
        type: CURRENT_ITEM_ADD,
        payload: res.data
      })
    } catch (error) {
      console.error(error);
    }
}


  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        loadItems,
        addCurrentItem,
        addItem,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  )
}

export default ItemState;