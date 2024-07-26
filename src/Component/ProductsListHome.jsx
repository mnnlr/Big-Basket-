import React from 'react'
import ProductsCard from './ProductsCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray",color:"black"
            // top:"0" ,right:"100px",marginTop:"-20px",width:"20px"
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray",
            // top:"0",left:"700px",marginTop:"-20px",width:"20px"
         }}
        onClick={onClick}
      />
    );
  }

export default function ProductsListHome() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
              
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    const cards = [
        {
            name: 'Capsicum-Green',
            price: 95,
            price2: 130,
            pack: '78% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/10000067_24-fresho-capsicum-green.jpg?tr=w-1920,q=80'

        },
        {
            name: 'Carrot-Orange(loose)',
            price: 110,
            price2: 150,
            pack: '56% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Cauliflower',
            price: 95,
            price2: 105,
            pack: '32% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Coriander Leaves',
            price: 130,
            price2: 190,
            pack: '48% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Guava-Thai',
            price: 64,
            price2: 80,
            pack: '81% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Jamun',
            price: 104,
            price2: 120,
            pack: '23% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30000991_4-fresho-jamun.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Grapes',
            price: 544,
            price2: 620,
            pack: '48% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30000482_23-fresho-grapes-red-globe.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Fresh Figs',
            price: 184,
            price2: 200,
            pack: '89% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/20001006_8-fresho-fresh-figs.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Passion Fruit',
            price: 194,
            price2: 220,
            pack: '99% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/30000543_15-fresho-passion-fruit.jpg?tr=w-1920,q=80',
        },
    ]
    
  return (
    <div className="">
      <div className="">
      <Slider {...settings}>
        {
        cards.map((cards, index) => (
      
        <ProductsCard key={index} card={cards} />
        ))}
      
        </Slider>
      </div>
    </div>
  )
}
