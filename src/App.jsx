import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import CarDetails from "./pages/CarDetials"
import FAQ from './pages/FAQ'
import Footer from './components/Footer/Footer'
import "./App.css"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/CarDetails' element={<CarDetails/>} />
          <Route path='faq' element={<FAQ/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
