
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useWish } from '../ContextApi/WishContextProvider';

const WishlistCount = () => {
  const { wishlistCount } = useWish();

  return (
    <div className='relative cursor-pointer'>
      <FaHeart size={30} className='text-xl' />
      {wishlistCount > 0 && (
        <span className='absolute top-2 -right-2 bg-green-700 text-white text-xs rounded-full px-2 py-1'>
          {wishlistCount}
        </span>
      )}
    </div>
  );
};

export default WishlistCount;
