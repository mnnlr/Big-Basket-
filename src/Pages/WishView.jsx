import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const WishView = () => {
    const [wishs, setWishs] = useState([])

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
                alert("backend is not connted Error")
            }
        }
        serverCall();
    }, [])

    const handleClick = () => {
        navigate('/view', { state: { product: { category, price, image } } });
      };
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
                                <div className='w-4/5 group relative h-[400px] rounded-lg transition-all ease-linear duration-300 bg-cover bg-center border pt-2'>
                                    <div className='border-b-1 h-[200px] rounded-lg z-1'>
                                        <img src={wish.image} className='w-[260px] h-auto rounded-lg mx-auto' alt="..." />
                                    </div>
                                    <div className='flex flex-col justify-center items-center m-[8px]'>
                                        <p className='text-xl font-semibold m-[10px]'>{wish.category}</p>
                                        <p>₹{wish.price} <span className='plinee'>₹{wish.discountprice}</span></p>
                                        <div className='flex w-[280px]'>
                                            <button
                                                onClick={handleClick}
                                                className='w-5/5 bg-black bg-white-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 w-11/12 text-white text-lg px-6 py-1 rounded-xl m-[20px]'
                                            >
                                                VIEW
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
