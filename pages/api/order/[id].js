import connectDB from "../../../backend/connect.db"
import { GetPerticulerOrder} from "../../../backend/controllers/order.controller"
import {Auth} from "../../../backend/middlewares/user.Auth.middleware"
const handler=async(req,res)=>{
    if(req.method==="GET"){
       let data=await GetPerticulerOrder(req,res)
       
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(Auth(handler))