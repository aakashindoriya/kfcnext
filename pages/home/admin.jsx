import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import AdminLogin from '../../Components/AdminComponents/AdminLogin'
import OrderList from '../../Components/AdminComponents/OrderList'
import { ChangeStatus, getorders } from '../../Components/redux/actions/admin.actions'

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

  function handeleDrag(res){
    let {draggableId,source,destination} =res
    if(source.droppableId&&destination.droppableId=='active'){
      let obj={
        id:draggableId,
        status:"accepted"
      }
      
      return dispatch(ChangeStatus(obj))
    }
    if(source.droppableId&&destination.droppableId=='neworders'){
      let obj={
        id:draggableId,
        status:"neworder"
      }
      
      return dispatch(ChangeStatus(obj))
    }
    if(source.droppableId&&destination.droppableId=='completed'){
      let obj={
        id:draggableId,
        status:"completed"
      }
      
      return dispatch(ChangeStatus(obj))
    }
    console.log(source.droppableId=="neworders",destination.draggableId=="active",destination.droppableId=='active',res)
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
        return(<OrderList key={index} {...el} index={index} />)
      })}
    </Box>
    </div>
        )}
      </Droppable>}
      {debounce&&<Droppable droppableId='active'>
        {(provided)=>(
          <div style={{width:"100%"}}  ref={provided.innerRef} {...provided.droppableProps}>
      <Box id='activeOrders' h="500px" w="100%" overflowY={"scroll"} bgColor={"red.100"} p="1%" ><Heading>New Orders</Heading>
      
      {admin.activeOrders.map((el,index)=>{
        return(<OrderList key={index} {...el} index={index} />)
      })}
    </Box>
    </div>
        )}
      </Droppable>}
      {debounce&&<Droppable droppableId='completed'>
        {(provided)=>(
      <div style={{width:"100%"}}  ref={provided.innerRef} {...provided.droppableProps}>
      <Box id='completedOrders' h="500px" w="100%" overflowY={"scroll"} bgColor={"gray.100"} p="1%" ><Heading>New Orders</Heading>
      
      {admin.completedOrders.map((el,index)=>{
        return(<OrderList key={index} {...el} index={index} />)
      })}
    </Box>
    </div>
        )}
      </Droppable>}
    </Flex>
    </DragDropContext>
  )
}
