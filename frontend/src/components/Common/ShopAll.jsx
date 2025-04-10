import React from 'react';
import {Link} from 'react-router-dom'

// Sample product data
const products = [
  { id: 1, image: 'https://pangaia.com/cdn/shop/files/DNA_Regenerative_Merino_Wool_Hoodie_Earth_Blue_Mens-3.jpg?crop=center&height=420&v=1730221807&width=420', title: ' HOODIES' , link:'/collection/hoodies'},
  { id: 2, image: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Indigo_Blue_Womens-3.jpg?crop=center&height=420&v=1729738800&width=420', title: 'SWEATSHIRTS' , link:'/collection/sweatshirts'},
  { id: 3, image: 'https://pangaia.com/cdn/shop/products/Recycled-Nylon-Cross-Body-Bag-Black-Male-1.jpg?crop=center&height=420&v=1724367496&width=420', title: 'BAGS', link:'/collection/bags' },
  { id: 4, image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_Raisin_Womens-3.jpg?crop=center&height=420&v=1724371124&width=420', title: 'T-SHIRTS', link:'/collection/t-shirts' },
  { id: 5, image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_Raisin_Womens-3.jpg?crop=center&height=420&v=1724371124&width=420', title: 'JACKETS', link:'/collection/jackets' },
  { id: 6, image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_Raisin_Womens-3.jpg?crop=center&height=420&v=1724371124&width=420', title: 'JUMPERS', link:'/collection/jumpers' },
  { id: 7, image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_Raisin_Womens-3.jpg?crop=center&height=420&v=1724371124&width=420', title: 'CARDIGANS', link:'/collection/cardigans' },
  { id: 8, image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_Raisin_Womens-3.jpg?crop=center&height=420&v=1724371124&width=420', title: 'COATS', link:'/collection/coats' },
  { id: 9, image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_Raisin_Womens-3.jpg?crop=center&height=420&v=1724371124&width=420', title: 'GILETS', link:'/collection/gilets' },
  { id: 10, image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_Raisin_Womens-3.jpg?crop=center&height=420&v=1724371124&width=420', title: 'LONG SLEEVETOPS', link:'/collection/long' },
  { id: 11, image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_Raisin_Womens-3.jpg?crop=center&height=420&v=1724371124&width=420', title: 'TROUSERS', link:'/collection/trousers' },
];

//  product card
const ProductCard = ({ product, isActive , onClick }) => (
  <div className="w-48 bg-red  overflow-hidden shadow-md">

    <div className='relative w-full h-48'>
      <Link to={product.link} className='cursor-pointer'>
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
  return (
    <div className="min-h-screen mt-25 md:mt-13 bg-white">
      <section className="flex flex-col md:flex-row mt-18">
        {/* Left panel logo and description */}
        <div className="relative md:left-25 md:w-1/2 p-6 flex flex-col justify-center items-start bg-white font-poppins">

        {/* Show navigation Location */}
        <div className='flex space-x-1  font-poppins text-xs mb-5'>

          <Link className='text-gray-400 hover:text-black cursor-pointer' to={'/'}>Home </Link>
          <span className='font-Playfair text-gray-400'>/</span>
          <Link className='text-black cursor-auto' to={'/shop-all'}> Shop All</Link>
      
        </div>

          <h1 className="text-3xl font-medium font-poppins mb-2 text-gray-900">Shop All</h1>
          <p className="text-[16px] text-black md:w-[68%]">
          Build your ROGER wardrobe with styles made from innovative materials. Discover our tracksuits, t-shirts, activewear, outerwear and sneakers for women in nature-inspired colors.
          </p>
        </div>

        {/* Right horizontally scrollable product grid */}
        <div className="md:w-1/2 md:p-6 md:px-0 p-2 px-6 overflow-x-auto scrollbar-hide">
          <div
            className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-2"
            style={{ gridAutoColumns: '200px' }}
          >
            {products.map((prod) => (
              <ProductCard key={prod.id} product={prod} isActive={prod.id === sele} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopAll;


