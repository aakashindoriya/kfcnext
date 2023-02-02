import mongoose from "mongoose"

let kfcorder=new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    carts:[{type:mongoose.Schema.Types.ObjectId,ref:"kfccart"}],
    total:Number,
    payment:{type:String,enum:["prepaid","cash"],default:"cash"},
    status:{type:String,enum:["neworder","accepted","completed"],default:"neworder"},
    address:{
        state:String,
        pincode:Number,
        delevry:String,
    }
},{ timestamps: true })

let Order =mongoose.models.kfcorder||mongoose.model("kfcorder",kfcorder)

export default Order