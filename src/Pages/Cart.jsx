import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";

import { useNavigate } from 'react-router';
import { useCart } from '../ContextApi/CartContextProvider';
const Cart = () => {
  const {removeFromCart} =useCart()
  const [carts,setCart] = useState([])
  const [show,setShow] = useState(false)
  const [price,setPrice] = useState(0)
  
  useEffect(()=>{
    let cart = [];
    async function servercall(){
      try {
        const response = await axios.get("http://localhost:5300/cartRouter/cart",{
          headers:{
            Authorization: localStorage.getItem("token")
          }
        });
        const cartItems = response.data.items;
        setCart(cartItems);
        setShow(cartItems.length > 0);

       
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
        setPrice(totalPrice);
      } catch (error) {
        alert("Error")
      }

    }
    servercall();    
    },[]);


    // const RemoveFromCart = async (productId) => {
    //   if (localStorage.getItem("token")) {
    //     try {
    //       const response = await axios.post(
    //         "http://localhost:5300/cartRouter/removeCart",
    //         { productId },
    //         {
    //           headers: {
    //             Authorization: ` ${localStorage.getItem("token")}`
    //           }
    //         }
    //       );
    //       if (response.status === 200) {
    //         const updatedCart = carts.filter(item => item.productId !== productId);
    //         setCart(updatedCart);
    //         const newTotalPrice = updatedCart.reduce((acc, item) => acc + item.price, 0);
    //       setPrice(newTotalPrice);
    //         alert("Removed from Cart");
    //       }
    //     } catch (error) {
    //       console.log("Error removing from Cart:", error.response?.data || error);
    //       alert("Failed to remove from Cart.");
    //     }
    //   } else {
    //     navigate("/signup");
    //   }

    const handleRemoveFromCart = async (productId) => {
      if (localStorage.getItem("token")) {
        try {
          await removeFromCart(productId);
          const updatedCart = carts.filter(item => item.productId !== productId);
          setCart(updatedCart);
          const newTotalPrice = updatedCart.reduce((acc, item) => acc + item.price, 0);
          setPrice(newTotalPrice);
        } catch (error) {
          console.error("Error removing from Cart:", error.response?.data || error);
          alert("Failed to remove from Cart.");
        }
      } else {
        navigate("/signup");
      }
    };
    
    
  return (
    <>

    <div className=' min-h-screen'>
      { show &&
        <div className='pt-[10vh] min-h-[100%] grid xl:grid-cols-2 grid-cols-1'>
        <div className='  flex flex-col gap-6 justify-center items-center'>
          <h1 className=''>Items</h1>
          {
            carts.map((item,index)=>(
              <div key={index} className='border w-[70%] overflow-hidden flex justify-between items-center px-4 h-24 '>
                <img src={item.image} className='w-24 h-auto p-1' alt="" />
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
                <MdDelete  onClick={() => handleRemoveFromCart(item.productId)}  className='text-red-600 size-6 cursor-pointer' />
              </div>
            ))
          }
        </div>
        <div className='border-l flex gap-6 flex-col items-center w-full'>
           <h1 className='text-center text-2xl font-bold'>Total:</h1>
           <h2 className='text-center text-3xl font-bold'>₹ {price}</h2>
           <button  className='text-2xl px-4 py-1 rounded-md bg-black text-white '>Buy Now</button>
        </div>
      </div>
      
      }
    </div>
   
    </>
  )
}

export default Cart