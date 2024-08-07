
import React from 'react';
import { FaBagShopping } from "react-icons/fa6";
import { useCart } from '../ContextApi/CartContextProvider';



const CartlistCount = () => {
  const { cartlistCount } = useCart();

  return (
    <div className='relative cursor-pointer'>
      <FaBagShopping  size={30} className='text-xl' />
      {cartlistCount > 0 && (
        <span className='absolute top-2 -right-2 bg-green-700 text-white text-xs rounded-full px-2 py-1'>
          {cartlistCount}
        </span>
      )}
    </div>
  );
};

export default CartlistCount;
