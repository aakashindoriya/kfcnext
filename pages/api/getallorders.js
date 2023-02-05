import connectDB from "../../backend/connect.db"
import { Allorder } from "../../backend/controllers/order.controller"
import Order from "../../backend/mdels/order.model"
import Cart from "../../backend/mdels/cart.model"
import Product from "../../backend/mdels/kfcproduc.model"
import User from "../../backend/mdels/user.model"

const handler=async(req,res)=>{
    if(req.method==="GET"){
        
       let data=await Allorder(req,res)
       return data
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(handler)