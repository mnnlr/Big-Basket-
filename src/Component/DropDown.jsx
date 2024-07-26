import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import DropDownlist from './DropDownlist';
export default function Dropdown() {
  // const menudata = [
  //   {
  //     name: "Apparel",
  //     subMenuItems: [
  //       {
  //         name: "Boy'SWear",
  //         children: [
  //           { name: "T'Shirts" },
  //           { name: "Jeans" },
  //           { name: "Shirts" },
  //           { name: "Trousers" },
  //           { name: "Shorts" },
  //         ]
  //       },
  //       {
  //         name: "Girl'SWear",
  //         children: [
  //           { name: "T'Shirts" },
  //           { name: "Jeans" },
  //           { name: "Shirts" },

  //         ]
  //       },
  //       {
  //         name: "Men'Apparel",
  //         children: [
  //           { name: "T'Shirts" },
  //           { name: "Jeans" },
  //           { name: "Shirts" },
  //           { name: "Trousers" },
  //           { name: "Shorts" },
  //         ]
  //       },
  //       {
  //         name: "Women'Apparel",
  //         children: [
  //           { name: "T'Shirts" },
  //           { name: "Jeans" },
  //           { name: "Shirts" },

  //         ]
  //       }

  //     ]
  //   },
  //   {
  //     name: "Fruits",
  //     subMenuItems: [
  //       {
  //         "name": "Apple",
  //         children: [
  //           { name: "Red'Apple" },
  //           { name: "Green'Apple" },
  //           { name: "Yellow'Apple" },

  //         ]
  //       },
  //       {
  //         "name": "Banana",
  //         children: [

  //         ]
  //       },
  //       {
  //         "name": "Orange",

  //       }
  //     ]
  //   },
  //   {
  //     name: "Vegetables",
  //     subMenuItems: [
  //       { name: "Carrot" },
  //       { name: "Broccoli" },
  //       { name: "Tomato" }
  //     ]
  //   },
  //   {
  //     name: "Drinks",
  //     subMenuItems: [
  //       {
  //         name: "Tea",
  //         children: [
  //           { name: "Black'Tea" },
  //           { name: "Green'Tea" },
  //           { name: "White'Tea" },

  //         ]
  //       },
  //       {
  //         name: "Coffee",
  //         children: [
  //           { name: "Black'Coffee" },
  //           { name: "Green'Coffee" },
  //           { name: "White'Coffee" },

  //         ]
  //       },
  //       {
  //         name: "Juice",
  //         children: [
  //           { name: "Apple'Juice" },
  //           { name: "Orange'Juice" },
  //           { name: "Mango'Juice" },
  //           { name: "Pineapple'Juice" },
  //           { name: "Watermelon'Juice" },
  //           { name: "Grape'Juice" },
  //           { name: "Strawberry'Juice" },
  //           { name: "Blueberry'Juice" },
  //           { name: "Raspberry'Juice" },

  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Snacks",
  //     subMenuItems: [
  //       {
  //         name: "Chocolates",
  //         children: [
  //           { name: "Dark'Chocolate" },
  //           { name: "Milk'Chocolate" },
  //           { name: "White'Chocolate" },
  //           { name: "Caramel'Chocolate" },
  //           { name: "Strawberry'Chocolate" },
  //           { name: "Blueberry'Chocolate" },
  //         ]
  //       },
  //       {
  //         name: "Candies",
  //         children: [
  //           { name: "Gummy'Bears" },
  //           { name: "Lollipops" },
  //           { name: "Hard'Candies" },
  //           { name: "Sour'Candies" },
  //           { name: "Gummy'Worms" },
  //         ]
  //       },
  //       {
  //         name: "ReadyToCook",
  //         children: [
  //           { name: "Pasta" },
  //           { name: "Rice" },
  //           { name: "Noodles" },

  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Kitchen,Garden",
  //     subMenuItems: [
  //       {
  //         name: "Appliances&Electricals",
  //         children: [
  //           { name: " Air'fryers" },
  //           { name: "Battery" },
  //           { name: "coffew'Maker" },

  //         ]
  //       },
  //       {
  //         name: "Bakeware",
  //         children: [
  //           { name: "Cutters" },
  //           { name: "Moulds" },
  //           { name: "Pans" },

  //         ]
  //       },
  //       {
  //         name: "Electronics&Devices",
  //         children: [
  //           { name: "Auio&Accesorices" },
  //           { name: "Camera&Photo" },
  //           { name: "Computer&Tablets" },


  //         ]
  //       },
  //       {
  //         name: "Flask",
  //         children: [
  //           { name: "Casserole" },
  //           { name: "Cookware" },
  //           { name: "Dishware" },


  //         ]
  //       },
  //       {
  //         name: "Gardening",
  //         children: [
  //           { name: "Live'Plants" },
  //           { name: "Planters" },
  //           { name: "Pots" },
  //           { name: "Seeds" },
  //           { name: "Tools" },
  //           { name: "Watering" },

  //         ]
  //       },
  //       {
  //         name: "Kitchen'Accessories",
  //         children: [
  //           { name: "Lighters" },
  //           { name: "Mixers" },
  //           { name: "Pots" },
  //           { name: "Slicers" },
  //         ]
  //       },
  //       {
  //         name: "Crockery&Cutlery",
  //         children: [
  //           { name: "Cups" },
  //           { name: "Dinnerware" },
  //           { name: "Glassware" },
  //           { name: "Plates" },
  //           { name: "Silverware" },
  //           { name: "Tableware" },
  //           { name: "Utensils" },
  //           { name: "Water Bottles" },

  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Umbreallas&Rainwear",
  //     subMenuItems: [
  //       {
  //         name: "Appliances&Electricals",
  //         children: [
  //           { name: " Air'fryers" },
  //           { name: "Battery" },
  //           { name: "coffew'Maker" },

  //         ]
  //       },
  //       {
  //         name: "Bakeware",
  //         children: [
  //           { name: "Cutters" },
  //           { name: "Moulds" },
  //           { name: "Pans" },

  //         ]
  //       },
  //       {
  //         name: "Chocolates",
  //         children: [
  //           { name: "Dark'Chocolate" },
  //           { name: "Milk'Chocolate" },
  //           { name: "White'Chocolate" },
  //           { name: "Caramel'Chocolate" },
  //           { name: "Strawberry'Chocolate" },
  //           { name: "Blueberry'Chocolate" },
  //         ]
  //       },
  //       {
  //         name: "Candies",
  //         children: [
  //           { name: "Gummy'Bears" },
  //           { name: "Lollipops" },
  //           { name: "Hard'Candies" },
  //           { name: "Sour'Candies" },
  //           { name: "Gummy'Worms" },
  //         ]
  //       },
  //       {
  //         name: "ReadyToCook",
  //         children: [
  //           { name: "Pasta" },
  //           { name: "Rice" },
  //           { name: "Noodles" },

  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Foodgrains,Oil&Masalla",
  //     subMenuItems: [
  //       {
  //         name: "Chocolates",
  //         children: [
  //           { name: "Dark'Chocolate" },
  //           { name: "Milk'Chocolate" },
  //           { name: "White'Chocolate" },
  //           { name: "Caramel'Chocolate" },
  //           { name: "Strawberry'Chocolate" },
  //           { name: "Blueberry'Chocolate" },
  //         ]
  //       },
  //       {
  //         name: "Candies",
  //         children: [
  //           { name: "Gummy'Bears" },
  //           { name: "Lollipops" },
  //           { name: "Hard'Candies" },
  //           { name: "Sour'Candies" },
  //           { name: "Gummy'Worms" },
  //         ]
  //       },
  //       {
  //         name: "ReadyToCook",
  //         children: [
  //           { name: "Pasta" },
  //           { name: "Rice" },
  //           { name: "Noodles" },

  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Lunck'Boxes",
  //     subMenuItems: [
  //       {
  //         name: "Chocolates",
  //         children: [
  //           { name: "Dark'Chocolate" },
  //           { name: "Milk'Chocolate" },
  //           { name: "White'Chocolate" },
  //           { name: "Caramel'Chocolate" },
  //           { name: "Strawberry'Chocolate" },
  //           { name: "Blueberry'Chocolate" },
  //         ]
  //       },
  //       {
  //         name: "Candies",
  //         children: [
  //           { name: "Gummy'Bears" },
  //           { name: "Lollipops" },
  //           { name: "Hard'Candies" },
  //           { name: "Sour'Candies" },
  //           { name: "Gummy'Worms" },
  //         ]
  //       },
  //       {
  //         name: "ReadyToCook",
  //         children: [
  //           { name: "Pasta" },
  //           { name: "Rice" },
  //           { name: "Noodles" },

  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Baker,Cakesy&Dairy",
  //     subMenuItems: [
  //       {
  //         name: "Chocolates",
  //         children: [
  //           { name: "Dark'Chocolate" },
  //           { name: "Milk'Chocolate" },
  //           { name: "White'Chocolate" },
  //           { name: "Caramel'Chocolate" },
  //           { name: "Strawberry'Chocolate" },
  //           { name: "Blueberry'Chocolate" },
  //         ]
  //       },
  //       {
  //         name: "Candies",
  //         children: [
  //           { name: "Gummy'Bears" },
  //           { name: "Lollipops" },
  //           { name: "Hard'Candies" },
  //           { name: "Sour'Candies" },
  //           { name: "Gummy'Worms" },
  //         ]
  //       },
  //       {
  //         name: "ReadyToCook",
  //         children: [
  //           { name: "Pasta" },
  //           { name: "Rice" },
  //           { name: "Noodles" },

  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Beverages",
  //     subMenuItems: [
  //       {
  //         name: "Chocolates",
  //         children: [
  //           { name: "Dark'Chocolate" },
  //           { name: "Milk'Chocolate" },
  //           { name: "White'Chocolate" },
  //           { name: "Caramel'Chocolate" },
  //           { name: "Strawberry'Chocolate" },
  //           { name: "Blueberry'Chocolate" },
  //         ]
  //       },
  //       {
  //         name: "Candies",
  //         children: [
  //           { name: "Gummy'Bears" },
  //           { name: "Lollipops" },
  //           { name: "Hard'Candies" },
  //           { name: "Sour'Candies" },
  //           { name: "Gummy'Worms" },
  //         ]
  //       },
  //       {
  //         name: "ReadyToCook",
  //         children: [
  //           { name: "Pasta" },
  //           { name: "Rice" },
  //           { name: "Noodles" },

  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Beauty&Hygiene",
  //     subMenuItems: [
  //       {
  //         name: "Chocolates",
  //         children: [
  //           { name: "Dark'Chocolate" },
  //           { name: "Milk'Chocolate" },
  //           { name: "White'Chocolate" },
  //           { name: "Caramel'Chocolate" },
  //           { name: "Strawberry'Chocolate" },
  //           { name: "Blueberry'Chocolate" },
  //         ]
  //       },
  //       {
  //         name: "Candies",
  //         children: [
  //           { name: "Gummy'Bears" },
  //           { name: "Lollipops" },
  //           { name: "Hard'Candies" },
  //           { name: "Sour'Candies" },
  //           { name: "Gummy'Worms" },
  //         ]
  //       },
  //       {
  //         name: "ReadyToCook",
  //         children: [
  //           { name: "Pasta" },
  //           { name: "Rice" },
  //           { name: "Noodles" },

  //         ]
  //       }
  //     ]
  //   },


  // ]

  const [isopen, setIsopen] = useState(false);
  // const [openMenuIndex, setOpenMenuIndex] = useState(true);
  // const [childIndex, setChildIndex] = useState(true)

  const toggleButton = (e) => {
    setIsopen(!isopen)
  }

  // const toggleSubMenu = (index) => {
  //   if (openMenuIndex === index) {
  //     setOpenMenuIndex();
  //   } else {
  //     setOpenMenuIndex(index);
  //   }
  // };
  // const toggleChild = (index) => {
  //   setChildIndex(index === childIndex ? null : index);
  // }
  return (
    <div className=''
    //  className={`relative ${isopen?"bg-black 100":null}`}
     >
      <button className="buttontwo flex text-white pl-5 focus:outline-none focus:ring focus:ring-white z-50" onClick={() => toggleButton()}>
        <p className='mr-10'><span className='text-xs'>Shop by</span><br /> Category</p> <span className='mt-2 text-3xl'>{isopen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
      </button>

      {
        isopen && (
          <div className='bg-black w-full h-full'><DropDownlist /></div>
          // <div className='relative bg-black w-80  '>
          //   <div className=' absolute text-base p-2 cursor-pointer shadow-lg shadow-cyan-500/50   my-2 bg-zinc-800 text-white w-60 text-xl shadow-lg    rounded-l-lg'>

          //     {
          //       menudata.map((item, index) => (
          //         <ul className='group'>

          //           <li onMouseOverCapture={() => toggleSubMenu(index)} className='group-hover:bg-zinc-600 group-active:bg-zinc-600 w-max'>{item.name}</li>
          //           {
          //             openMenuIndex === index && (
          //               <div className=' text-black text-base  top-0 inset-x-2/3 mx-20   w-60 h-[495px] absolute   bg-gray-200  shadow-lg px-1 rounded-sm  '>
          //                 <ul className=" ">
          //                   {item.subMenuItems.map((subItem, subIndex) => (
          //                     <li onMouseOver={() => toggleChild(subIndex)} className=' pt-2 hover:bg-white active:bg-white w-max  h-[100px]rounded-sm  '>{subItem.name}</li>
          //                   ))}

          //                   {
          //                     item.subMenuItems[childIndex]?.children && (
          //                       <div className=' text-black text-base top-0 inset-x-2/3 mx-20   w-60 h-[495px] absolute bg-white  shadow-lg backdrop-blur-xl px-1  rounded-r-lg'>
          //                         <ul className='
          //                      ' >
          //                           {
          //                             item.subMenuItems[childIndex].children.map((childItem, childId) => (
          //                               <li key={childId} className='pt-2 hover:bg-gray-200 active:bg-gray-200  w-max  h-[100px]rounded-sm '>{childItem.name}</li>
          //                             ))}
          //                         </ul>
          //                       </div>
          //                     )}

          //                 </ul>
          //               </div>
          //             )}
          //         </ul>
          //       ))}
          //   </div>
          //   </div>
            )

      }
         
    </div>

  )
}
