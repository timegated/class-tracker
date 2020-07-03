import {
    ADD_CHARACTER_SUCCESS,
    ADD_CHARACTER_FAIL,
    UPDATE_CHARACTER,
    DELETE_CHARACTER
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_CHARACTER_SUCCESS:
            return {
                ...state,
                characters: action.payload
            };
        case ADD_CHARACTER_FAIL:
            return {
                ...state,
                msg: "Failed to add character."
            };
        case UPDATE_CHARACTER:
            return {
                ...state
            };
        case DELETE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(
                    character => character._id !== action.payload
                ),
            };
        default:
            return state
    };
};