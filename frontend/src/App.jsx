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
import MensShopAll from './pages/MensShopAll'
import KidsShopAll from './pages/KidsShopAll'
import NotFoundPage from './pages/NotFound'
import SignupPage from './pages/SignUp'
import SignInPage from './pages/signin'
import WomensShopAll from './pages/WomensShopAll'

function App() {


  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/login' element={ <SignInPage/>}/>
      <Route path='/signup' element={ <SignupPage/>}/>

      <Route path='shop-all' element={ <ShopAll/>}/>

      <Route path='collections/men-shop-all' element={<MensShopAll/>}/>
      <Route path='collections/kids-shop-all' element={<KidsShopAll/>}/>
      <Route path='collections/women-shop-all' element={<WomensShopAll/>}/>
      
      <Route path='/collections/mens/:type' element={ <MensCollection/>}/>
      <Route path='/collections/womens/:type' element={ <WomensCollections/>}/>
      <Route path='/collections/kids/:type' element={ <KidsCollection/>}/>

      <Route path='*' element={<NotFoundPage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
