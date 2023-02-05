import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import AdminLogin from '../../Components/AdminComponents/AdminLogin'
import OrderList from '../../Components/AdminComponents/OrderList'
import { ChangeStatus, getorders } from '../../Components/redux/actions/admin.actions'
import io from "socket.io-client"
let socket
export default function Admin() {
  let dispatch=useDispatch()
  let [debounce,setdebounce]=useState(false)
  let admin=useSelector((st)=>st.admin)
  let [isAuth,setauth]=useState(false)
  
  useEffect(()=>{
    setauth(admin.isAdmin)
    dispatch(getorders())
    setTimeout(()=>{
      setdebounce(true)
    },3000)
  },[admin.isAdmin])

  useEffect(()=>{
    socketInitializer()
  },[])
  const socketInitializer = async () => {
    await fetch('/api/websoket')
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })
  }
  
  function handeleDrag(res){
    let {draggableId,source,destination} =res
      let id=""+source.droppableId
      let arr
      if(id=='activeOrders'){
        arr=admin.activeOrders
      }
      if(id=='neworders'){
        arr=admin.neworders
      }
      if(id=='completedOrders'){
        arr=admin.completedOrders
      }
    if(source.droppableId&&destination.droppableId=='activeOrders'){
      let obj={
        id:draggableId,
        status:"accepted"
      }
      socket.emit("message",{obj,...arr[source.index]})
      return dispatch(ChangeStatus(obj))
    }
    if(source.droppableId&&destination.droppableId=='neworders'){
      let obj={
        id:draggableId,
        status:"neworder"
      }
      socket.emit("message",{obj,...arr[source.index]})
      return dispatch(ChangeStatus(obj))
    }
    if(source.droppableId&&destination.droppableId=='completedOrders'){
      let obj={
        id:draggableId,
        status:"completed"
      }
      socket.emit("message",{obj,...arr[source.index]})
      return dispatch(ChangeStatus(obj))
    }
  }
  if(!isAuth){
    return(
      <AdminLogin />
    )
  }
  return(
    <DragDropContext onDragEnd={handeleDrag}>
    <Flex flexDirection={["column","column","row"]} justifyContent={"space-between"}  width="100%">
      {debounce&&<Droppable droppableId='neworders'>
        {(provided)=>(
      <div style={{width:"100%"}} ref={provided.innerRef} {...provided.droppableProps}>
      <Box id='neworders' h="500px" w="100%" overflowY={"scroll"} bgColor={"green.100"} p="1%" ><Heading>New Orders</Heading>
      
      {admin.neworders.map((el,index)=>{
        let {_id,address,carts,userId:{name},total,payment}=el
        return(<OrderList key={index} 
          _id={_id} 
          address={address}
          name={name}
          carts={carts}
          total={total}
          payment={payment}
          index={index} />)
      })}
    </Box>
    </div>
        )}
      </Droppable>}
      {debounce&&<Droppable droppableId='activeOrders'>
        {(provided)=>(
          <div style={{width:"100%"}}  ref={provided.innerRef} {...provided.droppableProps}>
      <Box id='activeOrders' h="500px" w="100%" overflowY={"scroll"} bgColor={"red.100"} p="1%" ><Heading>Activ Orders</Heading>
      
      {admin.activeOrders.map((el,index)=>{
         let {_id,address,carts,userId:{name},total,payment}=el
        return(<OrderList key={index} 
          _id={_id} 
          address={address}
          name={name}
          total={total}
          carts={carts}
          payment={payment}
          index={index} />)
      })}
    </Box>
    </div>
        )}
      </Droppable>}
      {debounce&&<Droppable droppableId='completedOrders'>
        {(provided)=>(
      <div style={{width:"100%"}}  ref={provided.innerRef} {...provided.droppableProps}>
      <Box id='completedOrders' h="500px" w="100%" overflowY={"scroll"} bgColor={"gray.100"} p="1%" ><Heading>Completed Orders</Heading>
      
      {admin.completedOrders.map((el,index)=>{
        let {_id,address,carts,userId:{name},total,payment}=el
        return(<OrderList key={index} 
          _id={_id} 
          address={address}
          name={name}
          total={total}
          carts={carts}
          payment={payment}
          index={index} />)
      })}
    </Box>
    </div>
        )}
      </Droppable>}
    </Flex>
    </DragDropContext>
  )
}
