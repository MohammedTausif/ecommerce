import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// Sample product data
const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    imageUrl: 'https://pangaia.com/cdn/shop/files/365_Midweight-Sweatshirt_Forest_Green-1_3a4659c6-4e6b-4c37-8bfa-0a2c2dcd8ee4.png?crop=center&height=1364&v=1727177645&width=1024',
    hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    imageUrl: 'https://pangaia.com/cdn/shop/files/365_TrackPants_Forest_Green-1_19b47d32-6b6a-4fa1-9e3a-7b1a6d2e100c.png?crop=center&height=1364&v=1729733037&width=1024',
    hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    imageUrl: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
    hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for Product 4',
    imageUrl: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
  },
  // Add more products as needed...
  {
    id: 5,
    title: 'Product 1',
    description: 'Description for Product 1',
    imageUrl: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
  },
  {
    id: 6,
    title: 'Product 2',
    description: 'Description for Product 2',
    imageUrl: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
  },
  {
    id: 7,
    title: 'Product 3',
    description: 'Description for Product 3',
    imageUrl: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
  },
  {
    id: 8,
    title: 'Product 4',
    description: 'Description for Product 4',
    imageUrl: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
  },
];

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
    <div className="relative py-8">
      {/* ★ Arrow buttons positioned absolutely */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-1 bg-white  bg-opacity-100 text-black rounded-full"
      >
        <ArrowLeft size={14} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-1 bg-white  bg-opacity-100 text-black rounded-full"
      >
        <ArrowRight size={14} />
      </button>

      {/* ★ Scroll container for the product cards */}
      <div
        ref={scrollContainerRef}
        className="flex  space-x-3 md:space-x-4 px-3 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory"
      >
        {products.map((product) => (
          // ★ Card container: full-width on mobile, fixed width on desktop
          <div
            key={product.id}
            className="flex-shrink-0 w-[297.5px] lg:w-[345px] bg-white rounded  snap-center group"
          >
            {/* ★ Image container with fixed dimensions */}
            <div className="relative w-[297.5px] h-[395px] lg:w-[345px] lg:h-[459px] overflow-hidde group">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover object-top  rounded-t transition-opacity duration-300 group-hover:opacity-0"

              />
              {/* Image changes on hover */}
              <img
                src={product.hoverImage}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover object-top  rounded-t transition-opacity duration-300 opacity-0 group-hover:opacity-100"

              />

            </div>
            {/* ★ Text container */}
            <div className="p-2 flex justify-between w-[297.5px]  lg:w-[345px] mt-2">

              <div>
                <h2 className="text-sm font-poppins">{product.title}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>

              {/*Cart button  */}
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
