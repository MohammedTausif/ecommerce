import React, { useState } from 'react'
import { BriefcaseBusiness, Search, ShoppingBag, User, } from 'lucide-react'
import DesktopMenu from '../Common/DesktopMenu'
import Cart from '../Cart/Cart'
import SearchPage from './Search'

const Navbar = () => {
    const [cartModel, setCartModel] = useState(false)
    const [searchModal, setSearchModal] = useState(false)

    return (
        <nav className="fixed w-full z-999 py-2 bg-white ">
            <div className="flex  items-center w-[100vw] max-w-screen-xl h-9 ">

                {/* Left part */}
                <div className="hidden md:flex  w-1/3 text-[12px] text-black font-[400]">
                    <DesktopMenu />
                </div>

                {/* Middle part for logo */}
                <div className="flex justify-center w-full md:mx-[-120px]">
                    <h1 className="font-poppins text-[26px] font-medium">ROGER</h1>
                </div>

                {/* Right part */}
                <div className="hidden md:flex w-1/3 justify-end space-x-4 items-center  ">
                    <div className='absolute right-52 flex '>
                        <a href="" className="text-[10px] text-blue-600">Inner circle</a>
                    </div>
                    <div
                        className="absolute right-24 flex items-center justify-center bg-gray-100 w-[90px] h-5 rounded-full hover:outline-[0.5px]"
                        onClick={() => setSearchModal(!searchModal)}
                    >
                        <Search className="size-2.5 text-black relative left-1" />
                        <input
                            type="search"
                            name="search"
                            placeholder="search"
                            className="w-[78px] text-[10px] px-2 font-poppins outline-0 pointer-events-none" />
                    </div>

                    <div className='absolute right-15 flex items-center'>
                        <img className='size-5 cursor-pointer rounded-full object-cover '
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/2560px-Flag_of_India.png" alt="" />
                    </div>

                    <div className='absolute right-6 '>
                        <img className=' size-4 cursor-pointer'
                            src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iIj4KICAgICAgICA8cGF0aCBkPSJNMTMuMTk1OSAxNi41VjE0LjgyMUMxMy4xOTU5IDExLjMzIDEwLjQ2MjYgOC41I.svg" alt="" />

                    </div>
                    <div className='absolute right-2' onClick={() => setCartModel(!cartModel)}>
                        <img className='w-[16px] h-[17px] cursor-pointer'
                            src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3QtY3VycmVudCIgZGF0YS1sYWJlbD0ic3ZnIj4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsa.svg" alt="" />
                    </div>
                </div>
            </div>

            <SearchPage
                isOpen={searchModal}
                onClose={() => setSearchModal(!searchModal)} 
                />

            <Cart
                isOpen={cartModel}
                onClick={() => setCartModel(!searchModal)} 
                />
        </nav>


    )
}

export default Navbar
