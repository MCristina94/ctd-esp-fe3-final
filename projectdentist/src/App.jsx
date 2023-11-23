import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Detail from './Pages/Detail'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
