import { Box, Flex, Grid, Image, Text, useMediaQuery } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getmenu } from "../../../Components/redux/actions/menu.action"
import MenuCategory from "../../../Components/menupagecomponents/menucatagories"
import Menucard from "../../../Components/menupagecomponents/menucard"

export default function Menu(){
let menu=useSelector((store)=>store.menu)
let router=useRouter()
let id=router.query
let dispatch=useDispatch()

    const SN = useRef(null)
    const LH = useRef(null)
    const HD = useRef(null)
    const BL = useRef(null)
    const BS = useRef(null)
    const BBS = useRef(null)
    const executeScroll = (arg) =>{
        switch(arg){
            case "HOT DEALS":HD.current.scrollIntoView({behavior: "smooth"});break;
            case "HOT LAUNCHES":LH.current.scrollIntoView({behavior: "smooth"}); break;
            case "BOX MEALS":BL.current.scrollIntoView({behavior: "smooth"}); break;
            case "BURGERS": BS.current.scrollIntoView({behavior: "smooth"});break;
            case "BIRYANI BUCKETS":BBS.current.scrollIntoView({behavior: "smooth"});break;
            case "SNACS":SN.current.scrollIntoView({behavior: "smooth"}); break;
            default  :return;
        }
    } 
    const [isMobile] = useMediaQuery("(max-width: 768px)")

    useEffect(()=>{
        dispatch(getmenu()).then(()=>{
            executeScroll(id.menu)
        })
        
         },[])

   
    return(<Flex w={"80%"} m="auto">
        <Box position="sticky" top={"150px"} w={"60%"}>
        {!isMobile&&<Box  position="sticky" top={"150px"} w={"100%"} >
        <MenuCategory scroll={executeScroll}/>

        </Box>}
        </Box>
        <Box>
        <Box  h="150px"  ref={HD} display={"flex"} alignItems="center" justifyContent={"left"}><Text as={"b"}  fontSize={"22px"} >CHICKEN BUCKETS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"}  >
            {menu.isLoding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {menu.chicken&&menu.chicken.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid >
        <Box  h="150px"  ref={LH} display={"flex"} alignItems="center" justifyContent={"left"}><Text as={"b"}  fontSize={"22px"} >HOT LAUNCHS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {menu.isLoding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {menu.launch&&menu.launch.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Box  h="150px"  display={"flex"} alignItems="center" justifyContent={"left"} ref={BL}><Text as={"b"}  fontSize={"22px"} >BOX MEALS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {menu.isLoding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {menu.boxmeals&&menu.boxmeals.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Box  h="150px"  display={"flex"} alignItems="center" justifyContent={"left"} ref={BS}><Text as={"b"}  fontSize={"22px"} >BURGERS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {menu.isLoding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {menu.burger&&menu.burger.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Text ></Text>
        <Box  h="150px"  display={"flex"} alignItems="center" justifyContent={"left"} ref={BBS}><Text as={"b"}  fontSize={"22px"} >BIRYANI BUCKETS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {menu.isLoding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {menu.biryani&&menu.biryani.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Box  h="150px"  display={"flex"} alignItems="center" justifyContent={"left"} ref={SN}><Text as={"b"}  fontSize={"22px"} >SNACKS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {menu.isLoding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {menu.rolls&&menu.biryani.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        </Box>
    </Flex>)
}
