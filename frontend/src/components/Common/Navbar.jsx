import React, { useState } from 'react'
import { AlignJustify, BriefcaseBusiness, Search, ShoppingBag, User, } from 'lucide-react'
import DesktopMenu from '../Common/DesktopMenu'
import Cart from '../Cart/Cart'
import SearchPage from './Search'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [cartModel, setCartModel] = useState(false)
    const [searchModal, setSearchModal] = useState(false)
    const [searchError, setSearchError] = useState('')
    return (
        <nav className="fixed w-full z-50 bg-white top-0">

            <div className="w-full ">
                <div className="relative flex justify-between w-full  items-center  h-12.5 ">
                    {/* Left Part  */}
                    <div className='hidden md:flex  text-[12px] font-[400] text-black ' ><DesktopMenu /></div>
                    {/* mobile cart */}
                    <div
                        className='px-2 cursor-pointer md:hidden'
                        onClick={'/'} >
                        <AlignJustify size={20} className='stroke-1' />

                    </div>

                    {/* Middle Part: Logo */}
                    <div className='absolute md:left-[47%] left-[43%] transform translatex-[50%]'>
                        <h1 className="font-poppins text-[26px] font-medium">ROGER</h1>
                    </div>

                    {/* Right Part */}
                    <div>
                        <div className='hidden md:flex items-center pr-4 space-x-6'>
                            <div className='p-2'>
                                <Link to='/' className='text-[10px] text-[#002FA7]   '>Inner circle</Link>
                            </div>

                            <div
                                className=" flex items-center justify-center bg-gray-100 w-[90px] h-5 rounded-full hover:outline-[0.5px]"
                                onClick={() => setSearchModal(!searchModal)}
                            >
                                <Search className="size-2.5 text-black relative left-1" />
                                <input
                                    type="search"
                                    name="search"
                                    placeholder="search"
                                    className="w-[78px] text-[10px] px-2 font-poppins outline-0 pointer-events-none" />
                            </div>

                            <div className=' items-center'>
                                <img className='size-5 cursor-pointer rounded-full object-cover '
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/2560px-Flag_of_India.png" alt="" />
                            </div>

                            <div className=' '>
                                <img className=' size-4 cursor-pointer'
                                    src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iIj4KICAgICAgICA8cGF0aCBkPSJNMTMuMTk1OSAxNi41VjE0LjgyMUMxMy4xOTU5IDExLjMzIDEwLjQ2MjYgOC41I.svg" alt="" />
                            </div>

                            <div className='' onClick={() => setCartModel(!cartModel)}>
                                <img className='w-[16px] h-[17px] cursor-pointer'
                                    src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3QtY3VycmVudCIgZGF0YS1sYWJlbD0ic3ZnIj4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsa.svg" alt="" />
                            </div>
                        </div>

                        {/* Mobile Cart */}
                        <div className='px-3 md:hidden' onClick={() => setCartModel(!cartModel)}>
                            <img className='w-[16px] h-[17px] cursor-pointer'
                                src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3QtY3VycmVudCIgZGF0YS1sYWJlbD0ic3ZnIj4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsa.svg" alt="" />
                        </div>

                    </div>
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

            {/* Mobile Search Input  */}

            <div className='md:hidden bg-white w-full h-12.5'>
                <div 
                onClick={()=>setSearchModal(!searchModal)}
                className= 'flex  text-black p-2 cursor-pointer'
                >
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full h-9 bg-white text-black text-[10px] px-2 font-poppins  border-[0.5px] border-gray-200 focus:outline-0  pointer-events-none" />
                    <button type="submit" className='px-2 h-9 flex justify-center items-center border-[0.5px] border-gray-200 '>

                    <Search className="text-black" size={18} />
                    </button>

                </div>

            </div>

        </nav>


    )
}

export default Navbar


/*  */