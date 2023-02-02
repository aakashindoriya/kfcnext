import connectDB from "../../backend/connect.db"
import { adminLogin } from "../../backend/controllers/admin.cantroller"
const handler=async(req,res)=>{
    if(req.method==="POST"){
       let data=await adminLogin(req,res)
       return data
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(handler)