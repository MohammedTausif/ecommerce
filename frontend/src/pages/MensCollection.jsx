import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ThumbnailCard from '../components/ui/ThumbnailCard'
import { MENS_HOODIES_SWEATSHIRT_SAMPLE as Products } from '../data/MensHoodies'
import { updateParams } from '../utils/urlHelpers'
import ItemssCard from '../components/ui/ItemsCard'
import { Sample_Products } from '../data/ShopAllData'
const MensCollection = () => {
    const { type, gender } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const selecedType = searchParams.get('filter.p.product_type')
    const selectedProduct = Products.find(product => product.link === selecedType)

    const formatSlug = (slug) => {
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
    }

    const handleTypeSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.p.product_type', value)

    return (
        <div className='h-screen w-full '>
            <section className='h-full w-full mt-13 bg-white text-black'>
                <div className='flex flex-col md:flex-row mt-25 '>
                    <div className="relative md:w-1/2 p-6 md:px-20 flex flex-col justify-center items-start bg-white font-poppins">

                        {/* Show navigation Location */}
                        <div className='flex space-x-1  font-poppins text-xs mb-5'>

                            <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
                            <span className='font-Playfair text-gray-400'>/</span>
                            <Link className='text-gray-400 hover:text-black cursor-pointer' to={'../'}>{formatSlug(gender)} </Link>
                            <span className='font-Playfair text-gray-400'>/</span>
                            <Link className='text-black cursor-auto' to={``}> {formatSlug(type)}</Link>

                        </div>

                        <h1 className="text-3xl font-medium font-poppins mb-2 text-gray-900">{formatSlug(type)}</h1>
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
                            {Products.map((item) => (
                                <ThumbnailCard
                                    key={item.id}
                                    product={item}
                                    selectedtype={selecedType}
                                    onClick={() => handleTypeSelect(item.link)}
                                />
                            ))}
                        </div>
                    </div>


                </div>

                <div className='mt-10'>
                    

                    {
                        selecedType === null? (
                        <div className='w-full flex justify-center'>

                            <h1></h1>

                        </div>
                        ):(
                        <div>

                        </div>

                        )           }
                             </div>

            </section>
        </div>
    )
}

export default MensCollection
