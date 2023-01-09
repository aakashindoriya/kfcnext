import { Box, Center, Image, Text } from "@chakra-ui/react";
import Link from 'next/link';

export default function CatCard({img,Title}){
    return (
        <Box bg={"rgb(248,247,245)"}   borderRadius="2%">
            <Center>
            <Link href={`home/menu/${Title}`}>
            <Image src={img} w="100%"  borderTopRadius="2%" />
            <Box   display="flex" alignItems="center" justifyContent={"center"} >
            <Text as={"b"} >{Title}</Text>
            </Box>
            </Link>
            </Center>
        </Box>
    )
}