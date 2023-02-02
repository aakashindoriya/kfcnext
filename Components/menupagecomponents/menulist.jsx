import { List, ListItem } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCart } from "../redux/actions/cart.actions"

export default function MenuList({scroll}){
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getCart())
    },[])
    let arr=["HOT DEALS","CHICKEN BUCKETS","HOT LAUNCHES","BOX MEALS","BURGERS","BIRYANI BUCKETS","SNACS"]
    return (
        <List spacing={5} mt={2}>
            {arr.map((el)=><ListItem key={el} textAlign={"left"} onClick={()=>scroll(el)} ><Link>{el}</Link></ListItem>)}
        </List>
    )
}