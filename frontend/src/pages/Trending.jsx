import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/TrendingProdData'

const Trending = () => {
  // Reference for the scroll container
  const scrollContainerRef = useRef(null);

  //Scroll left function
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -350,
      behavior: 'smooth',
    });
  };

  //Scroll right function
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 350,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative  md:py-8 py-4">
      <div className=' h-15 bg-white'>
        <h1 className='px-4 text-2xl md:text-2xl font-poppins font-normal '>Trending Now</h1>
      </div>

      {/*  Arrow buttons positioned absolutely */}
      <button
        onClick={scrollLeft}
        disabled={products.id == 1}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-1 bg-white  bg-opacity-100 text-black rounded-full disabled:opacity-0 cursor-pointer"  >
        <ArrowLeft size={14} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-1 bg-white  bg-opacity-100 text-black rounded-full cursor-pointer"
      >
        <ArrowRight size={14} />
      </button>

      {/*  Scroll container for the product cards */}
      <div
        ref={scrollContainerRef}
        className="flex  space-x-3 md:space-x-4 px-2 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory"
      >
        {products.map((product) => (
          // Card container: full-width on mobile, fixed width on desktop
          <div
            key={product.id}
            className="flex-shrink-0 w-full  items-center md:w-[297.5px] lg:w-[345px] bg-white rounded  snap-center group"
          >
            {/* Image container with fixed dimensions */}
            <div className="relative bg-gray-50 w-full h-[550px] md:w-[297.5px] md:h-[395px] lg:w-[345px] lg:h-[459px] overflow-hidde group">
              <ProductCard
                title={product.title}
                imageUrl={product.imageUrl}
                hoverImageUrl={product.hoverImage}
                link={product.link}
                effect={true}
              />
            </div>

            {/*  Text container */}
            <div className="p-2 flex justify-between w-full md:w-[297.5px]  lg:w-[345px] mt-1">

              <div className='font-poppins'>
                <h2 className="text-[13px] ">{product.title}</h2>
                <p className="text-[12px]  text-gray-600">{product.description}</p>
              </div>

              {/* Cart button  */}
              <div className="">
                <button className="w-9 h-9 bg-[#002fa7] blue-700 text-white rounded-full md:opacity-0 md:group-hover:opacity-100 flex justify-center items-center">
                  <img
                    className='w-[12px] h-[17px] size4 text-white  cursor-pointer'
                    style={{ filter: 'invert(1)' }}
                    src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3QtY3VycmVudCIgZGF0YS1sYWJlbD0ic3ZnIj4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsa.svg" alt="" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
