import Product from "../mdels/kfcproduc.model"

export const Uplodeproduct=(async(req,res)=>{
    try {
        let ress= await Product.create({...req.body})
       return res.status(201).send({product:ress,message:"done"})
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})
export const GetProducts=(async(req,res)=>{
    try {
        let {type,sort,order}=req.query
        let Query={}
        let Sort={}
        if(type){
            Query={...Query,type:type}
        }
        if(sort){
            let a=sort
            Sort[a]=order==="asc"?1:-1
        }
        console.log(Sort)
        let ress= await Product.find(Query).sort(Sort)
       return res.status(201).send(ress)
    }catch(e){
        return res.status(404).send(e.message)
    }

})

export const UpdateProduct=(async(req,res)=>{
    try {
        let Update=await Product.updateOne({_id:req.query.id},{...req.body})
       return res.status(201).send({message:Update})
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})
export const DeleteProduct=(async(req,res)=>{
    try {
        let Update=await Product.deleteOne({_id:req.query.id})
       return res.status(201).send({message:Update})
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})