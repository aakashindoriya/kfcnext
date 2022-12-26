import mongoose from "mongoose"
let kfcproduct=new mongoose.Schema({
      image:{type:String} ,
      title: {type:String,unique:true},
      desc: {type:String,unique:true},
      price: {type:Number},
      type: {type:String}
})

let Product =mongoose.models.kfcproduct||mongoose.model("kfcproduct",kfcproduct)

export default Product