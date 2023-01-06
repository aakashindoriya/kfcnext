import {GETPRODUCTS_ERROR,GETPRODUCTS_LODING,GETPRODUCTS_SUCCESS} from "../actionTypes/menu.actiontypes"

let init={
    data:[],
    chicken:[],
    launch:[],
    boxmeals:[],
    burger:[],
    biryani:[],
    rolls:[],
    beverages:[],
    stayhome:[],
    isLoding:false,
    iserror:false,
}

export const menuReducer=(state=init,{type,paylode})=>{
   switch(type){
    case GETPRODUCTS_LODING:return{...state,isLoding:true}
    case GETPRODUCTS_SUCCESS: 
                let c=paylode.filter((el)=>el.type=="chicken")
                let l=paylode.filter((el)=>el.type=="launch")
                let bo=paylode.filter((el)=>el.type=="boxmeals")
                let bu=paylode.filter((el)=>el.type=="burger")
                let bi=paylode.filter((el)=>el.type=="biryani")
                let ro=paylode.filter((el)=>el.type=="rolls")
                let bvg=paylode.filter((el)=>el.type=="beverages")
                let sty=paylode.filter((el)=>el.type=="stayhome")
             return{...state,
                data:[...paylode],
                chicken:[...c],
                boxmeals:[...bo],
                launch:[...l],
                biryani:[...bi],
                rolls:[...ro],
                beverages:[...bvg],
                stayhome:[...sty],
                burger:[...bu],
                isLoding:false
            }
        case GETPRODUCTS_ERROR:return{...state,isLoding:false,iserror:true}
    default:return state
   }
}