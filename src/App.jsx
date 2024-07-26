import {BrowserRouter,Routes,Route} from "react-router-dom";


import Landing from "./Modal/Landing";
import { RecoilRoot } from "recoil";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Fruits from "./Pages/Fruits";
import Tea from "./Pages/Tea";
import Nandini from "./Pages/Nandini";


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
    





     </Routes>
     
     </BrowserRouter>
    </RecoilRoot>

    </>
  )
}

export default App
