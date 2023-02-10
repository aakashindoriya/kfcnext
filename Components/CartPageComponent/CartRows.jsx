import { Box, Button, Flex, Image,  Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeProductFromCart, updateProductInCart } from "../redux/actions/cart.actions";

function CartRow(props){
  let dispatch=useDispatch()
  let {image,title,desc,quantity,price,_id}=props.productId

    function handleQuantity(quantity){
        if(quantity<=0){
            return dispatch(removeProductFromCart(props._id))
         }
         dispatch(updateProductInCart(props._id,quantity))
    }






    return(
        <Flex w={"full"} justifyContent="space-between" bg="rgb(248,247,245)"  p={2} flexDirection={["column","column","row"]}>
            <Flex gap={2}  w={["100%","80%"]} justifyContent="space-between">
                <Image  w={["40%","30%"]} src={image}/>
                <Box textAlign={"left"}  gap={5} w={["60%","70%"]}>
                    <Box mb={5}>
                    <Text fontSize={[12,14,14]}>{title}</Text>
                    <Box w="300">
                    
                    <Text fontSize={[10,12,12]}>{desc}</Text>
                    </Box>
                    </Box>
                   
                    <Button  variant='link'>Remove</Button>
                </Box>
            </Flex>
            
            <Flex m="1%" gap={3} alignItems={"center"} flexDirection={["row","row","row"]} w={["100%","20%"]}>
                <Flex flexDirection={["row","row","column"]}  alignItems="center" justifyContent="center">
                <Button p={"1%"} size="sm" colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(props.quantity+1)}>+</Button>
                   
                    {props.quantity}
                    <Button p={"1%"} size="sm"  colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(props.quantity-1)}>-</Button>   
                </Flex>
                <Box>
                    <Text>Price : ₹{price}</Text>
                </Box>
            </Flex>
            
        </Flex>
    )
}
export default CartRow