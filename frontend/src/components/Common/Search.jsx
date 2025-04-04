import { Search, X } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { products, tags as searchTags, footerLinks } from '../../data/searchData'
import { motion, AnimatePresence } from 'framer-motion'


export const searchCartVariants = {
    hidden: {
        x: '100%',
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    visible: {
        x: '0%',
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeInOut' },
    }
};

const SearchPage = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [Error, setError] = useState(false)

    // Local state to keep container mounted until exit animation is complete
    const [shouldRender, setShouldRender] = useState(isOpen)
    const inputRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
        }
    }, [isOpen])


    function handleSearch(e) {
        e.preventDefault();
        console.log("searched for :", searchQuery)
        alert('feature coming soon')
        setError(true)
        setSearchQuery('')
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

    return (
        <>
            {/* Render only when it is True */}
            {shouldRender && (
                <div className='fixed inset-0 z-50  overflow-y-auto ' onKeyDown={(e)=>{
                    if(e.key == 'Escape'){
                     onClose()
                    }
                }}>
                    {/* Background */}
                    <div className='fixed inset-0 bg-black/40 bg-opacity-30'
                        onClick={onClose}>
                    </div>
                    <AnimatePresence mode="wait" onExitComplete={() => setShouldRender(false)} >
                        {
                            isOpen && (
                                <motion.div
                                    key="searchCart"
                                    variants={searchCartVariants}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                    style={{ originX: 0 }}
                                    className=' absolute w-[100%] md:w-[32vw]  h-screen top-0  bg-white shadow-md  right-0'
                                    onClick={(e) => e.stopPropagation()}

                                    onAnimationComplete={() => {
                                        if (inputRef.current) {
                                            inputRef.current.focus()
                                        }
                                    }}

                                >

                                    <div className='text-black font-poppins flex items-center justify-between mx-auto   '>
                                        <div className='w-full '>
                                            <div className='text-black flex items-center border-[0.5px] border-gray-200 rounded  '>
                                                <button className='w-12 h-11 flex items-center justify-center ' type="submit"
                                                    onClick={(e) => handleSearch(e)}
                                                >
                                                    <Search className='size-6 stroke-1 text-gray-800 cursor-pointer' /> </button>
                                                <input
                                                    ref={inputRef}
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
                                            <X className='size-7 stroke-[0.5px]' /></div>
                                    </div>

                                    {/* we will display error message here  */}
                                    {Error && <div className='text-sm px-3 py-4 '>We're sorry, no results for <span className='font-semibold'>'{searchQuery}'</span></div>}

                                    {/* popular search section */}

                                    <div className='w-full  pt-4 '>
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
                                        <div className='w-full bg-white   mt-4'>

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
                                    <div className=' w-full bg-white '>
                                        <h1 className='text-lg  font-poppins text-black   p-3'>Discover Our Materials</h1>

                                        <div className=' px-3  w-full  text-xs  bg-white '>
                                            <div className='flex  gap4 flex-wrap space-y-4'>
                                                {
                                                    footerLinks.map((item) => (
                                                        <h2 key={item.title} className='min-w-[150px] md:min-w-[130px] cursor-pointer opacity-30 hover:opacity-100 ' >
                                                            {item.title}
                                                        </h2>
                                                    ))
                                                }
                                            </div>

                                        </div>
                                    </div>

                                </motion.div>
                            )}
                    </AnimatePresence>
                </div>
            )}
        </>
    )
}

export default SearchPage
