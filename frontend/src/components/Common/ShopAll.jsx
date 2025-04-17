import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import { Shop_All_Products as products } from '../../data/ShopAllData';
import FilterButton from '../ui/FilterButton';
import FilterSvg from '../../assets/icons/svgs/FilterSvg';
import ItemssCard from '../ui/ItemsCard';
import { Sample_Products } from '../../data/ShopAllData';
import SortFilter from '../sort/Sort-Filter';
import { updateParams } from '../../utils/urlHelpers';
import ThumbnailCard from '../ui/ThumbnailCard';


const ShopAll = () => {

  const [openSortFilter, setOpenSortFilter] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedtype = searchParams.get('filter.p.product_type');
  const sortBy = searchParams.get('sort_by')
  const genders = searchParams.get('filter.p.m.custom.gender');
  const size = searchParams.get('filter.v.option.size');
  const color = searchParams.get('filter.v.option.color');


  const handleTypeSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.p.product_type', value);
  const handleSortSelect = (value) => updateParams(searchParams, setSearchParams, 'sort_by', value);
  const handleSizeSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.v.option.size', value)
  const handleGenderSelect = (value) => updateParams(searchParams, setSearchParams, 'filter.p.m.custom.gender', value)

  const selectedProduct = products.find(product => product.link === selectedtype)

  //Clearing function for filter & sort
  const clearAll = () => {
    setSearchParams(new URLSearchParams());

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


  const handleAddToCart = (product) => {
    alert('Added to cart :' + product.title)

  }
  const toggleSortFilter = () => {
    setOpenSortFilter((prev) => !prev)
  }


  return (
    <div className="min-h-screen  overflow-x-hidden">
      {/* Header section */}
      <section className="flex flex-col md:flex-row mt-25">
        {/* Left panel Heading and description */}
        <div className="relative md:w-1/2 p-6 md:px-20 flex flex-col justify-center items-start bg-white font-poppins">

          {/* Show navigation Location */}
          <div className='flex space-x-1  font-poppins text-xs mb-5'>

            <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
            <span className='font-Playfair text-gray-400'>/</span>
            <Link className='text-black cursor-auto' to={'/shop-all'}> Shop All</Link>

          </div>

          <h1 className="text-3xl font-medium font-poppins mb-2 text-gray-900">Shop All</h1>
          <p className="text-[16px] text-black md:w-[68%]">
            Build your ROGER wardrobe with styles made from innovative materials. Discover our tracksuits, t-shirts, <span className='underline'>activewear</span>, <span className='underline'>outerwear</span> and sneakers for women in nature-inspired colors.
          </p>
        </div>

        {/* Right horizontally scrollable product grid */}
        <div className="md:w-1/2 md:p-6 p-2  px-6 overflow-x-auto scrollbar-hide">
          <div
            className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-2"
            style={{ gridAutoColumns: '200px' }}
          >
            {products.map((prod) => (
              <ThumbnailCard
                key={prod.id}
                product={prod}
                selectedtype={selectedtype}
                onClick={() => handleTypeSelect(prod.link)}
              />
            ))}
          </div>
        </div>



      </section>
      {/* Filter & Sort Button */}
      <div className='mt-3 '>
        <FilterButton
          title="Sort & Filter"
          Icon={FilterSvg}
          onClick={toggleSortFilter}
          badgeCount={badgeCount}
          className='absolute right-10 hidden md:flex w-60 '
        />

      </div>

      {/* sort popup page  */}
      <SortFilter
        isOpen={openSortFilter}
        onClose={toggleSortFilter}
        onSortSelect={handleSortSelect}
        onFilterSelect={handleGenderSelect}
        onSizeSelect={handleSizeSelect}
        onTypeSelect={handleTypeSelect}
        selectedSort={sortBy}
        selectedType={selectedtype}
        selectedSize={size}
        selectedGenders={genders}
        clearAll={clearAll}
      />

      {/* Content section : */}
      <div className='mt-20 py-4 bg-white  '>
        {
          selectedtype === null ? (
            <div className='text-black'>
              Please select any product type to view products

            </div>
          ) : (
            <div className='w-full px-4 py-2 sm:px-6 lg:px-5 bg-white '>
              <div
                className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 '
                style={{ gridAutoRows: '1fr' }}
              >

                {
                  Sample_Products.map((product) => (
                    <ItemssCard product={product} key={product.id} onAddToCart={handleAddToCart} />
                  ))
                }
              </div>
            </div>
          )
        }

      </div>

    </div>
  );
};

export default ShopAll;


