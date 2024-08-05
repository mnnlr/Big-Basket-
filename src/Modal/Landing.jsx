import React from 'react';

import { useRecoilState } from 'recoil';
import { PageState } from '../../State';
import Navbar from '../Component/Navbar';
import Home from '../Pages/Home';
import Fruits from '../Pages/Fruits';
import Tea from '../Pages/Tea';
import Nandini from '../Pages/Nandini';
import Footer from '../Component/Footer';
import Cart from '../Pages/Cart';
import { WishView } from '../Pages/WishView';



export default function Landing() {
    const [page] = useRecoilState(PageState)
    if(page === "home") return(<><Navbar /><Home /><Footer/></>)
    if(page === "fruits") return(<><Navbar /><Fruits /><Footer/></>)
    if(page === "tea") return(<><Navbar /><Tea /><Footer/></>)
    if(page === "nandini") return(<><Navbar /><Nandini /><Footer/></>)
    if(page === "cart") return(<><Navbar /><Cart /><Footer/></>)
    if(page === "wish") return(<><Navbar /><WishView/><Footer/></>)











  return (
    <Home />
  )
}
const cards = [
  {
      name: 'Kiwi-Grren',
      price: 90,
      price2: 110,
      image: 'https://www.bigbasket.com/media/uploads/p/m/20000911_33-fresho-kiwi-green.jpg?tr=w-1920,q=80'

  },
  {
      name: 'BlueBrrey',
      price: 330,
      price2: 390,
      image: 'https://www.bigbasket.com/media/uploads/p/m/30009286_9-fresho-blueberry.jpg?tr=w-1920,q=80'
  },
  {
      name: 'Dragon Fruits',
      price: 95,
      price2: 105,
      image: 'https://www.bigbasket.com/media/uploads/p/m/40008982_15-fresho-dragon-fruit.jpg?tr=w-1920,q=80'
  },
  {
      name: 'Avocado',
      price: 70,
      price2: 100,
      image: 'https://www.bigbasket.com/media/uploads/p/m/30009284_16-fresho-avocado-imported-medium.jpg?tr=w-1920,q=80'
  },
  {
      name: 'Guava-Thai',
      price: 64,
      price2: 80,
      image: 'https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-1920,q=80'
  },
  {
      name: 'Jamun',
      price: 104,
      price2: 120,
      image: 'https://www.bigbasket.com/media/uploads/p/m/30000991_4-fresho-jamun.jpg?tr=w-1920,q=80'
  },
  {
      name: 'Grapes',
      price: 544,
      price2: 620,
      image: 'https://www.bigbasket.com/media/uploads/p/m/30000482_23-fresho-grapes-red-globe.jpg?tr=w-1920,q=80'
  },
  {
      name: 'Fresh Figs',
      price: 184,
      price2: 200,
      image: 'https://www.bigbasket.com/media/uploads/p/m/20001006_8-fresho-fresh-figs.jpg?tr=w-1920,q=80'
  },
  {
      name: 'Passion Fruit',
      price: 194,
      price2: 220,
      image: 'https://www.bigbasket.com/media/uploads/p/m/30000543_15-fresho-passion-fruit.jpg?tr=w-1920,q=80',
  },
]