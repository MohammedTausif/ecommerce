import React, { useState } from 'react'
import { BriefcaseBusiness, Search, ShoppingBag, User, } from 'lucide-react'
import DesktopMenu from '../Common/DesktopMenu'
import Cart from '../Cart/Cart'
import SearchPage from './Search'

const Navbar = () => {
    const [cartModel, setCartModel] = useState(false)
    const [searchModal, setSearchModal] = useState(false)
    const [searchError, setSearchError] = useState('')
    return (
        <nav className="fixed w-full z-50 bg-white top-0 borde-b-2  ">

            <div className="w-full ">
            <div className="relative flex justify-between  items-center max-w-screen-xl h-12.5   ">
                <div >one</div>
                <div>two</div>
                <div className='flex items-center pr-4 space-x-4'>three</div>

                {/* Left part */}
                {/* <div className="hidden md:flex   text-[12px] text-black font-[400]">
                    <DesktopMenu />
                </div> */}

                {/* Middle part for logo */}
                {/* <div className="absolute  left-[52%]">
                    <h1 className="font-poppins text-[26px] font-medium">ROGER</h1>
                </div> */}

                {/* Right part */}
              
               
                
            </div> 


            <Cart
                isOpen={cartModel}
                onClick={() => setCartModel(false)} 
                />
                <SearchPage
                isOpen={searchModal}
                onClose={() => setSearchModal(!searchModal)} 
                />


            </div> 
            
        </nav>


    )
}

export default Navbar


/*  */