import React, { useEffect, useState } from 'react';
import "./Navbar.css";
 
import { useRecoilState } from 'recoil';
import { PageState } from '../../State';
import { Link } from 'react-router-dom';
import { FaCompass } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";

import Dropdown from './DropDown';
import DropDownlist from './DropDownlist';
export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [page, setPage] = useRecoilState(PageState)
  const [login, setLogin] = useState('')

  const handleclick = () => {
    setMobile(!mobile);
  }
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setLogin(true)
    }
  })
  function logout() {
    localStorage.removeItem("token")
    setLogin(false)
    navigate("/")
  }

  const[liopen,setLiopen]=useState(false)
  const litogglebutton =()=>{
    setLiopen(!liopen)
  }

 return (
    <>
      <div className='navnavbar  bg-white  border-gray-200 rounded-lg shadow '>
        <div>
          <div>
            <h1 className='logoo'><b>BigBesket</b></h1>
            <button className='menuu' onClick={() => setMobile(!mobile)}><HiOutlineMenu /></button>
          </div>

          <div >
            <input type='text' placeholder='Search Products........' className='navbarinput' ></input>

            <button className='bg-gray-300 ml-4 p-1 text-black rounded-lg pl-10 h-10 location '>Select Location</button>
            {
              login ? (
                <button className='buttonn text-white' onClick={logout} >Logout</button>
              ) : <Link to="/signup" ><button className="buttonn text-white">Login/Sign<br/>up</button></Link>
            }
          </div>

          <div>
          <Dropdown />
          </div>

          <div>

            <ul className='ultext'>
              <li className={`linavbar  ${page === "home" ? "active" : null}`} onClick={() => { setPage("home"); handleclick() }}  >Home</li>
              <li className={`linavbar  ${page === "fruits" ? "active" : null}`} onClick={() => { setPage("fruits"); handleclick() }} >Fruits</li>
              <li className={`linavbar  ${page === "tea" ? "active" : null}`} onClick={() => { setPage("tea"); handleclick() }} >Tea</li>
              <li className={`linavbar   ${page === "nandini" ? "active" : null}`} onClick={() => { setPage("nandini"); handleclick() }} >Nandini</li>
              <li className={`linavbarr   ${page === "linavbarr" ? "active" : null}`} >
              <div className="">
            <button className="active:text-green-700 hover:text-red-700" onClick={() => litogglebutton()}>
            <FaAngleDoubleRight />
            </button>
            {
              liopen && (
                <div className='absolute font-serif   bg-white border border-gray-200 rounded-lg shadow-lg  px-2'>
             <ul className='mr-10 pb-5 pt-1  '>
              <li className=' hover:text-red-700 active:text-red-300 focus:outline-none focus:ring focus:ring-red-300'>Milk</li>
              <li className=' hover:text-red-700 active:text-red-300 focus:outline-none focus:ring focus:ring-red-300'>Chocolates</li>
              <li className=' hover:text-red-700 active:text-red-300 focus:outline-none focus:ring focus:ring-red-300'>Snacks</li>
              <li className=' hover:text-red-700 active:text-red-300 focus:outline-none focus:ring focus:ring-red-300'>Hair Care</li>
              <li className=' hover:text-red-700 active:text-red-300 focus:outline-none focus:ring focus:ring-red-300'>Kelloggs</li>
              <li className=' hover:text-red-700 active:text-red-300 focus:outline-none focus:ring focus:ring-red-300'>Honey</li>
              <li className=' hover:text-red-700 active:text-red-300 focus:outline-none focus:ring focus:ring-red-300'>Eggs</li>

              
             </ul>
             
            </div>
              )

            }
          </div>
              </li>
              <li className='linavbarrr'>|</li>

              <li className={`linavbarrr   ${page === "cart" ? "active" : null}`} onClick={() => { setPage("cart"); handleclick() }} >Cart</li>
              <li className={`linavbarrr   ${page === "wish" ? "active" : null}`} onClick={() => { setPage("wish"); handleclick() }} >Wish</li>

             

            </ul>
          </div>
        </div>

      </div>



      {
        mobile &&
        <div className='mobile'>
          <ul className='mobile-link'>

            <li className={`linavbar  ${page === "home" ? "active" : null}`} onClick={() => { setPage("home"); handleclick() }}  >Home</li>
            <li className={`linavbar  ${page === "fruits" ? "active" : null}`} onClick={() => { setPage("fruits"); handleclick() }} >Fruits</li>
            <li className={`linavbar  ${page === "tea" ? "active" : null}`} onClick={() => { setPage("tea"); handleclick() }} >Tea</li>
            <li className={`linavbar  ${page === "nandini" ? "active" : null}`} onClick={() => { setPage("nandini"); handleclick() }} >Nandini</li>

            <button className='buttonmoblie'  >Login/signup</button>



          </ul>
        </div>
      }
    </>
  )
}
