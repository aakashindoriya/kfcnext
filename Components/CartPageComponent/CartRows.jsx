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
        <Flex w={"full"} justifyContent="space-between" bg="rgb(248,247,245)" m={5} p={2} flexDirection={["column","column","row"]}>
            <Flex gap={2}>
                <Image  h="108px" src={image}/>
                <Box textAlign={"left"}  gap={5}>
                    <Box mb={5}>
                    <Text fontSize={"14"}>{title}</Text>
                    <Box w="300">
                    <Text fontSize={"12"}>{desc}</Text>
                    </Box>
                    </Box>
                    <Button  variant='link'>Remove</Button>
                </Box>
            </Flex>
            <Flex  gap={3} alignItems={"center"} flexDirection={["column","row","row"]}>
                <Flex flexDirection={["column","row","row"]}  alignItems="center" justifyContent="center">
                    <Button p={1} mr={2} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(props.quantity-1)}>-</Button>
                    {props.quantity}
                    <Button p={1} ml={2} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(props.quantity+1)}>+</Button>
                </Flex>
                <Box>
                    <Text>{price}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}
export default CartRow