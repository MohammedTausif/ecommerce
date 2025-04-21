import './App.css'
import { Route, BrowserRouter, Routes, } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import ShopAll from './components/Common/ShopAll'
import Home from './pages/Home'
import ProductGrid from './pages/Test'
import MensCollection from './pages/MensCollection'
import { Collection } from 'mongoose'
import WomensCollections from './pages/WCollections'
import KidsCollection from './pages/KidsCollection'

function App() {


  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='shop-all' element={ <ShopAll/>}/>
      <Route path='test' element={ <ProductGrid/>}/>
      <Route path='/collections/mens/:type' element={ <MensCollection/>}/>
      <Route path='/collections/womens/:type' element={ <WomensCollections/>}/>
      <Route path='/collections/kids/:type' element={ <KidsCollection/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
