import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useWish } from '../ContextApi/WishContextProvider';

export const WishView = () => {
    const navigate = useNavigate()
    const [wishs, setWishs] = useState([])
    const {removeFromWish} = useWish()

    useEffect(() => {
        let wish = [];
        async function serverCall() {
            try {
                const response = await axios.get("http://localhost:5300/wishRouter/wish", {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                wish = (response.data.items)
                setWishs(response.data.items)

            } catch (error) {
                alert("While error")
            }
        }
        serverCall();
    }, [])

    const handleRemoveFromWish = async (productId) => {
        if (localStorage.getItem("token")) {
          try {
            await removeFromWish(productId);
            setWishs(wishs.filter(item => item.productId !== productId));
          } catch (error) {
            console.error("Error removing from wishlist:", error);
          }
        } else {
          navigate("/signup");
        }
      };
      
    // const handleClick = (wish) => {
    //     navigate('/view', { state: { product: { wish} } });
    //   };
    return (
        <>
            <div className='p-10 ml-40'>
                <h1>Wish List</h1>

                <div  className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                {wishs.length === 0 ? (
                    <p>No items in your wishlist.</p>
                ) :
                 (
                    wishs.map((wish, index) => (
                    <div key={index}>
                       
                            <div className='mt-10'>
                                <div className='w-4/5 group relative h- rounded-lg transition-all ease-linear duration-300 bg-cover bg-center border pt-2'>
                                    <div className='relative border-b-1 h-60  rounded-t-xl b-2 flex justify-center items-center '>
                                        <img src={wish.image}height="400px" width="220px" className=' border-2 rounded-xl object-cover' alt="..." />
                                    </div>
                                    <div className='flex flex-col justify-center items-center m-[8px]'>
                                        <p className='text-xl font-semibold m-[10px]'>{wish.category}</p>
                                        <p>₹{wish.discountprice} <span className='plinee'>₹{wish.price}</span></p>
                                        <div className='flex w-[280px]'>
                                            <button
                                               onClick={() => handleRemoveFromWish(wish.productId)} 
                                                className='w-5/5 bg-black bg-white-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 w-11/12 text-white text-lg px-6 py-1 rounded-xl m-[20px]'
                                            >
                                                Remove 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
                    
                ))

                )
                }
                </div>
            </div>

        </>
    )
}
