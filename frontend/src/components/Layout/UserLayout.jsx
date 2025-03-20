import React from 'react'
import { BriefcaseBusiness, Search, User, } from 'lucide-react'
import { Menu } from '../../data/NavbarData'
import DesktopMenu from '../Common/DesktopMenu'

const MenuItems = [
    {
        Title: "Women",
        subMenu: {
            "New In": [
                { title: 'Spring', Link: '/spring' }, 'Spring Lookbook', 'Tracksuits', 'The T-shirt Guide'
            ]
        }
    },
    {
        Title: "Men",
        subMenu: ""
    },
    {
        Title: "Kids",
        subMenu: ""
    },
    {
        Title: "Our mission ",
        subMenu: ""
    }
]

const UserLayout = () => {

    return (
        <>
            {/* Navbar */}
            <div className='fixed w-full z-50 flex justify-between items-center py-2  bg-white h-13 '>

                {/* Left part */}

                <div className=' hidden  w-[33.3%] h-full md:flex    text-[12px]  text-black font-[400]'>
                    <DesktopMenu />
                </div>


                {/* Middle part for logo */}
                <div className='md:w-[33.3%] w-full flex justify-center'>
                    <h1 className='font-poppins text-[26px] font-medium'>ROGER</h1>
                </div>



                {/* right part */}
                <div className='w-[33.3%] hidden md:flex justify-end space-x-5 items-center px-4'>
                    <div>
                        <a href="" className='text-[10px] text-blue-600'> Inner circle </a>            </div>
                    <div className='flex items-center bg-gray-100 w-[90px] h-5 rounded-full  ' onClick={() => alert("clicked")}>
                        <Search className='size-2.5 text-black relative left-1 ' />
                        <input type="search" name="search" placeholder='search' className='w-[78px] text-[10px] px-2 font-poppins outline-0 pointer-events-none' />
                    </div>
                    <div>ind</div>
                    <div> <User className='size-5 text-black' /> </div>
                    <div> <BriefcaseBusiness className='size-5' /></div>
                </div>

            </div>

            <div className="relative hidden md:block w-full h-screen ">

                <img
                    src="src/assets/Hero-Desktop.webp"
                    alt="Background"
                    className="absolute inset-0 w-full h-auto object-coer obect-top top-13 "
                />

                <div className="relative w-full h-full  flex items-center justify-center top-[20%]">
                    <h1 className="text-white text-5xl font-serif font-[100] ">
                        For Every Season
                    </h1>
                </div>
            </div>
        </>
    )
}

export default UserLayout
