import React, { useEffect } from 'react'

 function Offers({data}) {
   async function get(){
    const res = await fetch(`../api/product/alloffers`)
    const data = await res.json()
    
   }
   useEffect(()=>{
    get()
    console.log(data)
   })
    // Pass data to the page via props
   
  return (
    <div>Offers</div>
  )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`../api/product/alloffers`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }
  export default Offers