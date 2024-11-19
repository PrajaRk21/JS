import React from 'react'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Signin from './Component/Signin'
import About from './Component/About'
import{Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App;