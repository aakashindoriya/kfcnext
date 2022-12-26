import { Box, Center, Image, Text } from "@chakra-ui/react";
import Link from 'next/link';

export default function CatCard({img,Title}){
    return (
        <Box bg={"rgb(248,247,245)"}  h={{md:"243px",sm:"210px"}} w={{md:"243px",sm:"195px"}} borderRadius="2%">
            <Center>
            <Link href={`home/menu/${Title}`}>
            <Image src={img}   borderTopRadius="2%" h={{md:"180px",sm:"150px"}} w={{md:"243px",sm:"195px"}}/>
            <Box  h={"44px"} display="flex" alignItems="center" justifyContent={"center"} >
            <Text as={"b"} >{Title}</Text>
            </Box>
            </Link>
            </Center>
        </Box>
    )
}