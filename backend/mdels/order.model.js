import mongoose from "mongoose"

let kfcorder=new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    carts:[{type:mongoose.Schema.Types.ObjectId,ref:"kfccart"}],
    total:Number,
    payment:{type:String,enum:["prepaid","cash"],default:"cash"},
    status:{type:Boolean,default:false},
    address:{
        state:String,
        pincode:Number,
        delevry:String,
    }
})

let Order =mongoose.models.kfcorder||mongoose.model("kfcorder",kfcorder)

export default Order