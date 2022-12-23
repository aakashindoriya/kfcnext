import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import {  useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";

function CartRow({image,title,desc,Quantity,price,_id}){

    let {state,dispatch}=useContext(CartContext)
    let [count,setCount]=useState(Quantity)

    function handleQuantity(val){
        let valuse=count+val
        if(valuse<1){
            
            setCount(1)
           
            dispatch({type:"remove",paylode:_id})
            return;

        }
        setCount(valuse)
       
        let arr=state.Cart.map((el)=>el._id===_id?{...el,Quantity:valuse}:el)
        
        dispatch({type:"quantity",paylode:arr})
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
                    <Button p={1} mr={2} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(-1)}>-</Button>
                    {Quantity}
                    <Button p={1} ml={2} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(1)}>+</Button>
                </Box>
                <Box>
                    <Text>{price}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}
export default CartRow