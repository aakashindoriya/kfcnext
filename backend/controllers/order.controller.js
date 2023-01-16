import Order from "../mdels/order.model"
import Cart from "../mdels/cart.model";
export const neworder=(async(req,res)=>{
    try {
       
        let book =await Order.create({...req.body,userId:req.userId})
        for(let i=0;i<req.body.carts.length;i++){
            await Cart.deleteOne(req.body.carts[i])
        }
       return res.status(201).send(book)
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})

export const Allorder=(async(req,res)=>{
    let page=req.query.page||1
    try {
        let book =await Order.find({}).limit(10).skip(page-1*10)
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
        let book =await Order.find({userId:req.userId}).populate("carts",{_id:0}).populate("carts.productId")
        for(let i=0;i<book.length;i++){
            book[i]=await book[i].populate("carts.productId")
        }
     return res.status(201).send(book)
    }catch(e){
        return res.status(404).send(e.message)
    }
 
})