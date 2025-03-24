import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {searchCartVariants} from '../Common/Search'

const Cart = ({ isOpen ,onClick }) => {

    const [shouldRender, setShouldRender]= useState(isOpen)

    useEffect(()=>{
        if(isOpen){
            setShouldRender(true)
        }
    },[isOpen])

    return (
        <>
        {shouldRender && (
            <AnimatePresence mode='wait' onExitComplete={()=>setShouldRender(false)} >
       {
        isOpen && (
           <motion.div 
           variants={searchCartVariants}
           initial="hidden"
           animate='visible'
           exit='hidden'
           className='absolute  w-[100vw] md:w-[35vw]  h-screen top-0  bg-white shadow-md right-0'
           >
            <div className='text-black font-poppins flex justify-between mx-auto p-2  '>
                <div>cart</div>
                <div className='cursor-pointer' onClick={onClick}> X </div>
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
