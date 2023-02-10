import connectDB from "../../../backend/connect.db"
import { getalloffers } from "../../../backend/controllers/offer.controller"
const handler=async(req,res)=>{
   if(req.method=="GET"){
    return getalloffers(req,res)
   }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(handler)