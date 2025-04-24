import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { GetSelectedColor, GetSelectedGender, GetSelectedSize, GetSelectedSort, GetSelectedType, updateParams } from '../utils/urlHelpers'
import ThumbnailCard from '../components/ui/ThumbnailCard'
import { Link } from 'react-router-dom'
import { Kids_ShopAll_Thumbnail as ThumbnailImages } from '../data/KidsCollection'
import FilterButton from '../components/ui/FilterButton'
import SortFilter from '../components/sort/Sort-Filter'
import FilterSvg from '../assets/icons/svgs/FilterSvg'

const KidsShopAll = () => {
  const { type } = useParams()
  const [openSortFilter, setOpenSortFilter] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedType = GetSelectedType(searchParams)
  const selectedSort = GetSelectedSort(searchParams)
  const selectedColor = GetSelectedColor(searchParams)
  const selectedSize = GetSelectedSize(searchParams)
  const selectedGender = GetSelectedGender(searchParams)


  const toggleSortFilter = ()=>{
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
  const clearAll = ()=>{
    setSearchParams(new URLSearchParams())
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
            <Link className='text-black cursor-auto' to={``}>kids Shop All {type}</Link>

          </div>

          <h1 className="text-3xl font-medium font-poppins mb-2 text-gray-900">kids Shop All</h1>
          <p className="text-[16px] text-black md:w-[68%]">
            Build your kids' ROGER wardrobe with our tracksuits, t-shirts, shorts, outerwear and sneakers. Made with natural materials in nature-inspired colors.
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
    </div>
  )
}

export default KidsShopAll
