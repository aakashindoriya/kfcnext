import connectDB from "../../../backend/connect.db"
import {userLogin} from "../../../backend/controllers/user.controller"
const handler=async(req,res)=>{
    if(req.method==="POST"){
       let data=await userLogin(req,res)
       return data
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(handler)