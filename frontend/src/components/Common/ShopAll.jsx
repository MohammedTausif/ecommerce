import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import { Shop_All_Products as products } from '../../data/ShopAllData';
import FilterButton from '../ui/FilterButton';
import FilterSvg from '../../assets/icons/svgs/FilterSvg';
import ItemssCard from '../ui/ItemsCard';
import { Sample_Products } from '../../data/ShopAllData';

//  product card
const ProductCards = ({ product, isActive, onClick }) => (
  <div className={` w-48 z-10  overflow-hidden shadow-md cursor-pointer transition-border duration-300 ${isActive ? "border-1 border-black " : "border-1 border-transparent "}`}
    onClick={onClick} >

    <div className='relative w-full h-48'>
      <Link to={`/shop-all?filter.p.product_type=${product.link}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full relative  object-cover "
        />
        {/* Gradient overlay for title readability (NEW) */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-80 rounded-t-lg"></div>


        <h3 className="absolute bottom-2 left-2 text-xs font-poppins font-light text-white">
          {product.title}
        </h3>

      </Link>
    </div>
  </div >

);

// Main  component
const ShopAll = () => {
  const [searchParams] = useSearchParams();
  const selectedtype = searchParams.get('filter.p.product_type');

  const selectedProduct = products.find(p => p.link === selectedtype)

  const handleAddToCart = (product) => {
    alert('Added to cart :' + product.title)

  }


  return (
    <div className="min-h-screen mt-25  bg-white">
      <section className="flex flex-col md:flex-row mt-18">
        {/* Left panel Heading and description */}
        <div className="relative md:left-25 md:w-1/2 p-6 flex flex-col justify-center items-start bg-white font-poppins">

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
              <ProductCards key={prod.id} product={prod} isActive={prod.link === selectedtype} />
            ))}
          </div>
        </div>


      </section>
      {/* Filter & Sort Button */}
      <div className='mt-3 '>

        <FilterButton
          title={`Sort & Filter`}
          Icon={FilterSvg}
          className='absolute right-10 hidden md:flex w-60'
          onClick={() => console.log("sort button clicked")}
        />

      </div>



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
                style={{gridAutoRows :'1fr' }}
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


