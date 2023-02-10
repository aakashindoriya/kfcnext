import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Center,
  Spacer,
  Divider,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { io } from "socket.io-client"
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
let socket
export default function KFCnavbar() {
    let [admin,isadmin]=useState(false)
    let route=useRouter()
    let cart=useSelector((store)=>store.cart)
    let router=useRouter()
    let toast=useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(()=>{
    socketInitializer()
  },[])
  useEffect(()=>{
    let decide=route.asPath.split("/")
    isadmin(decide[2]=="admin"?true:false)
    
  },[route.asPath])
  
  const socketInitializer = async () => {
    await fetch('/api/websoket')
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('order',(data)=>{
        let email=data.userId.email

        let myemail=Cookies.get("useremail")
        if(email==myemail){
          setTimeout(()=>{
            toast({
              title: `Hey ${data.userId.name} new message for you `,
              description: `order id: ${data.obj.id} is  ${data.obj.status} ` ,
              status: "success",
              duration: 5000,
              isClosable: true,
              position:"top",
              width:"60%",
              height:"200px"
            })
          },2000)
        }
    })
  }

  return (
    <>
      <Box  bg={"white"} zIndex="100" position="sticky" top={"0px"} w="100%"  px={4} p="1% 10%" >
      
        <Flex h={16}  justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
          />
          <HStack spacing={10} alignItems={'center'}>
            <Box>
                <Link href="/">
                    <Image h={"23px"} w="73px" src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"  alt="Kfc logo"/>
                </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}>
              {admin?
                <Link href="/home/admin">
                <Button variant='link'><Text as="b">Orders</Text></Button>
              </Link>:<Link href="/home/menu/CHICKEN%20BUCKETS">
                <Button variant='link'><Text as="b">Menu</Text></Button>
              </Link>
              }
              {
                admin?<Link href="/">
                <Button variant='link'><Text as="b">Offers</Text></Button>
                </Link>:<Link href="/">
                <Button variant='link'><Text as="b">Deals</Text></Button>
                </Link>
              }
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
            <HStack  as={'nav'}
              spacing={4}
              
              >
            <Flex gap={1} display={{ base: 'none', md: 'flex' }}>
                        <Image h={"20px"} w="20px" src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"/>
                        <Link href="/home/signup">
                        <Button variant='link'><Text as="b">Account</Text></Button>
                        </Link>
            </Flex>
            <Divider orientation='vertical' height='20px' />
            <Flex>
                <Link href="/home/cart">
                    <Flex gap={1}>
                        <Button variant='link'>₹{cart.total.toFixed(2)}</Button>
                        <Box  w={"51px"} pos={"relative"} m={"-1"}>
                         <Center>
                            <Image src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="bucket"/>
                            <Box pos={"absolute"} >{cart.carts.length}</Box>
                        </Center>
                        </Box>
                    </Flex>
                </Link>
            </Flex>
            </HStack>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {admin?<Link href="/home/admin">
                <Button variant='link'><Text as="b">Orders</Text></Button>
            </Link>:<Link href="/home/menu/CHICKEN%20BUCKETS">
                <Button variant='link'><Text as="b">Menu</Text></Button>
            </Link>}
            
            {admin?<Link href="/">
                <Button variant='link'><Text as="b">Deals</Text></Button>
            </Link>:<Link href="/">
                <Button variant='link'><Text as="b">Deals</Text></Button>
            </Link>}
            <Flex gap={1} >
                        <Image h={"20px"} w="20px" src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"/>
                        <Link href="/home/signup">
                        <Button variant='link'><Text as="b">Account</Text></Button>
                        </Link>
            </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}