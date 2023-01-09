import { Box } from "@chakra-ui/react";
import Carousel from "../Components/CartPageComponent/temp";
import Welcome from "../Components/CartPageComponent/welcome";
import CategoryCard from "../Components/HomepageComponents/categoriesCard";


export default function Homepage(){
   

    return(
        <>
        
        <Box w={"100%"} boxSizing="border-box">
            <Carousel />
            <Welcome />
            <CategoryCard />
        </Box>
        </>
    )
}
