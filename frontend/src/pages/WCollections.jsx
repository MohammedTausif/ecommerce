import React from 'react'
import { Link, useParams } from 'react-router-dom'

const WomensCollections = () => {
    const { type } = useParams()
    const formatSlug = (slug) => {
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
      }
    return (
        <>
            <div className='w-full md:mt-13 mt-25'>
                {/* {type} */}
                <section className='w-full min-h-screen bg-white'>
                    <div className='w-full h-full flex flex-col md:flex-row'>

                        {/* Left Part */}
                        <div className='b-red-500 md:w-1/2 h-full'>
                            
                            <div className='flex space-x-1  font-poppins text-xs mb-5'>
                                <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
                                <span className='font-Playfair text-gray-400'>/</span>
                                <Link className='text-gray-400 cursor-pointer' to={'/shop-all'}> Shop All</Link>
                                <span className='font-Playfair text-gray-400'>/</span>
                                <Link className='text-black cursor-auto' to={'/shop-all'}>{formatSlug(type)}</Link>
                            </div>
                        </div>
                        
                        {/* Right Part */}
                        <div className='bg-green-500 md:w-1/2 h-full'>

                            2
                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}

export default WomensCollections
