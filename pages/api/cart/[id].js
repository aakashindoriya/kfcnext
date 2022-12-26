import connectDB from "../../../backend/connect.db"
import { AddToCart, ChangeQuantity, DeleteItem, GetCart } from "../../../backend/controllers/cart.cantrollers"
import { Auth } from "../../../backend/middlewares/user.Auth.middleware"
const handler=async(req,res)=>{
    if(req.method==="GET"){
       let data=await GetCart(req,res)
       return data
    }
    if(req.method==="POST"){
        return await AddToCart(req,res)
    }
    if(req.method==="PUT"){
        return await ChangeQuantity(req,res)
    }
    if(req.method==="DELETE"){
        return await DeleteItem(req,res)
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(Auth(handler))