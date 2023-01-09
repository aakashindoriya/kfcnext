import {DeleteProduct, UpdateProduct} from "../../../backend/controllers/product.controller"
import connectDB from "../../../backend/connect.db"
const handler=async(req,res)=>{
    if(req.method==="PATCH"){
        return await UpdateProduct(req,res)
    }
    if(req.method==="DELETE"){
        return await DeleteProduct(req,res)
    }
    return res.status(500).send("page not found")
   
    
   }
   export default connectDB(handler)