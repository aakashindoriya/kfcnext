import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_REGISTER_FAILURE, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS } from "../actionTypes/auth.actionTypes";
import axios from "axios";


export const authRegister = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_REGISTER_REQUEST });
        const res = await axios.post("https://cultwear.onrender.com/user/register", data);
        res.data.data = { ...res.data.data, message: res.data.message };
        dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: res.data.data,
        });
    } catch (error) {
        dispatch({
            type: AUTH_REGISTER_FAILURE,
            payload: {
                message: error.response.data.message,
            },
        });
    }
}


export const authLogin = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGIN_REQUEST });
        const res = await axios.post("https://cultwear.onrender.com/user/login", data);
        res.data.data = { ...res.data.data, message: res.data.message };
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data.data });
    } catch (error) {
        dispatch({ type: AUTH_LOGIN_FAILURE, payload: { message: error.response.data.message } });
    }
}

export const authLogout = () => (dispatch) => {
    dispatch({ type: AUTH_LOGOUT });
}