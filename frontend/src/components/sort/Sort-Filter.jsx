import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { searchCartVariants } from '../Common/Search'
import { X } from 'lucide-react'

const SortFilter = ({ isOpen, onClose }) => {

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
                                className={`absolute  w-full md:w-[40vw] p-auto  h-screen top-0   bg-white shadow-md right-0`}
                                >
                                    <div>
                                        <div className='flex w-full justify-between  h-18  border border-gray-200'>
                                            <div className='flex justify-center items-center w-full '>
                                                <h1 className='text-black text-2xl font-poppins   '>Sort & Filter </h1>
                                            </div>

                                            <div onClick={onClose} className='cursor-pointer flex items-center justify-center w-20  bg-white border-l border-gray-200'>
                                                <X size={30} className=' stroke-1'/>
                                            </div>

                                        </div>
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
