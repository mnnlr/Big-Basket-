import React, { useState } from 'react'

import { FaUpload } from "react-icons/fa6";
import axios from "axios"
const AddProducts = () => {
  const [products,setProducts] = useState({
    price: "",
    discountprice:"",
    category: "",
    image: null
  })
  const [image,setImage] = useState(null)
  async function postProducts(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('price',products.price)
    formData.append("discountprice",products.discountprice)
    formData.append('category',products.category)
    formData.append('filename', image);
    try {
      const response = await axios.post("http://localhost:5300/productRouter/products",formData)
      console.log("product added sucessfully")
      alert("Product added Succesfully")
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <>
    <div className='min-h-screen bg-[#222224] text-white font-playwriten flex'>
      <form className='w-[450px] rounded-xl m-auto  p-6 mb-24 border' >
        <h1 className='text-center text-3xl font-bold mb-6'>ADD PRODUCT</h1>
        <LabeledInput type="number" title="Category" id="Category" placeholder="Category" onChange={(e)=>{
          setProducts({...products,
            Category: e.target.value})
        }} />
        <LabeledInput type="number" title="Stock" id="price" placeholder="5" onChange={(e)=>{
          setProducts({...products,
          price: e.target.value})
        }} />
        <LabeledInput type="text" title="Discountprice" id="discountprice" placeholder="000" onChange={(e)=>{
          setProducts({...products,
            discountprice: e.target.value})
        }} />
        
        <label className='cursor-pointer' htmlFor="files">
          <FaUpload className='size-16 border p-2 rounded-lg  text-gray-500' />
          <input type="file"  id="files" className='size-1' required onChange={(e)=>{
           if(e.target.files.length>0){
            setImage(e.target.files[0])
        }
        }} />
        </label>
        <button onClick={(e)=>{postProducts(e)}} className='w-full h-12 bg-purple-500 rounded-lg text-white text-xl font-semibold hover:bg-purple-900' >Post Product</button>
      </form>
    </div>
    </>
  )
}
export function LabeledInput({title,type,placeholder,id,onChange}){
  return <>
  <label htmlFor={id}>
    <h2 className='text-lg font-semibold'>{title}</h2>
    <input type={type} className='w-full h-12 mb-4 rounded-lg px-4' placeholder={placeholder} id={id} required onChange={onChange}/>
  </label>
  </>
}


export default AddProducts