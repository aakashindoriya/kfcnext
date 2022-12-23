
import { Box, Button, Center, Divider, Image, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from  "axios"
import { useState } from "react";
let obj={
    name:"",
    email:"",
    password:""
}

export default function Login(){
    function GetData(){
        return axios("https://mkibap.onrender.com/users")
        }
    let [data,setdata]=useState(obj)
    let [users,SetUsers]=useState([])
    useEffect(()=>{
        GetData().then((res)=>SetUsers(res.data))

    },[])
    function HandleSignIn(){
        if(users.length!==0){
            let arr=users.filter((el)=>el.email===data.email&&el.password===data.password)
        if(arr.length===0){
            AuthDispatch({type:"loginfailed"})
            alert("Invalid Creadentials")
        }
        else{
            AuthDispatch({type:"loginsucess",paylode:"farzitoken"})
            navigate("/menu")
        }
        
        }else{
            AuthDispatch({type:"loginfailed"})
            alert("Invalid Creadentials")
        }

    }
    function HandleForm(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
 return (
    <Box>
        <Box w="450px" m={"auto"} display="grid" gap={5}>
            <Box as="b" fontSize={"14px"}>Sign In / Sign up</Box>

        
        <Center>
        <Box>
            <Image src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2022_08_04/images/KFC_logo.svg" />
        </Box>
        </Center>
        <Box>
            <Text as={"b"} fontSize={"xl"}>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</Text>
        </Box>
        <Box>
        <Stack spacing={3}>
        <Input variant='flushed' placeholder='Email' name="email" value={data.email} onChange={(e)=>HandleForm(e)}/>
        <Input variant='flushed' placeholder='Password' name="password" type="password" value={data.password} onChange={(e)=>HandleForm(e)}/>

        </Stack>
        </Box>
        <Box>
        <Text fontSize={"12px"}>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text>
        </Box>
        <Divider />
        <Box w="full">
            <Button w="full" variant='outline' onClick={HandleSignIn}>Login</Button>
        </Box>
        <Box> 
        <Text fontSize={"12px"}>Don't have an account ? </Text>
        </Box>
        </Box>
    </Box>
 )
}