import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { searchCartVariants } from '../Common/Search'
import { X } from 'lucide-react'
import Button from '../ui/Button'
import { ProductColors } from '../../data/FilterData'

const SortFilter = ({ isOpen, onClose }) => {
    const [isActive, setIsActive] = useState(false)

    const [shouldRender, setShouldRender] = useState(isOpen)
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
        }
        else {
            setTimeout(() => setShouldRender(false), 300);
        }
    }, [isOpen])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])


    return (
        <>
            {
                shouldRender &&
                <div className='fixed inset-0 overflow-y-auto z-50'>
                    <div className='fixed inset-0 bg-black/40 bg-opacity-30' onClick={onClose}>
                    </div>
                    <AnimatePresence mode='wait' onExitComplete={() => setShouldRender(false)}>
                        {
                            isOpen && (
                                <motion.div
                                    variants={searchCartVariants}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                    className={`absolute  w-full   lg:w-[40vw]  p-auto  h-screen top-0   bg-white shadow-md right-0`}
                                >
                                    <div className='w-full h-full overflow-y-auto'>

                                        {/* header */}
                                        <div className='flex w-full justify-between  h-17.5  border border-gray-200'>
                                            <div className='flex justify-center items-center w-full  '>
                                                <h1 className='text-black text-2xl font-poppins'>Sort & Filter </h1>
                                            </div>

                                            <div onClick={onClose} className='cursor-pointer flex items-center justify-center w-20  bg-white border-l border-gray-200'>
                                                <X size={30} className=' stroke-1' />
                                            </div>

                                        </div>

                                        {/* Sort by section */}
                                        <div className='h-36 flex flex-col justify-start items-start border-b border-gray-200 bg-white  red-400 p-4'>
                                            <h1 className='text-black text-lg font-poppins font-normal'>Sort by</h1>
                                            <div className='flex justify-start text-[10px] md:text-xs font-normal font-poppins items-center h-full w-full gap-2 md:gap-3'>

                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>New In</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Trending</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Price Low to High</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Price High to Low</button>

                                            </div>


                                        </div>

                                        {/* Gender Sort */}
                                        <div className='h-36 flex flex-col justify-start items-start border-b border-gray-200 bg-white  red-400 p-4'>
                                            <h1 className='text-black text-lg font-poppins font-normal'>Gender</h1>
                                            <div className='flex justify-start text-[10px] md:text-xs font-normal font-poppins items-center h-full w-full gap-2 md:gap-3'>

                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Women</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Men</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Unisex</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Kids</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Baby</button>

                                            </div>


                                        </div>

                                        {/* FIlter by Size  */}

                                        <div className='h-36 flex flex-col justify-start items-start border-b border-gray-200 bg-white  red-400 p-4'>
                                            <h1 className='text-black text-lg font-poppins font-normal'>Size</h1>
                                            <div className='flex justify-start text-[10px] md:text-xs font-normal font-poppins items-center h-full w-full gap-2 md:gap-4'>

                                                <button className={`bg-[#F8F8F8] h-16 md:px-6 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>XXS</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-6 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>XS</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-6 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>S</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-6 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>M</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-6 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>L</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-6 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>XL</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-6 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>XXl</button>

                                            </div>

                                        </div>

                                        {/* Filter by product type */}

                                        <div className='h-36 flex flex-col justify-start items-start border-b border-gray-200 bg-white  red-400 p-4'>
                                            <h1 className='text-black text-lg font-poppins font-normal'>Product type</h1>
                                            <div className='flex justify-start text-[10px] md:text-xs font-normal font-poppins items-center h-full w-full gap-2 md:gap-3'>

                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>New In</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Trending</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Price Low to High</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Price Low to High</button>

                                            </div>


                                        </div>

                                        {/* FIlter By Color */}
                                        <div className='h-36 flex flex-col justify-start items-start border-b border-gray-200 bg-white  red-400 p-4'>
                                            <h1 className='text-black text-lg font-poppins font-normal'>Product Hue</h1>
                                            <div className='flex justify-start w-full h-full items-center gap-3'>
                                                {ProductColors.map((color) => (
                                                    <button
                                                        key={color.id}
                                                        className={`w-7 h-7 rounded-full border border-gray-300 cursor-pointer  ${isActive? "ring-1 ring-black ring-offset-2": "ring-1 ring-transparent ring-offset-2 hover:ring-black"}`}
                                                        style={{backgroundColor: color.color}}
                                                        title={color.name}
                                                        onClick={()=> alert(color.name)}
                                                    />
                                                ))}


                                            </div>


                                        </div>

                                        {/* FIlter by Science */}
                                        <div className='h-36 flex flex-col justify-start items-start bg-white  red-400 p-4 '>
                                            <h1 className='text-black text-lg font-poppins font-normal'>Science</h1>
                                            <div className='flex justify-start text-[10px] md:text-xs font-normal font-poppins items-center h-full w-full gap-2 md:gap-3'>

                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>New In</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Trending</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Price Low to High</button>
                                                <button className={`bg-[#F8F8F8] h-16 md:px-5 px-3 ${isActive ? "border-1 border-black" : "border-1 border-transparent hover:ring-1"}`}>Price Low to High</button>

                                            </div>


                                        </div>
                                        <div className='h-25 '>

                                        </div>

                                        {/* Footer */}
                                        <footer className='fixed bottom-0 w-full bg-white -700 h-24 shadow border-t border-gray-200'>

                                            <div className=' w-[40vw] h-full flex justify-evenly items-center'>
                                                <Button
                                                    title={`Show ${6} Results`}
                                                    variant='custom'
                                                    className="w-62"
                                                />

                                                <Button
                                                    title={`Reset filters`}
                                                    variant='outline'
                                                    className="w-62"
                                                />
                                            </div>

                                        </footer>


                                    </div>

                                </motion.div>
                            )
                        }


                    </AnimatePresence>
                </div>

            }
        </>
    )
}

export default SortFilter
