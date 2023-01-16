import {GETMYORDER,GETPERTICULER,LODDING,POSTORDER} from "../actionTypes/order.action.types"
let init={
   myorders:[],
   isorderd:false,
   isloding:false
}

export const orderReducer=(state=init,{type,paylode})=>{
switch(type){
    case GETMYORDER:return{ ...state,myorders:[...paylode],isloding:false}
    case POSTORDER:return{...state,isorderd:true,isloding:false}
    case LODDING:return{...state,isloding:true}




    default:return state
}
}