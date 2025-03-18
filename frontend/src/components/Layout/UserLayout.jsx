import React from 'react'
import { BriefcaseBusiness, Search, User, } from 'lucide-react'

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
            <div className='fixed w-full flex justify-between items-center py-2 px-4 bg-white boder-b-2'>

                {/* Left part */}

                <div className=' hidden  w-[33%] h-full md:flex space-x-6  text-[12px] font-poppin text-black font-[400]'>

                    {
                        MenuItems.map((item, index) =>
                            <div
                                key={index}
                                className='cursor-pointer hover:text-gray-600'>
                                {item.Title}
                            </div>
                        )}
                </div>

                {/* Middle part for logo */}

                <div className='md:w-[33%] w-full flex justify-center'>
                    <h1 className='font-poppins text-[26px] font-medium'>ROGER</h1>
                </div>

                {/* right part */}

                <div className='w-[33%] hidden md:flex justify-end space-x-5 items-center'>
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

            <div className="w-full  overflow-hidden ">

                <img
                    src="src/assets/Hero-Desktop.webp"
                    alt="Background"
                    className="w-full h-auto block top-20  "
                />

                <div className="absolute inset-0 flex items-center justify-center top-[30%]">
                    <h1 className="text-white text-4xl font-serif font-[400]">
                        For Every Season
                    </h1>
                </div>

            </div>


        </>
    )
}

export default UserLayout
