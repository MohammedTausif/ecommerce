import './App.css'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Navbar from './components/Common/Testing'
import Button from './components/ui/Button'

function App() {


  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<UserLayout/>}/>
      <Route path='test' element={<Button />}/>
    </Routes>
    </Router>
   </>
  )
}

export default App
