import { Box, Button, Input } from '@chakra-ui/react'
import { Cursor } from 'mongoose'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

function Search() {
    let {data}=useSelector((store)=>store.menu)
    let [find,setfinds]=useState([])
    let [value,setvalue]=useState("")
    let [show,setShow]=useState(false)
    let id=useRef(null)
    function handleSearch(val){
        let regex=new RegExp(val,"gi")
        if(id.current)clearTimeout(id.current)
       
         id.current=setTimeout(()=>{
            
            let arr=[]
        let count=0
        for(let i=0;i<data.length;i++){

            if(data[i].title.match(regex)){
                arr.push(data[i])
                count++
                if(count==5){
                    break;
                }
            }
        }
        
        setfinds([...arr])
        
       
        
        
        },1000)
    }
    
  return (
    <Box position={"relative"} onMouseLeave={()=>setShow(false)} onMouseEnter={()=>setShow(true)} >
        <Input
    m="3%"
    w={"90%"}
     color='tomato'
     placeholder='Search here'
    _placeholder={{ opacity: 0.4, color: 'inherit' }}
    focusBorderColor="inherit"
    value={value}
    onChange={(e)=>{
        setvalue(e.target.value)
        handleSearch(value)
    }}

    onFocusCapture={()=>setShow(true)}
    />
    {
        show&&<Box position={"absolute"} zIndex="100" bgColor={"white"} >
        {find.map((el)=>
        <Box  h="40px" 
        onMouseEnter={()=>setShow(true)}
        textAlign={"center"}
        bgColor={"gray.100"} 
        m="1px"
        borderRadius={"2%"}
        fontSize={"sm"}
        
        onClick={()=>{
            let ref=document.getElementById(el._id)
            if(ref){ref.scrollIntoView({behavior:"smooth"})}
            
        }}
        ><Button w="100%">{el.title}</Button></Box>
        )}
    </Box>
    }

    </Box>
  )
}

export default Search