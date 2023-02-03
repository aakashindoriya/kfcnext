import axios from "axios";
import Cookies from "js-cookie";
import {ERROR,LOADING,LOGIN,LOGOUT,GETPRDERS} from "../actionTypes/admin.actionTypes"

export const AdminAuth = (data) => async (dispatch) => {
    try {
        
        dispatch({ type: LOADING });
        const res = await axios.post("../api/adminlogin", data);
        data.toast({
            title: `Welcome to KFC`,
            description: "welcome Admin",
            status: "success",
            duration: 2000,
            isClosable: true,
            position:"top"
        })
        dispatch({ type: LOGIN, payload: res.data });
    } catch (error) {
        const res = await axios.post("../api/adminlogin", data);
        dispatch({ type: ERROR, payload: { message: error.response.data } });
    }
}

export const authLogout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
}


export const getorders=()=>async(dispatch)=>{
    try{
        dispatch({ type: LOADING });
        const res=await axios.get("../api/getallorders",{
            headers:{
                "Authorization":Cookies.get("adminToken")
            }
        })
        
        return dispatch({type:GETPRDERS,payload:res.data})
    }catch(error){
        dispatch({ type: ERROR, payload: { message: error.response.data } });
    }
}

export const ChangeStatus=(prop)=>async(dispatch)=>{
    try{
        dispatch({ type: LOADING });
        const res=await axios.patch(`../api/order/${prop.id}`,{...prop},{
            headers:{
                "Authorization":Cookies.get("adminToken")
            }
        })
        console.log(res)
        return dispatch(getorders())
    }catch(error){
        dispatch({ type: ERROR, payload: { message: error.response.data } });
    }
}