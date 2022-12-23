import {  Grid } from "@chakra-ui/react"
import CatCard from "./singlecard"

export default function CategoryCard(){
let arr=[
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=20.85",Title:"HOT DEALS"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=20.85",Title:"CHICKEN BUCKETS"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT201.jpg?ver=20.85",Title:"HOT LAUNCHES"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=20.85",Title:"BOX MEALS"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=20.85",Title:"BURGERS"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=20.85",Title:"BIRYANI BUCKETS"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT175.jpg?ver=20.85",Title:"SNACS"},
    {img:"https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",Title:"View All Menu "}

]
    return(
        <Grid templateColumns={{md:"repeat(4,1fr)",sm:"repeat(2,1fr)"}}
        w="78%"
        margin={"auto"}
        gap={7}>
            {arr.map((el)=><CatCard {...el}/>)}
            
        </Grid>
    )
}