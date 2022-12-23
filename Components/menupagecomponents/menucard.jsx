import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import { useState } from "react"
import {  useContext } from "react"
import { CartContext } from "../../Context/CartContext"
export default function Menucard(props){
    let {image,title,price,desc,_id}=props
    let {state,dispatch} =useContext(CartContext)
    let [present,setPresent]=useState(false)
    let [count,setCount]=useState(1)
    function handleQuantity(val){
        let valuse=count+val
        if(valuse<1){
            setPresent(false)
            setCount(1)
           
            dispatch({type:"remove",paylode:_id})
            return;

        }
        setCount(valuse)
       
        let arr=state.Cart.map((el)=>el._id===_id?{...el,Quantity:valuse}:el)
        
        dispatch({type:"quantity",paylode:arr})
    }
    function AddtoCart(el){
        let data={...el,Quantity:count}
        dispatch({type:"addToCart",paylode:data})
        setPresent(true)
    }
    
  console.log(state)
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
                {(!present)&&<Button zIndex={"10"} bg={"rgb(230,26,64)"} borderRadius='full' color={"white"} onClick={()=>AddtoCart(props)}><Text>Add to cart</Text><Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" /></Button>}
                {(present)&&<Box><Button p={1} mr={2} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(-1)}>-</Button>
                {count}
                <Button ml={2} p={1} colorScheme='teal' variant='outline' borderRadius={"full"} onClick={()=>handleQuantity(1)}>+</Button></Box>}
            </Box>
           
        </Box>
    )
} 