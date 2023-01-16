import { Button, Flex, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Select, Text } from "@chakra-ui/react"
import {useRef, useState} from "react"
import { useDispatch } from "react-redux"
import { PostOrder } from "../redux/actions/order.actions"
let obj={
    state:"",
    pincode:"",
    delevry:"",
}
export default function Checkout({total,carts}) {
    const initialFocusRef = useRef()
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
            dispatch(PostOrder({total,carts,address:data}))
            setData({...obj})
        }
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
        <Button bg={"rgb(228,0,43)"} w="100%"><Flex gap={4}><Text color={"white"} fontSize={"12px"}  >Checkout</Text>
                <Text color={"white"} fontSize={"12px"}>₹{(total+(total*(12/100))).toFixed(2)}</Text></Flex></Button>
        </PopoverTrigger>
        <PopoverContent color='white' bg='rgb(228,0,43)' borderColor='blue.800'>
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
            Fill Address
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody  >
            <Input placeholder="address" name="delevry" value={data.delevry} onChange={(e)=>HandleInput(e)}/>
            <Input placeholder="state" name="state" value={data.state} onChange={(e)=>HandleInput(e)}/>
            <Input type="number" placeholder="pincode" name="pincode" value={data.pincode} onChange={(e)=>HandleInput(e)}/>
            <Select bg={"transparent"}  >
            <option value='cash'>Cash On Delevry</option>
            </Select>
            <Button w="full" _hover={{color:"blue.800"}} border={"2px solid"} bgColor="transparent" onClick={()=>PlaceOrder()}>Place Order</Button>
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

