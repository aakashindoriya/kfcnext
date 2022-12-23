import { Box, Divider, Flex, Text } from "@chakra-ui/react"

export default function  Welcome(){
    return(
        <Box w="100%" mt={0} mb={3}>
        <Box w="80%" m="auto" mt={5} mb={5}>
        <Flex justifyContent={"left"} alignItems="center">
        <Text fontSize={"30px"} as={"b"}  >WELCOME TO KFC</Text>
        </Flex>
        <Divider />
        </Box>
        </Box>
    )
}