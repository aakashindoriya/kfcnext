import {sign,verify} from "jsonwebtoken"
import {hash,verify as arvarify} from "argon2"
import User from "../mdels/user.model"
import dustbin from "../mdels/dustbin.model"
export const userSignup=(async (req,res)=>{
     
    let {email,password,name,gender,role,pic,DOB,mobile}=req.body
        password= await hash(password);
        if(role=="admin"){
            return res.send("wrong credentials")
        }
    try {
        let existinguser=await User.findOne({email})
        
        if(existinguser){
            res.status(401).send("user already exist")
        }
        else{
           try {
            let user =await User.create({
                pic,email,password,name,gender,role,DOB,mobile
            })
            res.status(201).send(user)
           }catch(e){
            res.status(404).send(e.message)
           }
        }
    }
    catch(e){
        res.status(404).send(e.message)
    }
})
// -------------------------------------------------------------------------------------------------------
export const userLogin=(async(req,res)=>{
    let {email,password}=req.body
        console.log(email)
    try{
    //     let data=await req.redis.get(email)
    //     data=JSON.parse(data)
    //    if(data){
    //     return res.send({message:"login sucessfull",...data})
        
    //    }
        let user=await User.findOne({email})

        if(user){
          let varifieduser=  await arvarify(user.password, password)
        if(varifieduser){
            let token=sign({id:user._id,email:user.email,role:user.role},process.env.TokenSecret,{expiresIn:"7 days"})
            let refresh=sign({id:user._id,email:user.email,role:user.role},process.env.RefreshSecret)
            // let redisdata={token,refresh}
        //   req.redis.set(email,JSON.stringify(redisdata),"EX",30)
          console.log("mongo")
           
        return res.status(201).send({message:"login sucessfull",token,refresh})
            
        }else{
            return res.status(404).send("Invalid credentials")
        }
        
        }else{
            return res.status(404).send("user not found")
        }

    }catch(e){
       
        res.status(401).send(e.message)
    }
    
})

// -------------------------------------------------------------------------------------------------------

export const RefreshUser=(async(req,res)=>{
    try{
        let refresh=req.headers["authorization"]
    let varify=verify(refresh,process.env.RefreshSecret)
    if(varify){
        let token=sign({id:varify.id,email:varify.email,role:varify.role},process.env.TokenSecret,{expiresIn:"1 hours"})
        return res.send({message:"refresh done",token})

    }else{
        await dustbin.create({refresh})
        return res.status(404).send("login again")
    }
    }catch(e){
        res.status(401).send(e.message)
    }
})

// --------------------------------------------------------------------------------------------------------
export const UserLogout=(async(req,res)=>{
    try {
        let token=req.headers["authorization"]
        let black= await dustbin.create({token})
        res.status(201).send("logout sucessfull")
    }catch(e){
        res.status(404).send(e.message)
    }

})

//-------------------------------------------------------------------------
export const adminLogin=(async(req,res)=>{
    try{
        let {email,password,name}=req.body
        let user =await User.findOne({email,password,name})
        
        if(user.role=="admin"){
            
            let token=sign({id:user._id,role:user.role},process.env.ADMINSEC,{expiresIn:"20 minutes"}) 
            return res.status(201).send({message:`hello ${user.name}`,token})
        }else{
            res.status(404).send("sorry") 
        }
    }catch(e){
        res.status(404).send(e.message)
    }
})

//-------------------------------------------------------------------------

const singleUser=(async(req,res)=>{
try{
let user=await User.findById({_id:req.params.id},{password:0,_id:0})
return res.status(201).send(user)
}catch(e){
    res.status(404).send(e.message)
}
})
