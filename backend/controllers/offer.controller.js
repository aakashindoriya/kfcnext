import Product from "../mdels/kfcproduc.model"

export const setoffer=(async(req,res)=>{
    try {
        let {price,status}=req.body
        let product=await Product.updateOne({_id:req.query.id},{$set:{offer:status,price:price}})
        res.status(201).send(product)
    } catch (error) {
        res.status(401).send(error)
    }
        
    
})
export const getalloffers=(async(req,res)=>{
    try {
        
        let product=await Product.find({offer:true})
        res.status(201).send(product)
    } catch (error) {
        res.status(401).send(error)
    }
        
    
})

