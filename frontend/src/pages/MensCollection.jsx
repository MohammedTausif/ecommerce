import React, { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ThumbnailCard from '../components/ui/ThumbnailCard'
import { MENS_HOODIES_SWEATSHIRT_SAMPLE as Products } from '../data/MensHoodies'
import { updateParams } from '../utils/urlHelpers'
import ItemssCard from '../components/ui/ItemsCard'
import { Sample_Products } from '../data/ShopAllData'
import FilterButton from '../components/ui/FilterButton'
import FilterSvg from '../assets/icons/svgs/FilterSvg'



const MensCollection = () => {
   const [openSortFilter, setOpenSortFilter] = useState(false)
  const { type, gender } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const selecedType = searchParams.get('filter.p.product_type')
  // const selectedProduct = Products.find(product => product.link === selecedType)

  const formatSlug = (slug) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
  }

  const handleAddToCart = (product) => {
    alert('Added to cart :' + product.title)

  }

  const toggleSortFilter=()=>{
    setOpenSortFilter(!openSortFilter)

  }
   const badgeCount = useMemo(() => {
      let count = 0;
      // sort_by
      if (searchParams.has('sort_by')) count++;
  
      //  all filter
      for (let [key, value] of searchParams.entries()) {
        if (key.startsWith('filter.')) {
          count++;
        }
      }
  
      return count;
    }, [searchParams]);
  

  const handleTypeSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.p.product_type', value)

  return (
    <>
      <div className='min-h-screen  bg-white text-black'>
        <section className='flex flex-col md:flex-row mt-25 '>
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


        </section>

        {/* button for sort & filter */}
        <div className='mt-3 '>
          <FilterButton
            title="Sort & Filter"
            Icon={FilterSvg}
            onClick={toggleSortFilter}
            badgeCount={badgeCount}
            className='absolute right-10 hidden md:flex w-60 '
          />

        </div>



        <div className='mt-15 bg-white'>


          {
            selecedType === null ? (
              <div className='w-full flex justify-center'>

                <h1>
                  please select type to display Products
                </h1>

              </div>
            ) : (
              <div className='w-full px-4 py-2 sm:px-6 lg:px-5 bg-white '>
                <div
                  className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 '
                //   style={{ gridAutoRows: '1fr' }}
                >

                  {
                    Sample_Products.map((product) => (
                      <ItemssCard product={product} key={product.id} onAddToCart={handleAddToCart} />
                    ))
                  }
                </div>
              </div>

            )}
        </div>

      </div>
    </>
  )
}

export default MensCollection;