import {
    ADD_PLAYER_SUCCESS,
    ADD_PLAYER_FAIL,
    UPDATE_PLAYER,
    DELETE_PLAYER
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_PLAYER_SUCCESS:
            return {
                ...state,
                characters: action.payload
            };
        case ADD_PLAYER_FAIL:
            return {
                ...state,
                msg: "Failed to add player"
            };
        case UPDATE_PLAYER:
            return {
                ...state
            };
        case DELETE_PLAYER:
            return {
                ...state
            };
        default:
            return state
    };
};