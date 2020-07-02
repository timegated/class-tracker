import React, {
    useReducer
} from "react";
import axios from "axios";
import PlayerContext from "./characterContext";
import playerReducer from "./characterReducer";
import {
    ADD_PLAYER_SUCCESS,
    ADD_PLAYER_FAIL
} from "../types";

const PlayerState = props => {
    const initialState = {
        characters: null,
    };

    const [state, dispatch] = useReducer(playerReducer, initialState);

    const loadCharacters = async () => {
        try {
            const res = await axios.get("/api/characters");

            dispatch({
                type: ADD_PLAYER_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ADD_PLAYER_FAIL
            });
        };
    };

    const register = async formData => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await axios.post("/api/characters", formData, config);

            dispatch({
                type: ADD_PLAYER_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ADD_PLAYER_FAIL
            });
        };
    };

    return (
        <PlayerContext.Provider value={{
            characters: state.characters,
            register,
            loadCharacters
        }}>
            {props.children}
        </PlayerContext.Provider>
    )
};

export default PlayerState;