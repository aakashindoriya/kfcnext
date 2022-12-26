import mongoose from "mongoose"

let dustbinSchema=new mongoose.Schema({
    token:String
})

let dustbin =mongoose.models.dustbin||mongoose.model("dustbin",dustbinSchema)

export default dustbin