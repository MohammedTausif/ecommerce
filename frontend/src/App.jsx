import './App.css'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import CategoriesPage from './pages/Collection'

function App() {


  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<UserLayout/>}/>
      <Route path='test' element={ <CategoriesPage/>}/>
    </Routes>
    </Router>
   </>
  )
}

export default App
