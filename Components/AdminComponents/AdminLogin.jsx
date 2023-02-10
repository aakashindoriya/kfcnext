import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    useToast,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AdminAuth } from '../redux/actions/admin.actions';
  let obj={
    email:"aakashindoriya12346@gmail.com",
    password:"aakashbitu"
  }
  export default function AdminLogin() {
    let toast =useToast()
    let dispatch=useDispatch()
    let [data,setdata]=useState(obj)
    function HandleForm(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
    function HandleLogin(){
        dispatch(AdminAuth({...data,toast}))
    }
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'} color={"rgb(229,62,62)"}>
            <Heading  fontSize={'2xl'}>Please Login To Continue</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input color={"blackAlpha.600"} type="email" name='email' value={data.email} onChange={(e)=>HandleForm(e)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input color={"blackAlpha.600"} type="password"  name='password' value={data.password} onChange={(e)=>HandleForm(e)} />
            </FormControl>
            <Stack spacing={6}>
              <Button colorScheme={'red'} variant={'solid'} onClick={HandleLogin}>
                LogIn
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1615380547239-45634678986c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }
