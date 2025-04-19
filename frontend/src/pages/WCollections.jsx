import React, { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Women_hoodies_sample as PosterImages } from '../data/WomenCollections'
import ThumbnailCard from '../components/ui/ThumbnailCard'
import { updateParams } from '../utils/urlHelpers'
import FilterButton from '../components/ui/FilterButton'
import FilterSvg from '../assets/icons/svgs/FilterSvg'
import SortFilter from '../components/sort/Sort-Filter'
import { GetSelectedType } from '../utils/urlHelpers'

const WomensCollections = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [openSortFilter, setOpenSortFilter]= useState(false)
    const { type } = useParams()


    const handleTypeSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.p.product_type', value)

    const formatSlug = (slug) => {
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
    }

    const toggleSortFilter=()=>setOpenSortFilter(!openSortFilter);
    const clearAll=()=> setSearchParams(new URLSearchParams()) ;
    const handleAddToCart=(product)=> alert('Added to Cart : ' + product.title)

    return (
        <>
            <div className='min-h-screen overflow-hidden'>
                {/* {type} */}
                <section className='w-full  bg-white mt-25'>
                    <div className='w-full h-full flex flex-col md:flex-row '>

                        {/* Left Part */}
                        <div className='md:w-1/2  flex justify-center items-start flex-col p-6 md:px-20 font-poppins'>

                            <div className='flex space-x-1  font-poppins text-xs mb-3 mt-10'>
                                <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
                                <span className='font-Playfair text-gray-400'> / </span>
                                <Link className='text-gray-400 cursor-pointer' to={'/shop-all'}>Women Shop All</Link>
                                <span className='font-Playfair text-gray-400'> / </span>
                                <Link className='text-black cursor-auto' to={`/collections/womens/${type}`}>Women's {formatSlug(type)}</Link>
                            </div>

                            <h1 className="text-3xl font-medium font-poppins mb-4 text-gray-900 w-2/3">Women's {formatSlug(type)}</h1>
                            <p className="text-[17px] text-black md:w-[80%]">
                                ROGER Hoodies & Sweatshirts are designed for comfort and versatility. It is available in a range of materials, and is treated with natural peppermint oil (pprmint™) for its anti-odor properties. 
                                <br />
                              <span className='underline cursor-pointer'>Women's Hoodies </span> | <span className='underline cursor-pointer'> Women's Sweatshirts </span>
                            </p>
                        </div>

                        {/* Right Part */}
                        <div className='md:w-1/2 h- overflow-x-auto scrollbar-hide p-2 '>
                            <div className='grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-2'
                                style={{ gridAutoColumns: '195px' }}
                            >
                                {PosterImages.map((product) => (
                                    <ThumbnailCard
                                        product={product}
                                        key={product.id}
                                        selectedtype={GetSelectedType(searchParams)}
                                        onClick={() => handleTypeSelect(product.slug)}
                                    />
                                ))}
                            </div>

                        </div>

                    </div>

                </section>

                {/* Sort & Filter Button */}
                <div className='mt-10 mb-10'>
                <FilterButton
                isOpen={openSortFilter}
                onClick={toggleSortFilter}
                title= 'Sort & Filter'
                Icon={FilterSvg}
                badgeCount={0}
                className='absolute md:right-10 w-60 '
                />
                </div>

                <SortFilter
                isOpen={openSortFilter}
                onClose={toggleSortFilter}
                clearAll={clearAll}

                
                />
                   
            </div>
        </>
    )
}

export default WomensCollections
