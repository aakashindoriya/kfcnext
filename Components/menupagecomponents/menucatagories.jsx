import { Box, Image, Text } from "@chakra-ui/react";
import MenuList from "./menulist";

export default function MenuCategory({scroll}){
    return(
        <Box position={"sticky"} top="110px">
            <Image src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" w="54px" h="27px" />
                    
            <Box display={"flex"} alignItems={"flex-start"} mt={2}>
                <Text as="b" fontSize={"2xl"}>KFC MENU</Text>
            </Box>
          
            <MenuList scroll={scroll} />
        </Box>
    )
}