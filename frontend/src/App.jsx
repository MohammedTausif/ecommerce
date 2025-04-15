import './App.css'
import { Route, BrowserRouter, Routes, } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import ShopAll from './components/Common/ShopAll'
import Home from './pages/Home'
import ProductGrid from './pages/Test'
import MensCollection from './pages/MensCollection'

function App() {


  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='shop-all' element={ <ShopAll/>}/>
      <Route path='test' element={ <ProductGrid/>}/>
      <Route path='collections/:category/:type' element={ <MensCollection/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
