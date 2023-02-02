import Cookies from "js-cookie"
import {ERROR,LOADING,LOGIN,LOGOUT,GETPRDERS} from "../actionTypes/admin.actionTypes"
let init={
    isLoding:false,
    isAdmin:Cookies.get("adminToken")?true:false,
    isError:false,
    adminToken:Cookies.get("adminToken")||false,
    activeOrders:[],
    neworders:[],
    completedOrders:[],
    errormessage:"",
}

export const adminAuthReducer=(state=init,{type,payload})=>{
  switch(type){
    case GETPRDERS:
      let arr1=payload.filter((el)=>el.status=="neworder")
      let arr2=payload.filter((el)=>el.status=="accepted")
      let arr3=payload.filter((el)=>el.status=="completed")
      return{
        ...state,
        isLoding:false,
        isError:false,
        neworders:[...arr1],
        completedOrders:[...arr3],
        activeOrders:[...arr2]

      }
    case LOGIN:
    Cookies.set("adminToken",payload.token)  
    return{
      ...state,
      isLoding:false,
      isAdmin:true,
      isError:false,
      adminToken:payload.token,
      
     
    }
    case LOADING:return {
      ...state,
      isLoding:true,
    }
    case ERROR:return {
      ...state,
      isLoding:false,
      isError:true,
      errormessage:payload.message
    }
    case LOGOUT:
      Cookies.remove("adminToken")
      return init
    default:return state
  }
}