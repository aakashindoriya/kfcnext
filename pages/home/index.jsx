import { Box } from "@chakra-ui/react";
import Advertise from "../../Components/CartPageComponent/advertise";
import Welcome from "../../Components/CartPageComponent/welcome";
import CategoryCard from "../../Components/HomepageComponents/categoriesCard";


export default function Homepage(){
   

    return(
        <Box>
            <Advertise />
            <Welcome />
            <CategoryCard />
        </Box>
       
    )
}