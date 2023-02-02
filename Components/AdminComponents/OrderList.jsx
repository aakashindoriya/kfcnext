import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {motion} from "framer-motion"

export default function OrderList({_id,address,carts,userId,total,payment}) {
   let [show,setShow]=useState(false)
  return (
    <Box as={motion.div} 
    whileHover={{scale:1.02}}
    w="100%" bgColor={"whiteAlpha.800"} boxShadow={"dark-lg"} borderRadius="10px" fontSize="sm" mb={"3%"} p="1%" >
        <Flex justifyContent={"space-between"} p="1%" borderBottom={"1px solid gray"}>
        <Text>{userId}</Text>
        <Flex w={"50%"} justifyContent={"space-between"}>
        <Text>{address.state}</Text>
        <Text>{address.pincode}</Text>
        </Flex>
        </Flex >
        <Flex justifyContent={"space-between"} p="1%" borderBottom={"1px solid gray"}>
            <Text>orderId:{_id}</Text>
            <Text>total:{total.toFixed(2)}</Text>
            <Text>status:{payment}</Text>
        </Flex>
        {show&&<Box w="100%">
            {carts.map((el)=><Flex w="100%" justifyContent={"space-between"} borderBottom={"1px solid gray"} p="1%">
               <Image w="50px" src={el.productId.image} />
               <Text>{el.productId.title}</Text>
               <Text>{el.productId.price}</Text>
               <Text>{el.quantity}</Text>
           </Flex>)}
        </Box>}
        <Flex justifyContent={"flex-end"} borderBottom={"1px solid gray"} p="1%">
        <Button size={"sm"} bgColor="transparent" onClick={()=>setShow(!show)} >{show?"hide":"show more"}</Button>
        </Flex>
    </Box>
  )
}
