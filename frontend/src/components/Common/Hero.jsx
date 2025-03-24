import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>

<section className="relative w-full h-screen pt-13  z-10"> 
  <img
    src="src/assets/Hero-Desktop.webp"
    alt="desktop Background"
    className="w-full object-cover min-h-screen" 
  />
  <div className="absolute inset-0 flex flex-col text-white items-center justify-center">
    <h1 className="text-[35px] md:text-[50px] tracking-wide font-extralight font-Playfair">
      For Every Season
    </h1>
    <p className="text-md font-poppins tracking-wide">
      Where elevated design meets effortless style.
    </p>
    <div className="flex justify-center gap-3 mt-8">
      <button className="w-36 py-4 hover:backdrop-blur hover:bg-white/40 font-poppins bg-white rounded-full text-black text-[11px] cursor-pointer">
        <Link to="/collections">Shop Now</Link>
      </button>
      <button className="w-40 py-4 hover:backdrop-blur hover:bg-white/40 font-poppins bg-white rounded-full text-black text-[11px] cursor-pointer">
        <Link to="/the-spring-lookbook">The Spring Lookbook</Link>
      </button>
    </div>
  </div>
</section>







    {/* <section className="relative w-full h-screen pt-13 overflow-hidden " >  

      {/* Desktop background  */}
      {/* <div className="hidden md:block relative min-h-screen "> */}
        {/* <img
          src="src/assets/Hero-Desktop.webp"
          alt="desktop Background"
          className=" w-full object-cover min-h-screen "  
        /> */}
      {/* </div> */}

      {/* Mobile background */}
       {/* <div className="md:hidden w-full min-h-screen"> */}
        {/* <img
          src="https://pangaia.com/cdn/shop/files/Homepage-Mobile.jpg?v=1741857547&width=1920"
          alt="mobile Background"
          className="md:hidden block w-full h-auto min-h-screen object-contain"  
        /> */}
      {/* </div> */}

      {/*  Headings and Buttons */}
      {/* <div className="absolute inset-0 flex flex-col text-white items-center justify-center">
        <h1 className="text-[35px] md:text-[50px] tracking-wide font-extralight font-Playfair">
          For Every Season
        </h1>
        <p className="text-md font-poppins tracking-wide">
          Where elevated design meets effortless style.
        </p>
        <div className="flex justify-center gap-3 mt-8">
          <button className="w-36 py-4 hover:backdrop-blur hover:bg-white/40 font-poppins bg-white rounded-full text-black text-[11px] cursor-pointer">
            <Link to="/collections">Shop Now</Link>
          </button>
          <button className="w-40 py-4 hover:backdrop-blur hover:bg-white/40 font-poppins bg-white rounded-full text-black text-[11px] cursor-pointer">
            <Link to="/the-spring-lookbook">The Spring Lookbook</Link>
          </button>
        </div>
      </div> */}

      {/*  */}



    {/* </section> */} 

  
  </>

  )
}

export default HeroSection
