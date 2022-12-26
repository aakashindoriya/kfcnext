
import { Box, Button, Center, Divider, Image, Input, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../../Components/redux/actions/auth.actions";
let obj={
    email:"",
    password:""
}

export default function Login(){
    let [data,setdata]=useState(obj)
    let dispatch=useDispatch()
    let toast=useToast()
    let router=useRouter()
    const { userRegister: { loading, error, message }, data: { isAuthenticated, token, user,isLogin } } = useSelector(state => state.auth);
    useEffect(()=>{
        if (isLogin) {
            toast({
                title: `Welcome to KFC}`,
                description: "Login successfull",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            let time = setTimeout(() => {
                router.push("/home");
            }, 3000);
            return () => clearTimeout(time);
        }
        if (error) {
            toast({
                title: message,
                description: 'Please try again',
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }

    },[isLogin,error])
    function HandleSignIn(){
       dispatch(authLogin(data))

    }
    function HandleForm(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
    if(loading){
        return(<Box w="100%" h="100%"><Center w="100%" h="100%" ><Spinner size={"xl"} /></Center></Box>)
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