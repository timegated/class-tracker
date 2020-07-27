import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem("token"),
        user: null,
        isAuthenticated: false,
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const loadUser = async () => {
        setAuthToken(localStorage.token);
        // I don't have a get route for /login lul
        // need to actually set one up here on the backend to retrieve the user data
        try {
            const res = await axios.get("/api/user");
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR
            });
        };
    };

    const register = async formData => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        try {
            const res = await axios.post("/signup", formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.msg
            });
        };
    };

    const login = async formData => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        try {
            const res = await axios.post("/login", formData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            loadUser();
        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.msg
            });
        };
    };

    const logOut = () => dispatch({ type: LOGOUT });

    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            loadUser,
            login,
            logOut,
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState;