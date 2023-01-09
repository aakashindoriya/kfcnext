import { GetProducts,  Uplodeproduct } from "../../../backend/controllers/product.controller"
import connectDB from "../../../backend/connect.db"
const handler=async(req,res)=>{
    if(req.method==="POST"){
       let data=await Uplodeproduct(req,res)
    }
    if(req.method==="GET"){
        return await GetProducts(req,res)
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(handler)