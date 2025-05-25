import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/PlaceOrder' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
  )
}

export default App