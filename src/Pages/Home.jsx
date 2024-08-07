import React from 'react';
import './One.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fruits from './Fruits';
import ProductsListHome from '../Component/ProductsListHome';
import { CardShow } from '../Component/CardShow';

export default function Home() {
    const cards = [
        {

            image: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-1920,q=80'

        },
        {

            image: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-fruits_480_250923.jpg?tr=w-1920,q=80'
        },
        {
            image: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_cuts-&-exotics_480_250923.jpg?tr=w-1920,q=80'
        },
        {
            image: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_herbs-&-seasoning_480_250923.jpg?tr=w-1920,q=80'
        },

    ]
    const Daily = [
        {
            image: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80"
        },
        {
            image: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_rice-staplesStorefront_m_480_250323_02.jpg?tr=w-1920,q=80"
        },
        {
            image: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg?tr=w-1920,q=80"
        },
        {
            image: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg?tr=w-1920,q=80"
        },
        {
            image: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg?tr=w-1920,q=80"
        },
        {
            image: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_salt-staplesStorefront_m_480_250323_06.jpg?tr=w-1920,q=80"
        },
    ]
    const data = [
        {
            name: 'Baby Wipes-with Vera',
            price: 495,
            price2: 730,
            pack: '48% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/1224873_1-littles-baby-wipes-with-aloe-vera-jojoba-oil-vitamin-e.jpg?tr=w-1920,q=80'

        },
        {
            name: 'Baby Wipes-with Aloe',
            price: 200,
            price2: 350,
            pack: '58% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/40202338_5-pampers-baby-wipes-with-aloe.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Baby Wipes-Freah',
            price: 495,
            price2: 605,
            pack: '47% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/1208292_2-bigbasket-baby-wipes-fresh-no-paraben-double-moisturizing.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Baby Wipes-Sea ',
            price: 230,
            price2: 390,
            pack: '18% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/1201455_3-bigbasket-baby-wipes-sea-breeze-no-paraben-double-moisturizing.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Guava-Thai',
            price: 64,
            price2: 80,
            pack: '20% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Jamun',
            price: 104,
            price2: 120,
            pack: '88% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30000991_4-fresho-jamun.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Grapes',
            price: 544,
            price2: 620,
            pack: '69% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30000482_23-fresho-grapes-red-globe.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Fresh Figs',
            price: 184,
            price2: 200,
            pack: '56% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/20001006_8-fresho-fresh-figs.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Passion Fruit',
            price: 194,
            price2: 220,
            pack: '45% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30000543_15-fresho-passion-fruit.jpg?tr=w-1920,q=80',
        },
    ]
    var settings = {
        dots: true,
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
            <div className='w-9/12 m-auto  rounded-xl '>
                <div className='image relative  m-10 ' >
                    <Carousel showArrows={false}
                        showThumbs={false}
                        autoPlay
                        autoplaySpeed={2000}
                        showIndicators={false}
                        showStatus={false}
                        autoFocus={true} className=' '>

                        <div  >
                            <img className='rounded-2xl' src="https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21875-DT-460-all-cm-220624.jpg?tr=w-1920,q=80" />
                        </div>
                        <div >
                            <img className='rounded-2xl' src="https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21878-DT-460-all-cm-220624.jpg?tr=w-1920,q=80" />
                        </div>
                        <div >
                            <img className='rounded-2xl' src="https://www.bigbasket.com/media/uploads/banner_images/B2C061811355-21880-DT-480-all-cm-220624.jpg?tr=w-1920,q=80" />
                        </div>
                        <div >
                            <img className='rounded-2xl' src="https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21877-DT-460-all-cm-220624.jpg?tr=w-1920,q=80" />
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className='w-8/12 m-auto ml-3 '>
                <h2 className='text-2xl mt-1 ml-6 ' >
                    <b>Fresh Fruits</b></h2>
                <div className='mt-3 '>
                    <CardShow />
                </div>
            </div>


            
            <div className='w-8/12 m-auto pt-10 '>
                <h2 className='text-2xl mt-1 ml-6' >
                    <b>My Smart Basket</b></h2>

                <div className='mt-3'>

                    <ProductsListHome />
                    {/* <Slider {...settings}>
                        {
                            cards.map((card, i) => (
                                <div key={i} className=' h-[470px]  text-black max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden '>
                                    <div className='relative border-b-1 h-52  rounded-t-xl b-2 flex justify-center items-center '>
                                        <img src={card.image} height="500px" width="192px" className='h-3/ w-  border-2 rounded-xl object-cover' alt="..." />
                                        <span className="absolute top-2 left-4 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                                            {card.pack}
                                        </span>
                                    </div>
                                    <div className='flex flex-col justify-center items-center m-[8px]'>

                                        <p className='text-xl font-semibold m-'>{card.name}</p>
                                        <select className='border-2 w-4/5 m-4'>
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
                            ))
                        }
                    </Slider> */}
                </div>
            </div>



            <div className='w-8/12 m-auto'>
                <h2 className='text-2xl mt-4 ml-6' >
                    <b>Best seller</b></h2>
                <div className='mt-3'>
                    <ProductsListHome />

                    {/* <Slider {...settings}>
                        {
                            data.map((card, i) => (
                                <div key={i} className=' h-[470px]  text-black rounded-xl flex flex-wrap max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
                                    <div className='relative border-b-1 h-52 rounded-t-xl b-2 flex justify-center items-center z-1'>
                                        <img src={card.image} height="500px" width="192px" className='h-3/ w-  border-2 rounded-xl object-cover' alt="..." />
                                        <span className="absolute top-2 left-4 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                                            {card.pack}
                                        </span>
                                    </div>
                                    <div className='flex flex-col justify-center items-center m-[8px]'>

                                        <p className='text-xl font-semibold m-'>{card.name}</p>
                                        <select className='border-2 w-4/5 m-4'>
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
                            ))
                        }
                    </Slider> */}
                </div>
            </div>

            <div className='w-8/12 m-auto '>
                <h2 className='text-2xl mt-4' >
                    <b>Fruits & Vegetables</b></h2>
                <div className='mt-3 grid grid-cols-1 md:grid-cols-4 gap-6'>
                    {
                        cards.map((card, i) => (
                            <div key={i} className=' flex flex-wrap max-w-60 rounded-lg shadow-md '>
                                <div className='relative rounded-t-xl  flex justify-center items-center z-1'>
                                    <img src={card.image} height="200px" width="250px" className='rounded-xl object-cover' alt="..." />

                                </div>

                            </div>
                        ))
                    }
                </div></div>

            <div className='w-8/12 m-auto '>
                <h2 className='text-2xl mt-4 ' >
                    <b>Your Daily Staples</b></h2>
                <div className='mt-3 grid grid-cols-1 md:grid-cols-6 gap-6'>
                    {
                        Daily.map((card, i) => (
                            <div key={i} className=' flex flex-wrap max-w-60 rounded-lg shadow-md '>
                                <div className='relative rounded-t-xl  flex justify-center items-center z-1'>
                                    <img src={card.image} height="200px" width="250px" className='rounded-xl object-cover' alt="..." />

                                </div>

                            </div>
                        ))
                    }
                </div></div>

            <div className='mt-3'>

            </div>

        </>
    )
}
