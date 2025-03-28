import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import ProductCard from '../components/ui/ProductCard'

const Models = [
    { id: 1, image: 'https://pangaia.com/cdn/shop/files/final.jpg?crop=center&height=3412&v=1741858094&width=2560' },
    { id: 2, image: 'https://pangaia.com/cdn/shop/files/Copy_of_Use_1.jpg?crop=center&height=1023&v=1741964870&width=768' },
    { id: 3, image: 'https://pangaia.com/cdn/shop/files/FINAL_2.jpg?crop=center&height=3412&v=1741858107&width=2560' },
    { id: 4, image: 'https://pangaia.com/cdn/shop/files/final_7.jpg?crop=center&height=3412&v=1741858099&width=2560' },
    { id: 5, image: 'https://pangaia.com/cdn/shop/files/DSC07617.jpg?crop=center&height=1023&v=1741858102&width=768' },
]

const GetInspired = () => {
    const scrollContainerRef = useRef(null)

    const scrollLeft = () => {
    }

    const scrollRight = () => {
    }
    return (
        <div className='relative py-8 space-y-6'>
            {/* Heading */}
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-2xl font-poppins font-[400] '>Get Inspired</h1>
                <p className='text-[18px] font-Montserrat font-bold '>Explore how The <span className='font-poppins font-[400]'>ROGER</span> Family style our trending pieces</p>
            </div>

            {/* Arrow Buttons for scrolling */}
            <button
                onClick={scrollLeft}
                className='absolute left-2 top-[60%] transform -translate-y-1/2 z-10 p-1 bg-white text-black rounded-full disabled:opacity-0' >
                <ArrowLeft size={14} />
            </button>
            <button
                onClick={scrollRight}
                className='absolute right-2 top-[60%] transform -translate-y-1/2 z-10 p-1 bg-white text-black rounded-full disabled:opacity-0' >
                <ArrowRight size={14} />
            </button>

            {/* model image render */}
            <div
            ref={scrollContainerRef}
            className='flex overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory'
            >
                {
                    Models.map((model)=>(
                        <div 
                        key={model.id} 
                        className='flex-shrink-0 w-full  items-center md:w-[297.5px] lg:w-[345px] bg-white rounded  snap-center group'>

                            <div className='relative bg-gray-50 w-full h-[550px] md:w-[297.5px] md:h-[395px] lg:w-[345px] lg:h-[459px] overflow-hidde group '>
                                <ProductCard imageUrl={model.image}/>
                            </div>

                        </div>
                    ))
                }
 
            </div>

        </div>
    )
}

export default GetInspired
