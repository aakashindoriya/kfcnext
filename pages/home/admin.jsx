import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLogin from '../../Components/AdminComponents/AdminLogin'
import OrderList from '../../Components/AdminComponents/OrderList'
import { getorders } from '../../Components/redux/actions/admin.actions'

export default function Admin() {
  let dispatch=useDispatch()
  let admin=useSelector((st)=>st.admin)
  let [isAuth,setauth]=useState(false)
  useEffect(()=>{
    setauth(admin.isAdmin)
    dispatch(getorders())
  },[admin.isAdmin])


  if(!isAuth){
    return(
      <AdminLogin />
    )
  }
  return(
    <Flex flexDirection={["column","column","row"]} justifyContent={"space-between"}  width="100%">
      <Box w="100%" bgColor={"green.100"} p="1%"><Heading>New Orders</Heading>
      
        {admin.neworders.map((el)=>{
          return(<OrderList {...el} />)
        })}
      </Box>
      <Box w="100%" ><Heading>Order Queue</Heading>

      </Box>
      <Box  w="100%"><Heading>Completed Orders</Heading>

      </Box>
    </Flex>
  )
}
