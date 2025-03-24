import './App.css'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Navbar from './components/Common/Testing'

function App() {


  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<UserLayout/>}/>
      <Route path='test' element={<Navbar />}/>
    </Routes>
    </Router>
   </>
  )
}

export default App
