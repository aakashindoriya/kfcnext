import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_REGISTER_FAILURE, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS } from "../actionTypes/auth.actionTypes";
import axios from "axios";
import Cookies from "js-cookie";

export const authRegister = (data) => async (dispatch) => {
   
    try {
        dispatch({ type: AUTH_REGISTER_REQUEST });
        const res = await axios.post("../api/user/signup", {...data.data})
        Cookies.set("user",JSON.stringify({...data.data}))
        data.toast({
            title: `Welcome to KFC`,
            description: "Registration successfull",
            status: "success",
            duration: 2000,
            isClosable: true,
            position:"top"
        });
        data.router.push("/home/login");
        return dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error)
        return dispatch({
            type: AUTH_REGISTER_FAILURE,
            payload: {
                message: error.response.data,
            },
        });
    }
}


export const authLogin = (data) => async (dispatch) => {
    try {
        
        dispatch({ type: AUTH_LOGIN_REQUEST });
        const res = await axios.post("../api/user/login", data);
        Cookies.set("useremail",data.email)
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
        
        dispatch({ type: AUTH_LOGIN_FAILURE, payload: { message: error.response.data } });
    }
}

export const authLogout = () => (dispatch) => {
    Cookies.remove("useremail")
    dispatch({ type: AUTH_LOGOUT });
}