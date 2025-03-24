import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
    {/* Desktop background */}
      <div className="relative hidden md:block w-full h-screen ">

        <img
          src="src/assets/Hero-Desktop.webp"
          alt="desktop Background"
          className="absolute inset-0 w-full h-auto object-coer obect-top top-13 "
        />
      </div>

      {/* small screen background */}
      <div className="relative md:hidden w-full h-screen ">
        <img
          src="https://pangaia.com/cdn/shop/files/Homepage-Mobile.jpg?v=1741857547&width=1920"
          alt="mobile Background"
          className="absolute inset-0 w-full h-auto object-coer obect-top top-13 "
        />
      </div>

      {/* headngs & buttons */}
      <div className="absolute w-full h-full  flex flex-col text-white items-center justify-center top-[30%] lg:top-[22%] ">
        <h1 className="text-white w-full  flex justify-center text-[35px] md:text-[50px] tracking-wide font-extralight  font-Playfair  ">
          For Every Season
        </h1>
        <p className=' text-md font-poppins tracking-wide'>Where elevated design meets effortless style.</p>

        <div className='flex justify-center relative gap-3  w-full mt-8'>
          <button className='w-36 py-4 hover:backdrop-blur hover:bg-white/40 font-poppins bg-white rounded-full text-black text-[11px] cursor-pointer'>
            <Link to={'/collections'}>
              Shop Now
            </Link>
          </button>
          <button className='w-40 py-4 hover:backdrop-blur hover:bg-white/40 font-poppins bg-white rounded-full text-black text-[11px] cursor-pointer'>
            <Link to={'/the-spring-lookbook'}>
              The Spring Lookbook
            </Link>
          </button>
        </div>
      </div>

    </>
  )
}

export default HeroSection
