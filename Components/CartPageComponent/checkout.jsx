import { Button, Flex, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Select, Stack, Text, useToast } from "@chakra-ui/react"
import {useRef, useState} from "react"
import { useDispatch } from "react-redux"
import { PostOrder } from "../redux/actions/order.actions"
import Allindianstates from "./Allindianstates"
let obj={
    state:"",
    pincode:"",
    delevry:"",
}
export default function Checkout({total,carts}) {
    const initialFocusRef = useRef()
    const toast=useToast()
    let dispatch=useDispatch()
        let [data,setData]=useState(obj)
        function HandleInput(e){
            setData({...data,[e.target.name]:e.target.value})
        }
        function PlaceOrder(){
            if(data.state==""||data.pincode==""||data.delevry==""){
                alert("please fill address")
                return
            }
            dispatch(PostOrder({total,carts,address:data,toast}))
            setData({...obj})
        }
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={true}
        
      >
        <PopoverTrigger>
        <Button bg={"rgb(228,0,43)"} w="100%"><Flex gap={4}><Text color={"white"} fontSize={"12px"}  >ORDER</Text>
                <Text color={"white"} fontSize={"12px"}>₹{(total+(total*(12/100))).toFixed(2)}</Text></Flex></Button>
        </PopoverTrigger>
        <PopoverContent color='white' bg='rgb(228,0,43)' borderColor='teal.100' >
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
            Fill Address
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody backdropBlur={"2xl"} >
            <Stack spacing={3}> 
            <Input variant='flushed' placeholder="address" name="delevry" value={data.delevry} onChange={(e)=>HandleInput(e)}/>
            
            <Allindianstates data={data} HandleInput={HandleInput} />
            <Input variant='flushed' type="text" placeholder="pincode" name="pincode" value={data.pincode} maxLength="6" onChange={(e)=>HandleInput(e)}/>
            <Select variant='flushed' bg={"transparent"}  >
            <option value='cash'>Cash On Delevry</option>
            </Select>
            <Button variant='unstyled' w="full" _hover={{color:"blue.800"}} border={"2px solid"} bgColor="transparent" onClick={()=>PlaceOrder()}>Place Order</Button>
            </Stack>
          </PopoverBody>
          <PopoverFooter
            border='0'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            pb={4}
          >
           
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    )
  }

