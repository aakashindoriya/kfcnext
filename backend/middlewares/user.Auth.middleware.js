
import {verify} from "jsonwebtoken"
import User from "../mdels/user.model"
import dustbin from "../mdels/dustbin.model"
export const Auth=handler=>async (req,res,next)=>{
    
    let token=req.headers["authorization"]
    if(!token){
      return  res.status(404).send("You can not perform this action")
    }
    try{
        let blaclist=await dustbin.findOne({token})
        if(blaclist){
            return res.status(401).send("invalid token")
        }
        let varification=verify(token,process.env.TokenSecret)
        if(varification){
            
            req.userType=varification.role
            req.userId=varification.id
            return handler(req, res)
        }else{
            res.status(401).send("invalid token")
        }
    }catch(e){
        if(e.message=="jwt expired"){
           try{
            let black= await dustbin.create({token})
           }catch(e){
            return res.status(404).send(e.message)
        }
        }
        return res.status(404).send(e.message)
    }
     
}

export const AdminAuth=async (req,res,next)=>{
    try{
        let token=req.headers["authorization"]
        let blaclist=await dustbin.findOne({token})
        if(blaclist){
            return res.status(401).send("invalid token")
        }
        if(token){
            let varification=verify(token,process.env.ADMINSEC)

            if(varification){
                
                req.userType="admin"
                console.log("admin ")
                next()
            }else{
                return res.status(404).send("oprations not allowed")
            }
        }else{
            return res.status(404).send("oprations not allowed")
        }
    }catch(e){
        return res.status(404).send("oprations not allowed")
    }

}

