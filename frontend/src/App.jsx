import './App.css'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import CategoriesPage from './pages/Collection'
import ShopAll from './components/Common/ShopAll'

function App() {


  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<UserLayout/>}/>
      <Route path='shop-all' element={ <ShopAll/>}/>
    </Routes>
    </Router>
   </>
  )
}

export default App
