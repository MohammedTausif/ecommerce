import React, { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ThumbnailCard from '../components/ui/ThumbnailCard'
import { MENS_HOODIES_SWEATSHIRT_SAMPLE, Mens_Track_Pants_Thumbnail } from '../data/MensHoodies'
import { updateParams } from '../utils/urlHelpers'
import ItemssCard from '../components/ui/ItemsCard'
import { Sample_Products } from '../data/ShopAllData'
import FilterButton from '../components/ui/FilterButton'
import FilterSvg from '../assets/icons/svgs/FilterSvg'
import { MENS_COLLECTION_DEFAULT } from '../data/MensHoodies'
import SortFilter from '../components/sort/Sort-Filter'


const MensCollection = () => {
   const [openSortFilter, setOpenSortFilter] = useState(false)
  const {type} = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedType = searchParams.get('filter.p.product_type') || searchParams.get('filter.v.option.color')
  const selectedSortBy = searchParams.get('sort_by')
  const selectedGenders = searchParams.get('filter.p.m.custom.gender');
  const selectedSize = searchParams.get('filter.v.option.size');
  const selectedColor = searchParams.get('filter.v.option.color');
  // const selectedProduct = Products.find(product => product.link === selecedType)

  const thumbnailMap ={
    'hoodies-sweatshirts': MENS_HOODIES_SWEATSHIRT_SAMPLE,
    'trackpants': Mens_Track_Pants_Thumbnail,
    'men-tops':MENS_HOODIES_SWEATSHIRT_SAMPLE ,
    'men-shorts':MENS_HOODIES_SWEATSHIRT_SAMPLE ,
    'men-pants':MENS_HOODIES_SWEATSHIRT_SAMPLE ,
    'mens-activewear': MENS_HOODIES_SWEATSHIRT_SAMPLE,
    'men-knitwear':MENS_HOODIES_SWEATSHIRT_SAMPLE,
    'mens-loungewear': MENS_HOODIES_SWEATSHIRT_SAMPLE,
    'men-jackets-and-outwear': MENS_HOODIES_SWEATSHIRT_SAMPLE,
    'footwear': MENS_HOODIES_SWEATSHIRT_SAMPLE,
    'accesories': MENS_HOODIES_SWEATSHIRT_SAMPLE
  

  }
  const ThumbnailImages= thumbnailMap[type] || MENS_HOODIES_SWEATSHIRT_SAMPLE ;

  const Title ={
    'hoodies-sweatshirts': 'Hoodies & Sweatshirts',
    'trackpants': 'Track Pants',
    'men-tops': 'Tops & T-Shirts',
    'men-shorts': 'Shorts',
    'men-pants': 'Pants',
    'mens-activewear': 'Activewear',
    'men-knitwear':'Knitwear',
    'mens-loungewear': 'Pyjamas',
    'men-jackets-and-outwear': 'Coats & Jackets',
    'footwear': 'Footwear',
    'accesories': 'Accesories'
  }

  const handleAddToCart = (product) => {
    alert('Added to cart :' + product.title)

  }

  const handleTypeSelect = (value)=> updateParams(searchParams, setSearchParams, 'filter.p.product_type', value)
  const handleSortSelect = (value)=> updateParams(searchParams, setSearchParams, 'sort_by', value)
  const handleSizeSelect = (value)=> updateParams(searchParams, setSearchParams, 'filter.v.option.size', value)
  const handleGenderSelect= (value)=> updateParams(searchParams, setSearchParams, 'filter.p.m.custom.gender', value)
  const handleColorSelect= (value)=> updateParams(searchParams, setSearchParams, 'filter.v.option.color', value);

  const clearAll =()=>{
    setSearchParams(new URLSearchParams())
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
  
    const handleThumbnailClick= (item)=>{
      if(item.slug){
        handleTypeSelect(item.slug)
      }
      else if (item.color) {
        handleColorSelect(item.color)
      }

    }


  return (
    <>
      <div className='min-h-screen  bg-white text-black'>
        <section className='flex flex-col md:flex-row mt-25 '>
          <div className="relative md:w-1/2 p-6 md:px-20 flex flex-col justify-center items-start bg-white font-poppins">

            {/* Show navigation Location */}
            <div className='flex space-x-1  font-poppins text-xs mb-5'>

              <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
              <span className='font-Playfair text-gray-400'>/</span>
              <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/shop-all'}>Mens Shop All </Link>
              <span className='font-Playfair text-gray-400'>/</span>
              <Link className='text-black cursor-auto' to={``}>Men's {Title[type]}</Link>

            </div>

            <h1 className="text-3xl font-medium font-poppins mb-2 text-gray-900">Men's {Title[type]}</h1>
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
        <SortFilter
        isOpen={openSortFilter}
        onClose={toggleSortFilter}
        onFilterSelect={handleGenderSelect}
        onSizeSelect={handleSizeSelect}
        onSortSelect={handleSortSelect}
        onTypeSelect={handleTypeSelect}
        selectedType={selectedType}
        selectedGenders={selectedGenders}
        selectedSize={selectedSize}
        selectedSort={selectedSortBy}
        clearAll={clearAll}
        />



        <div className='mt-25 bg-white'>
          {
            selectedType === null ? (
              <div className='w-full bg-white px-4 py-2 sm:px-6 lg:px-5 '>
                <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 '>
                  {
                    MENS_COLLECTION_DEFAULT.map((product)=>(
                      <ItemssCard product={product} key={product.id} onAddToCart={handleAddToCart} />
                    ))
                  }
                </div>


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