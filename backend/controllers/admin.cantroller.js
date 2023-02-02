import User from "../mdels/user.model"
import {sign} from "jsonwebtoken"
export const adminLogin=(async(req,res)=>{
    let {email,password}=req.body
    try{
        let user=await User.findOne({email,password,role:"admin"})
 
        if(user){
          
            let token=sign({id:user._id,email:user.email,role:user.role},process.env.TokenSecret,{expiresIn:"7 days"})
           
        return res.status(201).send({message:"login sucessfull",token})
            
        
        
        }else{
            return res.status(404).send("user not found")
        }

    }catch(e){
       
        res.status(401).send(e.message)
    }
    
})