import {Box, Button, Center, Flex, Image} from "@chakra-ui/react"
import  Link  from "next/link"
import { useEffect } from "react"
import {  useDispatch, useSelector } from "react-redux"
import Bill from "../../Components/CartPageComponent/cartBill"
import CartRow from "../../Components/CartPageComponent/CartRows"
import { getCart } from "../../Components/redux/actions/cart.actions"
function CartPage(){
  let cart =useSelector((store)=>store.cart)
    let dispatch=useDispatch()
useEffect(()=>{
    dispatch(getCart())
},[])
    if(cart.carts.length===0){
        return(
            <Box position="relative" >
                <Center>
                <Image  src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" />
               <Box pos={"absolute"}><Link href="/home/menu/CHICKEN%20BUCKETS"><Button >Start order</Button></Link></Box>
                </Center>
            </Box>
        )
    }
    return(<Box w="100%" padding={"3%"}>
        <Flex w={["100%","85%","85%"]} m="auto" gap={10} flexDirection={["column","column","row"]}>
            <Box w={["100%","100%","65%"]}>
            {cart.carts.map((el)=><CartRow {...el} key={el._id} />)}
            <Flex justifyContent={"space-between"} m={5} flexDirection={["column","column","row"]}>
                <Button  variant='link' >Remove All</Button>
                <Link href="/home/menu/CHICKEN%20BUCKETS"><Button variant='outline' borderRadius={"full"}>Add More Menu</Button></Link>
            </Flex>
            </Box>
            <Box w={["1005","100%","30%"]}>
                <Bill {...cart} />
            </Box>
        </Flex>
    </Box>)
}
export default CartPage