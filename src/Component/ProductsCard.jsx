import React from 'react'


export default function ProductsCard({ card}) {
   
    return (
        <>
            <div className='w-4/5 m-auto '>
                <div className='mt-2'>
                    <div className=' h-  text-black max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden '>
                        <div className='relative border-b-1 h-60  rounded-t-xl b-2 flex justify-center items-center '>
                            <img src={card.image} height="400px" width="220px" className=' border-2 rounded-xl object-cover' alt="..." />
                            <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-br-lg rounded-tl-lg">
                                {card.pack}
                            </span>
                        </div>
                        <div className='flex flex-col justify-center items-center m-[5px]'>
                            <p className='text-xl font-semibold m-'>{card.name}</p>
                            <select className='border-2 w-11/12 m-2'>
                                <option>1kg</option>
                                <option>2kg</option>
                                <option>3kg</option>
                                <option>4kg</option>
                                <option>5kg</option>
                            </select>
                            <p>₹{card.price} <span className='plinee'>₹{card.price2}</span></p>
                            <button className='bg-red-500 w-11/12 text-white text-lg  py-1 rounded-xl bg-white-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 m-[20px]'>Add</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
