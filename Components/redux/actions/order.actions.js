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
creds.toast({
    title: `Thanks for your order`,
    description: "we will let you know about order status in a while",
    status: "success",
    duration: 2000,
    isClosable: true,
    position:"top"
})
 dispatch(getCart())
 return dispatch({type:POSTORDER})
}catch(e){
console.log(e)
dispatch({type:"error"})
}
}