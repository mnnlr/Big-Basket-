import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Fruits() {
    const cards = [
        {
            name: 'Kiwi-Grren',
            price: 90,
            price2: 110,
            pack: '99% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/20000911_33-fresho-kiwi-green.jpg?tr=w-1920,q=80'

        },
        {
            name: 'BlueBrrey',
            price: 330,
            pack: '78% OFF',
            price2: 390,
            image: 'https://www.bigbasket.com/media/uploads/p/m/30009286_9-fresho-blueberry.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Dragon Fruits',
            price: 95,
            pack: '90% OFF',
            price2: 105,
            image: 'https://www.bigbasket.com/media/uploads/p/m/40008982_15-fresho-dragon-fruit.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Avocado',
            price: 70,
            price2: 100,
            pack: '89% OFF',

            image: 'https://www.bigbasket.com/media/uploads/p/m/30009284_16-fresho-avocado-imported-medium.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Guava-Thai',
            price: 64,
            price2: 80,
            pack: '45% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Jamun',
            price: 104,
            price2: 120,
            pack: '56% OFF',

            image: 'https://www.bigbasket.com/media/uploads/p/m/30000991_4-fresho-jamun.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Grapes',
            price: 544,
            price2: 620,
            pack: '97% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30000482_23-fresho-grapes-red-globe.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Fresh Figs',
            price: 184,
            price2: 200,
            pack: '98% OFF',

            image: 'https://www.bigbasket.com/media/uploads/p/m/20001006_8-fresho-fresh-figs.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Passion Fruit',
            price: 194,
            price2: 220,
            pack: '65% OFF',

            image: 'https://www.bigbasket.com/media/uploads/p/m/30000543_15-fresho-passion-fruit.jpg?tr=w-1920,q=80',
        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='w-3/5 m-auto '>
                <h2 className='text-5xl m-3' >
                    <b>Fruits</b></h2>
                <div className='mt-3'>

                    <Slider {...settings}>
                        {
                            cards.map((card, i) => (
                                <div key={i} className=' h-[470px] ml-20  text-black rounded-xl flex flex-wrap z-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
                                    <div className='relative border-b-1 h-52 rounded-t-xl b-2 flex justify-center items-center z-1'>
                                        <img src={card.image} height="500px" width="192px" className='h-3/  border-2 rounded-xl object-cover' alt="..." />  
                                        <span className="absolute top-2 left-4 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                                            {card.pack}
                                        </span>
                                    </div>
                                    <div className='flex flex-col justify-center items-center m-[8px]'>

                                        <p className='text-xl font-semibold m-[10px]'>{card.name}</p>
                                        <select className='border-2 w-4/5 m-4'>
                                            <option>1kg</option>
                                            <option>2kg</option>
                                            <option>3kg</option>
                                            <option>4kg</option>
                                            <option>5kg</option>
                                        </select>
                                        <p>₹{card.price} <span className='plinee'>₹{card.price2}</span></p>
                                        <button className='bg-red-500 bg-white-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 w-11/12 text-white text-lg px-6 py-1 rounded-xl m-[20px]'>Add</button>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}



