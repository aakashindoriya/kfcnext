import Order from "../mdels/order.model"
import Cart from "../mdels/cart.model";
export const neworder=(async(req,res)=>{
    try {
       
        let book =await Order.create({...req.body,userId:req.userId})
        for(let i=0;i<req.body.carts.length;i++){
            await Cart.updateOne({_id:req.body.carts[i]},{$set:{status:true}})
        }
       return res.status(201).send(book)
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})

export const Allorder=(async(req,res)=>{
    
    let page=req.query.page||1
    try {
        let book =await Order.find({}).populate("carts",{productId:1,quantity:1,_id:0}).limit(20).skip((page-1)*20)
        for(let i=0;i<book.length;i++){
            await book[i].populate("carts.productId")
        }
       return res.status(201).send(book)
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})

export const GetPerticulerOrder=(async(req,res)=>{
    let page=req.query.page||1
    try {
        let book =await Order.findOne({userId:req.userId,_id:req.query.id})
       return res.status(201).send(book)
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})

export const GetMyProducts=(async(req,res)=>{
    try {
        console.log(req.userId)
        let book =await Order.find({userId:req.userId}).populate("carts",{_id:0,status:0,__v:0,userId:0}).populate("userId",{_id:0,password:0,role:0,__v:0})
        for(let i=0;i<book.length;i++){
            book[i]=await book[i].populate("carts.productId")
        }
     return res.status(201).send(book)
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})