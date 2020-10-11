import React, { useReducer } from "react";
import axios from "axios";
import CurrentContext from "./currentContext";
import currentReducer from "./currentReducer";
import {
  CURRENT_ITEM_ADD,
  CURRENT_LOADED,
  CURRENT_LOADED_FAIL
} from "../types";

const CurrentState = props => {
  const initialState = {
    currentItems: null,
  }

  const [state, dispatch] = useReducer(currentReducer, initialState);

  const loadCurrent = async () => {
    try {
      const res = await axios.get("/api/current");
      dispatch({
        type: CURRENT_LOADED,
        payload: res.data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: CURRENT_LOADED_FAIL
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
    <CurrentContext.Provider
      value={{
        currentItems: state.items,
        loadCurrent,
        addCurrentItem,
      }}
    >
      {props.children}
    </CurrentContext.Provider>
  )
}

export default CurrentState;