import Cart from "../mdels/cart.model";

export const GetCart=(async(req,res)=>{
    const id = req.userId;
    try {
        const cart = await Cart.find({ userId: id ,status:false}).populate('productId')
        res.status(200).send({ data: cart });
    }
    catch (error) {
        res.status(400).send(error.message);
    }

})


export const ChangeQuantity=(async(req,res)=>{
    const id = req.userId;
    try {
        const cart = await Cart.findOneAndUpdate({ userId: id, _id: req.query.id }, req.body, { new: true }).populate('productId');
        res.status(200).send({ data: cart });
    }
    catch (error) {
        res.status(400).send(error);
    }

})


export const AddToCart=(async(req,res)=>{
    const id = req.userId;
    
   try{
    let cartItem = await Cart.findOne({ userId: id, productId: req.body.productId });
     if (cartItem) {
        
        cartItem.quantity = cartItem.quantity + req.body.quantity;
        cartItem = await cartItem.save().then(() => { return cartItem.populate('productId')});
        return res.status(201).send(cartItem)
    }
    else {
        const cart = new Cart(req.body);
        cart.userId = id;
        cartItem = await cart.save().then(() => { return cart.populate('productId')});
    res.status(200).send({ message: "Cart updated successfully" ,cartItem});
    }
   }catch(e){
    return res.status(404).send(e.message)
   }

})

export const DeleteItem=(async(req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.query.id);
        res.status(200).send({ message: "Item deleted from cart successfully" });
        console.log(res)
    } catch (error) {
        res.status(400).send(error);
    }

})