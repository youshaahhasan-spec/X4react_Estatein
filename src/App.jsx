import { useState } from 'react'
import './App.css'
import TopHeader from './component/TopHeader/TopHeader'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopHeader/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      </Routes>
    </>
  )
}

export default App
