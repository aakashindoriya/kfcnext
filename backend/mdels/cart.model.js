import mongoose from "mongoose"

let kfccartSchema=new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'kfcproduct' },
    quantity: { type: Number, default:1 },
    status:{
        type:Boolean,default:false
    }
})

let Cart =mongoose.models.kfccart||mongoose.model("kfccart",kfccartSchema)

export default Cart