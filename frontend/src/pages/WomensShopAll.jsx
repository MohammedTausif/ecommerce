import React, { useMemo, useState } from 'react'
import ItemssCard from '../components/ui/ItemsCard'
import { Kids_Shopall_Custom_Products, Kids_Shopall_Default_products } from '../data/KidsCollection'
import SortFilter from '../components/sort/Sort-Filter'
import FilterButton from '../components/ui/FilterButton'
import ThumbnailCard from '../components/ui/ThumbnailCard'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { GetSelectedColor, GetSelectedGender, GetSelectedSize, GetSelectedSort, GetSelectedType } from '../utils/urlHelpers'
import FilterSvg from '../assets/icons/svgs/FilterSvg'
import { Womens_Shop_All_Thumbnail_Images as ThumbnailImages } from '../data/womenShopAll'
const WomensShopAll = () => {
  const { type } = useParams()
  const [openSortFilter, setOpenSortFilter] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedType = GetSelectedType(searchParams)
  const selectedSort = GetSelectedSort(searchParams)
  const selectedColor = GetSelectedColor(searchParams)
  const selectedSize = GetSelectedSize(searchParams)
  const selectedGender = GetSelectedGender(searchParams)

  const toggleSortFilter = () => {
    setOpenSortFilter(!openSortFilter)
  }

  const handleThumbnailClick = (item) => {
    if (item.slug) {
      handleTypeSelect(item.slug)
    }
    else if (item.color) {
      handleColorSelect(item.color)
    }
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

  const clearAll = () => {
    setSearchParams(new URLSearchParams())
  }
  const handleAddToCart = (product) => {
    alert('Added to cart :' + product.title)
  }

  const handleTypeSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.p.product_type', value)
  const handleSortSelect = (value) => updateParams(searchParams, setSearchParams, 'sort_by', value)
  const handleSizeSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.v.option.size', value)
  const handleGenderSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.p.m.custom.gender', value)
  const handleColorSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.v.option.color', value)

  return (
    <div className='min-h-screen bg-white text-black'>
      <section className='flex flex-col md:flex-row mt-25'>
        {/* left part */}
        <div className="relative md:w-1/2 p-6 md:px-20 flex flex-col justify-center items-start bg-white font-poppins">

          {/* Show navigation Location */}
          <div className='flex space-x-1  font-poppins text-xs mb-5'>

            <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
            <span className='font-Playfair text-gray-400'>/</span>
            <Link className='text-black cursor-auto' to={``}>Women's Shop All {type}</Link>

          </div>

          <h1 className="text-3xl font-medium font-poppins mb-2 text-gray-900">Women's Shop All</h1>
          <p className="text-[16px] text-black md:w-[68%]">
          Build your ROGER wardrobe with styles made from innovative materials. Discover our tracksuits, t-shirts, <span className='underline'>activewear</span>, <span className='underline'>outerwear</span> and sneakers for women in nature-inspired colours.
          </p>
        </div>

        {/* Right Part */}
        <div className="md:w-1/2 md:p-6 p-2  px-6 overflow-x-auto scrollbar-hide">
          <div
            className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-2"
            style={{ gridAutoColumns: '200px' }}
          >
            {ThumbnailImages.map((item) => (
              <ThumbnailCard
                key={item.id}
                product={item}
                selectedtype={selectedType}
                onClick={() => handleThumbnailClick(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className='mt-3 '>
        <FilterButton
          title="Sort & Filter"
          Icon={FilterSvg}
          onClick={toggleSortFilter}
          // badgeCount={badgeCount}
          className='absolute right-10 hidden md:flex w-60 '
        />
      </div>
      <SortFilter
        isOpen={openSortFilter}
        onClose={toggleSortFilter}
        onFilterSelect={handleGenderSelect}
        onSizeSelect={handleSizeSelect}
        onSortSelect={handleSortSelect}
        onTypeSelect={handleTypeSelect}
        selectedType={selectedType}
        selectedGenders={selectedGender}
        selectedSize={selectedSize}
        selectedSort={selectedSort}
        clearAll={clearAll}
      />

      <div className='mt-25 bg-white'>
        {
          selectedType === null ? (
            <div className='w-full bg-white px-4 py-2 sm:px-6 lg:px-5 '>
              <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 '>
                {
                  Kids_Shopall_Default_products.map((product) => (
                    <ItemssCard product={product} key={product.id} onAddToCart={handleAddToCart} />
                  ))
                }
              </div>


            </div>
          ) : (
            <div className='w-full px-4 py-2 sm:px-6 lg:px-5 bg-white '>
              <div
                className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 '
              >
                {
                  Kids_Shopall_Custom_Products.map((product) => (
                    <ItemssCard product={product} key={product.id} onAddToCart={handleAddToCart} />
                  ))
                }
              </div>
            </div>

          )}
      </div>
    </div>
  )
}

export default WomensShopAll
