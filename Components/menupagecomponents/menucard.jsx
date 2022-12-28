import {Box, Button, Flex, Image, Text, useToast} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart, removeProductFromCart, updateProductInCart } from "../redux/actions/cart.actions"
// import {  useContext } from "react"
// import { CartContext } from "../../Context/CartContext"
export default function Menucard(props){
    let {isAuthenticated}=useSelector((store)=>store.auth.data)
    let toast=useToast()
    let {image,title,price,desc,_id}=props
    let [product,setproduct]=useState({})
    let dispatch=useDispatch()
    let cart=useSelector((store)=>store.cart)

    let [present,setPresent]=useState(false)
    useEffect(()=>{
        let val=cart.carts.filter((el)=>el.productId._id==_id)
        if(val.length!=0){
            setPresent(true)
            setproduct({...val[0]})
        }else{
            setPresent(false)
            setproduct({})
        }
        
    },[cart.carts])
    function handleaddcart(){
       if(isAuthenticated){
        dispatch(addProductToCart(_id))
       }else{
        toast({
            title: 'An error occurred.',
            description: 'Please Login First',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:"top"
        })
       }
    }
    function handleCart(quantity){
        if(quantity<=0){
       return dispatch(removeProductFromCart(product._id))
    }
    dispatch(updateProductInCart(product._id,quantity))
   }
    return(

        <Box padding={6} gap={2} >
            <Image src={image}/>
           
            <Box alignItems="flex-start" display={"flex"} as="h2" mt='2'>
                <Text as="b" >{title}</Text>
            </Box>
            <Box>
                <Flex gap={1} mt='2'>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"  />
                    <Text fontSize={"12px"}>Non Veg . serves</Text>
                </Flex>
            </Box>
            <Box alignItems="flex-start" display={"flex"} mt='2'>
                <Text as="b" >{price}</Text>
            </Box>
            <Box alignItems="flex-start" display={"flex"} mt='2' h={"75px"}>
                <Text fontSize={"14px"}>{desc}</Text>
            </Box>
            <Box alignItems="flex-start" display={"flex"} mt='2'>
                {(!present)&&<Button disabled={cart.loading?true:false} zIndex={"10"} bg={"rgb(230,26,64)"} borderRadius='full' color={"white"} onClick={()=>handleaddcart()}><Text>Add to cart</Text><Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" /></Button>}
                {(present)&&<Box><Button disabled={cart.loading?true:false} p={1} mr={2} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleCart(product.quantity-1)}>-</Button>
                {product.quantity}
                <Button disabled={cart.loading?true:false} ml={2} p={1} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleCart(product.quantity+1)}>+</Button></Box>}
            </Box>
           
        </Box>
    )
} 