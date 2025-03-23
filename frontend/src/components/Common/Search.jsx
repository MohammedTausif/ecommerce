import { Search, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { products, tags as searchTags, footerLinks } from '../../data/searchData'


const SearchPage = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [Error, setError] = useState('')

    function handleSearch(e) {
        e.preventDefault();
        alert("feature coming soon")
        console.log("searched for :", searchQuery)
    }

    // To disable background scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) {
        return
    }

    return (
        <div className="fixed inset-0 z-50  overflow-y-auto ">
            <div className="fixed inset-0 bg-black/40 bg-opacity-30 "
                onClick={onClose} ></div>

            <div className=' absolute  w-[31vw]  h-screen top-0  bg-white shadow-md transition-all duration-300 right-0'
                onClick={(e) => e.stopPropagation()} >
                <div className='text-black font-poppins flex items-center justify-between mx-auto   '>
                    <div className='w-full '>
                        <div className='text-black flex items-center border-[0.5px] border-gray-200 rounded  '>
                            <button className='w-12 h-11 flex items-center justify-center ' type="submit"
                                onClick={(e) => handleSearch(e)}
                            >
                                <Search className='size-6 stroke-1 text-gray-800 cursor-pointer' /> </button>
                            <input
                                type="text"
                                value={searchQuery}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter")
                                        handleSearch(e)
                                }}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder='Search' className='px- h-10 font-poppins  outline-none  w-[85%] rounded' />
                        </div>
                    </div>
                    <div className='w-12 h-11 flex justify-center items-center cursor-pointer border-[0.5px] border-gray-200' onClick={onClose}>
                        <X className='size-7' /></div>
                </div>

                {/* we will display error message here  */}
                {
                    Error && <div className='text-sm px-3 py-4 transition-all duration-300'>We're sorry, no results for {searchQuery}</div>
                }

                {/* popular search section */}
                <div className='w-full h-screen mt-4 '>
                    <h1 className='font-poppins font-[400] text-lg px-3'>Popular Searches</h1>

                    {/* Popular search tags */}
                    <div className='w-full mt-2'>
                        <div className='w-full flex flex-wrap gap-4 px-3 '>
                            {
                                searchTags.map((tag) => (
                                    <button className='bg-[#f8f8f8] border-gray-200 border-[0.5px] px-4 py-[9px]  rounded-full flex justify-center items-center hover:border-gray-300'
                                        key={tag.id}>
                                        <Link to={'/'}
                                            className='text-[11px] font-poppins'>
                                            {tag.title}
                                        </Link>
                                    </button>
                                ))
                            }
                        </div>

                    </div>

                    {/* image card */}
                    <div className='w-full bg-white  h-[100vh] mt-3'>

                        <div className='flex flex-wrap '>

                            {products.map((product) => (

                                <div className=' relative w-[50%]  ' key={product.id}>
                                    <Link to={product.Link}>
                                        <img
                                            className='object-cover cursor-pointer'
                                            src={product.imageUrl} alt="card image" />

                                        <button className='absolute bottom-5  left-[20%] right-[20%] w-auto  text-xs bg-white  hover:backdrop-blur hover:bg-white/50 transition-all duration-300 cursor-pointer px-3 py-2.5 text-black font-poppins rounded-full'>
                                            {product.title}
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className=' w-full '>
                    <h1 className='text-lg font-poppins text-black mt-2 p-3'>Discover Our Materials</h1>

                    <div className=' px-3 mt-2 w-full space-y-4 text-xs bg-white '>
                        <div className='flex w-full gap-4 flex-wrap'>
                            {
                                footerLinks.map((item) => (
                                    <h2 key={item.title} className='min-w-[130px] cursor-pointer opacity-30 hover:opacity-100 ' >
                                        {item.title}
                                    </h2>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
