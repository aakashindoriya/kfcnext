import { List, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function MenuList({scroll}){
    let arr=["HOT DEALS","CHICKEN BUCKETS","HOT LAUNCHES","BOX MEALS","BURGERS","BIRYANI BUCKETS","SNACS"]
    return (
        <List spacing={5} mt={2}>
            {arr.map((el)=><ListItem textAlign={"left"} onClick={()=>scroll(el)} ><Link>{el}</Link></ListItem>)}
        </List>
    )
}