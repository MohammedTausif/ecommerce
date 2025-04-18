import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Shop_All_Products } from '../data/ShopAllData'
import ThumbnailCard from '../components/ui/ThumbnailCard'
import { updateParams } from '../utils/urlHelpers'

const WomensCollections = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { type } = useParams()

    const selectedtype = searchParams.get('filter.p.product_type')
    const handleTypeSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.p.product_type', value)

    const formatSlug = (slug) => {
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
    }
    return (
        <>
            <div className='w-full md:mt-13 mt-25'>
                {/* {type} */}
                <section className='w-full min-h-screen bg-white mt-25'>
                    <div className='w-full h-full flex flex-col md:flex-row '>

                        {/* Left Part */}
                        <div className='b-red-500 md:w-1/2  flex justify-center items-start flex-col p-6 md:px-20 font-poppins'>

                            <div className='flex space-x-1  font-poppins text-xs mb-3'>
                                <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
                                <span className='font-Playfair text-gray-400'> / </span>
                                <Link className='text-gray-400 cursor-pointer' to={'/shop-all'}>Women Shop All</Link>
                                <span className='font-Playfair text-gray-400'> / </span>
                                <Link className='text-black cursor-auto' to={'/shop-all'}>Women's {formatSlug(type)}</Link>
                            </div>

                            <h1 className="text-3xl font-medium font-poppins mb-3 text-gray-900 w-2/3">Women's {formatSlug(type)}</h1>
                            <p className="text-[16px] text-black md:w-[68%]">
                                Build your ROGER wardrobe with styles made from innovative materials. Discover our tracksuits, t-shirts, <span className='underline'>activewear</span>, <span className='underline'>outerwear</span> and sneakers for women in nature-inspired colors.
                            </p>
                        </div>

                        {/* Right Part */}
                        <div className='md:w-1/2 h- overflow-x-auto scrollbar-hide p-2 '>
                            <div className='grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-2'>
                                {Shop_All_Products.map((product) => (
                                    <ThumbnailCard
                                        product={product}
                                        key={product.id}
                                        selectedtype={selectedtype}
                                        onClick={() => handleTypeSelect(product.link)}
                                    />
                                ))}
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}

export default WomensCollections
