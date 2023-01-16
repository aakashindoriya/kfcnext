import connectDB from "../../../backend/connect.db"
import { neworder ,GetMyProducts} from "../../../backend/controllers/order.controller"
import {Auth} from "../../../backend/middlewares/user.Auth.middleware"
const handler=async(req,res)=>{
    if(req.method==="POST"){
        
       return await neworder(req,res)
    }
    if(req.method=="GET"){
        return await GetMyProducts(req,res)
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(Auth(handler))