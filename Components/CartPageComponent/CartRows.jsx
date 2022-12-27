import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
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
        <Flex w={"full"} justifyContent="space-between" bg="rgb(248,247,245)" m={5} p={2}>
            <Flex gap={2}>
                <Image w="144px" h="108px" src={image}/>
                <Box textAlign={"left"}  gap={5}>
                    <Box mb={5}>
                    <Text fontSize={"14px"}>{title}</Text>
                    <Box w="300px">
                    <Text fontSize={"12px"}>{desc}</Text>
                    </Box>
                    </Box>
                    <Button  variant='link'>Remove</Button>
                </Box>
            </Flex>
            <Flex  gap={3} alignItems={"center"}>
                <Box>
                    <Button p={1} mr={2} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(props.quantity-1)}>-</Button>
                    {props.quantity}
                    <Button p={1} ml={2} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(props.quantity+1)}>+</Button>
                </Box>
                <Box>
                    <Text>{price}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}
export default CartRow