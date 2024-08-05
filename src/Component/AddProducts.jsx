import React, { useState } from 'react'

export const AddProducts = () => {
    const [products,setProducts] = useState({
        // title:"",
        price:"",
        category:"",
        image:null,
        discountprice:"",

    })
    const[image,setImage]= useState(null);
  return (
    <div>AddProducts</div>
  )
}
