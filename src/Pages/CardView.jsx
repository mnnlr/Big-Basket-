import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


const CardView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [cartItems, setCartItems] = useState([]);
  const product = location.state?.product;
  console.log(location.state)

  if (!product || !product.price || !product.category || !product.image ) {
    return <div>No product details available.</div>;
  }

  async function AddToCart() {
    if (localStorage.getItem("token")) {
      try {
        const response = await axios.post(
          "http://localhost:5300/cartRouter/addcart",
          {
            // title: product.title,
            price: product.price,
            category: product.category,
            image: product.image,
            // productId: product._id
          },
          {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }
        );
        alert("Added to cart");
        // navigate("/cart");

            } catch (error) {
        console.log(error);
        alert("Failed to add to cart. Maybe it's already in the cart.");
      }
    } else {
      navigate("/signup");
    }
  }

  // if (!product) {
  //   return <div>No product details available.</div>;
  // }



  return (
    <>
    <Navbar />
      <div className='min-h-screen xl:grid pt-[5vh] grid-cols-2'>
        <div className='md:w-[500px] ml-40 p-6'>
          <img src={product.image} alt={product.category} className='w-full h-auto' />
        </div>
        <div className=' gap-8 justify-center p-8'>
          <h1 className=''>{product.category}</h1>
          {/* <h2 className='text-lg font-thin text-gray-400 max-w-[700px]'>{product.category}</h2> */}
          <h3 className='text-3xl font-bold mt-20'>${product.price}</h3>
          <button
            onClick={AddToCart}
            className='mt-20  bg-black text-white text-2xl px-4 py-2 text-white rounded-md hover:bg-white border hover:text-black transition-all ease-linear duration-300'
          >
            Add to Cart
          </button>
        </div>
      </div>
 <Footer/>
    </>
  );
}

export default CardView;
