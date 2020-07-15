import React, {
    useReducer
} from "react";
import axios from "axios";
import CharacterContext from "./characterContext";
import characterReducer from "./characterReducer";
import {
    ADD_CHARACTER_SUCCESS,
    ADD_CHARACTER_FAIL,
    CHAR_LOADED,
    DELETE_CHARACTER,
    CHAR_LOADED_FAIL
} from "../types";

const CharacterState = props => {
    const initialState = {
        characters: null,
    };

    const [state, dispatch] = useReducer(characterReducer, initialState);

    const loadCharacters = async () => {
        try {
            const res = await axios.get("/api/characters");

            dispatch({
                type: CHAR_LOADED,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: CHAR_LOADED_FAIL
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
                type: ADD_CHARACTER_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ADD_CHARACTER_FAIL
            });
        };
    };
    const deleteCharacter = async id => {
        try {
            await axios.delete(`/api/characters/${id}`);
            dispatch({
                type: DELETE_CHARACTER
            })
        } catch (error) {
            
        }
    };
    return (
        <CharacterContext.Provider value={{
            characters: state.characters,
            register,
            loadCharacters,
            deleteCharacter
        }}>
            {props.children}
        </CharacterContext.Provider>
    )
};

export default CharacterState;