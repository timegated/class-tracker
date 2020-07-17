import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from "../types"

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            console.log("From user_loaded(authReducer): ", state);
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            // localStorage.setItem("token", action.payload.token);
            console.log("From login_success(authReducer): ", state)
            return {
                ...state,
                ...action.payload,
                token: action.payload.token,
                isAuthenticated: true,
                loading: false,
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("token");
            console.log("Logout(authReducer): ", state);
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    };
};