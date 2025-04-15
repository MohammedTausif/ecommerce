import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ThumbnailCard from '../components/ui/ThumbnailCard'
import { Shop_All_Products as products  } from '../data/ShopAllData'

const MensCollection = () => {
    const { type } = useParams()
    const DisplayType = type.split('-').join(' & ')
    return (
        <div className='h-screen w-full '>
            <section className='h-full w-full mt-13 bg-white text-black'>
                hello you selected {type}

                <div className='flex flex-col md:flex-row '>
                    <div className="relative md:w-1/2 p-6 md:px-20 flex flex-col justify-center items-start bg-white font-poppins">

                        {/* Show navigation Location */}
                        <div className='flex space-x-1  font-poppins text-xs mb-5'>

                            <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
                            <span className='font-Playfair text-gray-400'>/</span>
                            <Link className='text-black cursor-auto' to={'/shop-all'}> {DisplayType}</Link>

                        </div>

                        <h1 className="text-3xl font-medium font-poppins mb-2 text-gray-900">Mens Shop All</h1>
                        <p className="text-[16px] text-black md:w-[68%]">
                            Build your ROGER wardrobe with styles made from innovative materials. Discover our tracksuits, t-shirts, <span className='underline'>activewear</span>, <span className='underline'>outerwear</span> and sneakers for women in nature-inspired colors.
                        </p>
                    </div>

                    {/* Right part */}

                    <div className="md:w-1/2 md:p-6 p-2  px-6 overflow-x-auto scrollbar-hide">
                        <div
                            className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-2"
                            style={{ gridAutoColumns: '200px' }}
                        >
                            {products.map((prod) => (
                                <ThumbnailCard
                                    key={prod.id}
                                    product={prod}
                                    // selectedtype={selectedtype}
                                    // onClick={() => handleTypeSelect(prod.link)}
                                />
                            ))}
                        </div>
                    </div>


                </div>

            </section>
        </div>
    )
}

export default MensCollection
