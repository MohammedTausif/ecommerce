import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { searchCartVariants } from '../Common/Search'
import Button from '../ui/Button'

const Cart = ({ isOpen, onClick }) => {

    const [shouldRender, setShouldRender] = useState(isOpen)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
        }
    }, [isOpen])

    return (
        <>
            {shouldRender && (
                <AnimatePresence mode='wait' onExitComplete={() => setShouldRender(false)} >
                    {
                        isOpen && (
                            <motion.div
                                variants={searchCartVariants}
                                initial="hidden"
                                animate='visible'
                                exit='hidden'
                                className='absolute  w-[100vw] md:w-[35vw]  h-screen top-0  bg-white shadow-md right-0'
                            >
                                <div className='w-full h-screen'>
                                    {
                                        products == null ? (
                                            <div className='w-full h-full'>

                                                <div className='flex border-gray-300 border-[0.5px] justify-between  '>
                                                    <div className='border-r w-full p-2'>
                                                        Your cart is empty
                                                    </div>
                                                    <div className='p-2'>
                                                        X
                                                    </div>
                                                </div>

                                                <div className='w-full h-1/3  flex flex-col justify-center items-center space-y-2 border-b'>

                                                    <h1 className='text-2xl font-poppins'>
                                                        Your cart is empty
                                                    </h1>
                                                    <div>
                                                        <Button
                                                            title='Continue shopping'
                                                            variant='secondary'
                                                            link='/shopping'
                                                        />
                                                    </div>


                                                </div>
                                            </div>
                                        ) : (
                                            <div>

                                            </div>)
                                    }



                                </div>


                            </motion.div>
                        )
                    }
                </AnimatePresence>
            )}
        </>

    )
}

export default Cart
