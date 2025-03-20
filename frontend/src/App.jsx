import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Navbar from './components/Common/Testing'
import DesktopMenu from './components/Common/DesktopMenu'

function App() {


  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<UserLayout/>}/>
      <Route path='test' element={<DesktopMenu />}/>
    </Routes>
    </Router>
   </>
  )
}

export default App
