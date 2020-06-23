import React, {
    useReducer
} from "react";
import axios from "axios";
import PlayerContext from "./playerContext";
import playerReducer from "./playerReducer";
import {
    ADD_PLAYER_SUCCESS,
    ADD_PLAYER_FAIL,
    UPDATE_PLAYER,
    DELETE_PLAYER
} from "../types";

const PlayerState = props => {
    const initialState = {
        player: null,
    };

    const [state, dispatch] = useReducer(playerReducer, initialState);

    const loadPlayer = async () => {
        try {
            const res = await axios.get("/api/players");

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
                "Content-type": "application/json"
            }
        };
        try {
            const res = await axios.post("/api/players", formData, config);
            
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
            player: state.player,
            register
        }}>
            {props.children}
        </PlayerContext.Provider>
    )
};

export default PlayerState;