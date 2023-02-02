import connectDB from "../../backend/connect.db"
import { Allorder } from "../../backend/controllers/order.controller"

const handler=async(req,res)=>{
    if(req.method==="GET"){
        
       let data=await Allorder(req,res)
       return data
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(handler)