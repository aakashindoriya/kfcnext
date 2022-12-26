import User from "../../../../backend/mdels/user.model"
import connectDB from "../../../../backend/connect.db"
import {RefreshUser,UserLogout,adminLogin,userLogin,userSignup} from "../../../../backend/controllers/user.controller"
const handler=async(req,res)=>{
    if(req.method==="POST"){
      console.log("runing")
       let data=await userSignup(req,res)
       return data
    }
    return res.status(500).send("page not found")
   
   
   }
   export default connectDB(handler)

//    app.post("/signup",userSignup)

// app.post("/login",userLogin)

// app.get("/:id",AdminAuth,singleUser)

// app.post("/refresh",RefreshUser)

// app.post("/logout",UserLogout)

// app.post("/admin/login",adminLogin)