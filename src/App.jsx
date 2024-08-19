import {BrowserRouter,Routes,Route} from "react-router-dom";


import Landing from "./Modal/Landing";
import { RecoilRoot } from "recoil";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Fruits from "./Pages/Fruits";
import Tea from "./Pages/Tea";
import Nandini from "./Pages/Nandini";
import CardView from "./Pages/CardView";
import Cart from "./Pages/Cart";
import { WishView } from "./Pages/WishView";
import AddProducts from "./Pages/AddProducts";
import { Success } from "./Pages/Success";
import { Cancel } from "./Pages/Cancel";
import { Order } from "./Pages/Order";


function App() {

  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
     <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/fruits" element={<Fruits/>} />
    <Route path="/tea" element={<Tea/>} />
    <Route path="/nandini" element={<Nandini/>} />



    <Route path="/signup" element={<Signup/>} />
    <Route path="/view" element={<CardView  />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wish" element={<WishView />} />
    <Route path="/addproducts" element={<AddProducts />} />
    <Route path="/success" element={<Success />} />

    <Route path="/Cancel" element={<Cancel />} />
    <Route path="/order" element={<Order />} />





    
    





     </Routes>
     
     </BrowserRouter>
    </RecoilRoot>

    </>
  )
}

export default App
