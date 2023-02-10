import connectDB from "../../../backend/connect.db"
import { setoffer } from "../../../backend/controllers/offer.controller"
import { Auth } from "../../../backend/middlewares/user.Auth.middleware"
const handler=async(req,res)=>{
    if(req.method==="PATCH"){
        return setoffer(req,res)
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(Auth(handler))