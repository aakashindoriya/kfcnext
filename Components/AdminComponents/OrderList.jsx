import { Box, Button, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {motion} from "framer-motion"
import { Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'

export default function OrderList({index,_id,address,carts,name,total,payment}) {
    let [show,setShow]=useState(false)
    let admin=useSelector((st)=>st.admin)
    if(admin.isLoding){
        return(
            <div>
                <Spinner  h="60px" w="60px"/>
            </div>
        )
    }
  return (
    <Draggable draggableId={_id.toString()} index={index}>

        {
            (provided)=>(
                <div
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}>
                    {provided.placeholder}
                <Box as={motion.div} 
                
    whileHover={{scale:1.02}}
    w="100%" bgColor={"whiteAlpha.400"} boxShadow={"dark-lg"} borderRadius="10px" fontSize="smaller" mb={"3%"} p="2%" >
         
        
           
        <Flex justifyContent={"space-between"} p="1%" borderBottom={"1px solid gray"}>
        
        <Text>{name}</Text>
        <Flex w={"50%"} justifyContent={"space-between"}>
        <Text>{address.state}</Text>
        <Text>{address.pincode}</Text>
        </Flex>
        </Flex >
        <Flex justifyContent={"space-between"} p="1%" borderBottom={"1px solid gray"}>
        
            <Box w="50%"><Text>orderId:{_id}</Text></Box>
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
    </div>
            )
        }
    
    </Draggable>
  )
}
