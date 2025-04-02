import React from 'react'
import { Link } from 'react-router-dom'
import Collection from '../../pages/Collection'
import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <>

      <section className="relative">
        {/* Background image  */}
        <div className="h-screen bg-cover bg-no-repeat  bg-top    mt-13 bg-[url('https://pangaia.com/cdn/shop/files/Homepage-Mobile.jpg?v=1741857547&width=1920')] md:bg-[url('https://pangaia.com/cdn/shop/files/Hero-Desktop.jpg?crop=center&height=1638&v=1741857542&width=2560')]">

          <div className='w-full h-full flex flex-col justify-end relative bottom-[26%] lg:bottom-[25%] items-center text-white'>
            <h1 className="text-[35px] md:text-[45px] trackingwide font-extralight font-Playfair">
              {/* For Every Season */}
              Sustainable Innovation
            </h1>
            <p className="text-lg font-poppins tracking-wider">
              {/* Where elevated design meets effortless style. */}
              A mission-driven materials science brand.
            </p>
            <div className="flex gap-3 mt-8">
              <Button
                title='Shop Now'
                link='/collections'
                className='w-[148px]'
                variant= "primary"
              />
              <Button
                title='The Spring Lookbook'
                link='/pages/the-spring-lookbook'
                className='w-[167px] '
                variant= 'primary'
              />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default HeroSection
