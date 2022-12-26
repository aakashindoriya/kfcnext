import axios from "axios";
import {GETPRODUCTS_ERROR,GETPRODUCTS_LODING,GETPRODUCTS_SUCCESS} from "../actionTypes/menu.actiontypes"

export const getmenu = () => async (dispatch) => {
    try {
        
        dispatch({ type: GETPRODUCTS_LODING });
        const res = await axios.get("../../api/product");
        dispatch({ type: GETPRODUCTS_SUCCESS, paylode: res.data });
    } catch (error) {
        dispatch({ type: GETPRODUCTS_ERROR, payload: { message: error.response.data } });
    }
}