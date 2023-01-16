import { LODDING ,POSTORDER} from "../actionTypes/order.action.types"
import axios from "axios"
import Cookies from "js-cookie"
export const PostOrder=(creds)=>async(dispatch)=>{
try{
dispatch({type:LODDING})

 let data= await axios.post("../../api/order",{...creds},{ 
    headers: {
        Authorization: Cookies.get("token"),
    }
});
 dispatch({type:POSTORDER})
}catch(e){
console.log(e)
}
}