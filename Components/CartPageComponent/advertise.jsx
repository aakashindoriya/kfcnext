import { Box, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Link from 'next/link'
let arr=["https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1366&fit=fill&fm=webp", 
    "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0d9dd4031fc40bd266a2b4ac49834491/1440_x_396_Value_Burger.jpg?w=1366&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=1366&fit=fill&fm=webp"     

]
export default function Advertise(){
    let [image,setImage]=useState(arr[0])
    let count=1
    useEffect(()=>{
        const tarsition=setInterval(() => {
            if(count==4){
                count=0
            }
            setImage(arr[count])
            count++
        }, 1500);
        return(()=>{
            clearInterval(tarsition)
        })
    },[])
    return(
        <Link href="/menu">
        <Box>
            <Image src={image}/>
        </Box>
        </Link>
    )
}