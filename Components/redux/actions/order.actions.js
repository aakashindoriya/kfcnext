import { LODDING ,POSTORDER} from "../actionTypes/order.action.types"
import axios from "axios"
import Cookies from "js-cookie"
import { getCart } from "./cart.actions"
export const PostOrder=(creds)=>async(dispatch)=>{
try{
dispatch({type:LODDING})
let arr=[]
for(let i=0;i<creds.carts.length;i++){
    arr.push(creds.carts[i]._id)
}
creds.carts=arr
 let data= await axios.post("../../api/order",{...creds},{ 
    headers: {
        Authorization: Cookies.get("token"),
    }
});
getCart()
 dispatch({type:POSTORDER})
}catch(e){
console.log(e)
}
}