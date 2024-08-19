
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useWish } from '../ContextApi/WishContextProvider';

const Card = ({ category, price, image, productId, discountprice }) => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);
  const { addToWish, removeFromWish,checkWishStatus } = useWish();

  useEffect(() => {
    const fetchWishListStatus = async () => {
      const liked = await checkWishStatus(productId);
      setIsLike(liked);
    };

    fetchWishListStatus();
  }, [productId, checkWishStatus]);

  const handleAddWish = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await addToWish(productId, price, discountprice, category, image);
        setIsLike(true);
      } catch (error) {
        console.error("Failed to add to wishlist:", error);
      }
    } else {
      navigate("/signup");
    }
  };

  const handleRemoveWish = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await removeFromWish(productId);
        setIsLike(false);
      } catch (error) {
        console.error("Failed to remove from wishlist:", error);
      }
    } else {
      navigate("/signup");
    }
  };

  const handleLikeClick = () => {
    if (isLike) {
      handleRemoveWish();
    } else {
      handleAddWish();
    }
  };

  const handleClick = () => {
    navigate('/view', { state: { product: { category, price, discountprice, productId, image } } });
  };

  return (
    <div className='mr-2'>
      <div className='mt-10'>
        <div className='w- group relative  rounded-lg transition-all ease-linear duration-300 bg-cover bg-center border pt-2'>
          <div className='relative border-b-1 h-60  rounded-t-xl b-2 flex justify-center items-center '>
            <img src={image} height="400px" width="220px" className=' border-2 rounded-xl object-cover' alt={category} />
          </div>
          <div className='flex flex-col justify-center items-center m-[8px]'>
            <p className='text-xl font-semibold m-[10px]'>{category}</p>
            <p>₹{discountprice} <span className='plinee'>₹{price}</span></p>
            <div className='flex w-[280px]'>
              <button
                onClick={handleClick}
                className='w-4/5 bg-black bg-white-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 w-11/12 text-white text-lg px-6 py-1 rounded-xl m-[20px]'
              >
                VIEW
              </button>
              <button
                className={`text-4xl mr-3 cursor-pointer ${isLike ? 'text-red-500' : 'text-black'}`}
                onClick={handleLikeClick}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;




