import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white  text-black px-4 mt-14">
       {/* Heading */}
      <h1 className="text-[8rem]  font-extrabold leading-none sm:text-[10rem] md:text-[12rem]">
        404
      </h1>

      {/* content */}
      <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold font-poppins">
        Oops! Page Not Found
      </p>
      <p className="mt-2 text-base sm:text-lg md:text-xl max-w-lg text-center font-poppins">
        The page you’re looking for doesn’t exist or has been moved. 
        Explore our latest sustainable styles instead.
      </p>

      {/* Image */}
      <div className="mt-8 w-full max-w-sm">
        <img
          src="https://pangaia.com/cdn/shop/files/Hope_Print_Graphic_T-Shirt_Off_White_Mens-4_52310e03-f929-4176-a663-2b0778627fa7.png?crop=center&height=1050&v=1741860406&width=1400"
          alt="Eco-fashion illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/*  Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 mb-8 font-poppins">
        <Link
          to="/"
          className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
        <Link
          to="/shop-all"
          className="px-6 py-3 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}