import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{
        require:true,type:String
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true
    },
    role:{
        type:String,enum:["admin","seller","consumer"],default:"consumer"
    },
    pic:{
        type:String
    },
    DOB: {type:String, min: 20, max: 100},
    gender: {type:String, enum: ["Male", "Female"]},
    mobile:{type:String,required:true}
})
const User=mongoose.models.user||mongoose.model("user",userSchema)

export default User