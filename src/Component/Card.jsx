import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  
import { FaHeart } from 'react-icons/fa';

const Card = ({ category, price, image, discountprice }) => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);

  async function AddToWish() {
    if (localStorage.getItem("token")) {
      try {
        const response = await axios.post(
          "http://localhost:5300/wishRouter/addwish",
          {
            price,
            category,
            image
          },
          {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }
        );
        alert("Added to Wish");
        setIsLike(true);  
      } catch (error) {
        console.log(error);
        alert("Failed to add to wish. Maybe it's already in the wish.");
      }
    } else {
      navigate("/signup");
    }
  }

  const handleClick = () => {
    navigate('/view', { state: { product: { category, price, image } } });
  };

  return (
    <div className='mr-2'>
      <div className='mt-10'>
        <div className='w-5/5 group relative h-[400px] rounded-lg transition-all ease-linear duration-300 bg-cover bg-center border pt-2'>
          <div className='border-b-1 h-[200px] rounded-lg z-1'>
            <img src={image} className='w-[250px] h-auto rounded-lg mx-auto' alt="..." />
          </div>
          <div className='flex flex-col justify-center items-center m-[8px]'>
            <p className='text-xl font-semibold m-[10px]'>{category}</p>
            <p>₹{discountprice} <span className='plinee'>₹{price}</span></p>
            <div className='flex w-[280px]'>
              <button
                onClick={handleClick}
                className='w-5/5 bg-black bg-white-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 w-11/12 text-white text-lg px-6 py-1 rounded-xl m-[20px]'
              >
                VIEW
              </button>
              <button
                className={`text-4xl mr-3 cursor-pointer ${isLike ? 'text-red-500' : 'text-black'}`}
                onClick={AddToWish}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
