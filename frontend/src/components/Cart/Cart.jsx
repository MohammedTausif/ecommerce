import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { searchCartVariants } from '../Common/Search'
import Button from '../ui/Button'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { products } from '../../data/TrendingProdData'
import ProductCard from '../ui/ProductCard'
import PaymentLogos from '../ui/PaymentLogos'
import CartContent from './Content'
import Checkout from './Checkout'



const Cart = ({ isOpen, onClick }) => {

    const [shouldRender, setShouldRender] = useState(isOpen)
    const [product, setProduct] = useState(null)
    const scrollContainerRef = useRef();

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
            {shouldRender && (
                <div className='fixed inset-0 overflow-y-auto '>
                    <div className='fixed inset-0 bg-black/40 bg-opacity-30'
                        onClick={onClick}>
                    </div>
                    <AnimatePresence mode='wait' onExitComplete={() => setShouldRender(false)} >
                        {
                            isOpen && (
                                <motion.div
                                    variants={searchCartVariants}
                                    initial="hidden"
                                    animate='visible'
                                    exit='hidden'
                                    className={`absolute  w-full md:w-[32vw]  h-screen top-0   bg-white shadow-md right-0 `}
                                >
                                    <div className='relative w-full h-screen '>


                                        <div className='w-full md:w-[32vw] h-fit '>
                                            {
                                                product == null ? (
                                                    <div className='w-full h-[45vh]'>

                                                        {/* Heading */}
                                                        <div className='flex h-[14%] border-gray-200 border-[0.5px] justify-between  items-center'>
                                                            <div className=' w-full p-2 text-[16px] font-poppins font-normal'>
                                                                Your cart is empty
                                                            </div>
                                                            <div className='p-2 cursor-pointer border-l-[0.5px] border-gray-200' onClick={onClick}>
                                                                <X className='size-7 stroke-[0.5px]' />
                                                            </div>
                                                        </div>

                                                        {/* middle section => Button   */}
                                                        <div className='w-full h-[85%]  flex flex-col justify-center items-center space-y-4 '>
                                                            <h1 className='text-[22px] font-poppins'>
                                                                Your cart is empty
                                                            </h1>
                                                            <div>
                                                                <Button
                                                                    title='Continue shopping'
                                                                    variant='secondary'
                                                                    link='shop-all'
                                                                    onClick={onClick}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                ) : (
                                                    <div>
                                                        <div className='flex border-gray-200 border-[0.5px] justify-between  items-center'>
                                                            <div className=' w-full p-2 text-[16px] font-poppins font-normal'>
                                                                Your cart contains {2} items
                                                            </div>
                                                            <div className='p-2 cursor-pointer border-l-[0.5px] border-gray-200' onClick={onClick}>
                                                                <X className='size-7 stroke-[0.5px]' />
                                                            </div>
                                                        </div>


                                                        <CartContent />

                                                    </div>
                                                )}

                                        </div>
                                        {/* trending section*/}
                                        <div className={` bg-white ${product != null ? "h-3/4 mt-2" : "h-2/3 md:h-1/2 "} `}>


                                            <div className='w-full h-full '>

                                                <div className='font-poppins text-[16px] px-2 '>
                                                    Trending Items
                                                </div>

                                                <div className='w-full relative mt-2'>
                                                    <div
                                                        ref={scrollContainerRef}
                                                        className="flex  space-x-3 md:space-x-7 px-2 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory"
                                                    >
                                                        {
                                                            products.map((product) => (
                                                                <div
                                                                    key={product.id}
                                                                    className="flex-shrink-0  items-center md:w-[153px] md:h-[308px] bg-white rounded  snap-center group"
                                                                >
                                                                    <div className="relative bg-gray-50 w-[173px]  h-[231px]  md:h-[204px]  group">
                                                                        <ProductCard
                                                                            title={product.title}
                                                                            imageUrl={product.imageUrl}
                                                                            hoverImageUrl={product.hoverImage}
                                                                            link={product.link}
                                                                            effect={true}
                                                                        />
                                                                    </div>
                                                                    <div className="p-1 flex justify-between w-[173px] md:w-[153px]  mt-1">

                                                                        <div className='font-poppins'>
                                                                            <h2 className="text-[10px] w-full ">{product.title}</h2>
                                                                            <p className="text-[12px]  text-gray-600">{product.description}</p>
                                                                        </div>

                                                                        {/* Cart button  */}
                                                                        <div className="">
                                                                            <button className="w-8 h-8 bg-[#002fa7] blue-700 text-white rounded-full  flex justify-center items-center">
                                                                                <img
                                                                                    className='w-[12px] h-[16px] text-white  cursor-pointer'
                                                                                    style={{ filter: 'invert(1)' }}
                                                                                    src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3QtY3VycmVudCIgZGF0YS1sYWJlbD0ic3ZnIj4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsa.svg" alt="" />
                                                                            </button>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            //checkout Pop-up
                                            product != null && <div>
                                                <Checkout/>
                                            </div>
                                        }

                                        {/* Accepted Payment Logos  */}
                                        <div className='fixed bottom-0 h-12 w-full md:w-[32vw] flex  justify-center bg-white border-t border-gray-200 '>
                                            <PaymentLogos />
                                        </div>


                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            )}
        </>

    )
}

export default Cart
