import { Box, Button, Center, Divider, Image, Input,  InputGroup,  InputRightElement,  Spinner,  Stack, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../Components/redux/actions/auth.actions";
let obj={
    name:"",
    email:"",
    password:"",
    mobile:"",
}

export default function Signup(){
    const router=useRouter()
    let [data,setdata]=useState(obj)
    let [show,setShow]=useState(false)
    const { userRegister: { loading, error, message }, data: { isAuthenticated, token, user } } = useSelector(state => state.auth);    const dispatch = useDispatch();
    const toast = useToast();
    function HandleForm(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
    function HandleSubmit(){
        dispatch(authRegister({data,toast,router}))
    }
    useEffect(() => {
      if (error) {
          toast({
              title: message,
              description: 'Please try again',
              status: "error",
              duration: 2000,
              isClosable: true,
          });
      }
  }, [error]);

  if(loading){
    return(<Box w="100%" h="100%"><Center w="100%" h="100%" ><Spinner size={"xl"} /></Center></Box>)
  }
 return (
    <Box>
        <Box w={["90%","90%","35%"]} m={"auto"} display="grid" gap={5}>
            <Box as="b" fontSize={"14px"}>Sign In / Sign up</Box>

        
        <Center>
        <Box>
            <Image src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2022_08_04/images/KFC_logo.svg" />
        </Box>
        </Center>
        <Box>
            <Text as={"b"} fontSize={["sm","sm","xl"]}>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</Text>
        </Box>
        <Box>
        <Stack spacing={3}>
        <Input variant='flushed' placeholder='Name' name="name" value={data.name} onChange={(e)=>HandleForm(e)} />
        <Input variant='flushed' placeholder='Email' name="email" value={data.email} onChange={(e)=>HandleForm(e)}/>
        <InputGroup >
        <Input variant='flushed' placeholder='Password' name="password" type={show?"text":"password"} value={data.password} onChange={(e)=>HandleForm(e)}/>
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={()=>setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
        <Input variant='flushed' placeholder='Mobile number' name="mobile" type="number" value={data.mobile} onChange={(e)=>HandleForm(e)}/>
        </Stack>
        </Box>
        <Box>
        <Text fontSize={"12px"}>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text>
        </Box>
        <Divider />
        <Box w="full">
            <Button w="full" variant='outline' onClick={HandleSubmit} >Sign-Up</Button>
        </Box>
        <Box> 
        <Text fontSize={"12px"}>Already have an account ?{<Link href="/home/login">Login</Link>} </Text>
        </Box>
        </Box>
    </Box>
 )
}