import { Box } from "@chakra-ui/react";
import Carousel from "../../Components/CartPageComponent/temp";
import Welcome from "../../Components/CartPageComponent/welcome";
import CategoryCard from "../../Components/HomepageComponents/categoriesCard";
import Offers from "../../Components/HomepageComponents/Offers";
import Navbar from "../../Components/navbar";


export default function Homepage(){
   

    return(
        <Box>
            <Navbar />
            <Carousel />
            <Welcome />
            <CategoryCard />
            <Offers />
        </Box>
       
    )
}