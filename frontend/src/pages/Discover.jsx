import React from 'react';
import Button from '../components/ui/Button';

const Discover = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row mt-8  space-x-10  ">
      {/* Left Side - Image background */}
      <div className="w-full md:w-1/2 h-[75%] md:h-auto px-3 ">
        <img
          src="https://pangaia.com/cdn/shop/files/Copy_of_Copy_of_Editorial-Mobile.jpg?v=1743068041&width=1920"
          alt="Descriptive Alt Text"
          className="w-full md:h-full h-[600px] object-cover object-top md:object-center rounded-t"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 flex  flex-wrap items-center justify-center  md:p-6 p-3  ">
        <div className="text-center  ">
          <h1 className="text-4xl md:text-[48px]  md:mb-4 mb-2 font-Playfair tracking-wider ">The ROGER Tracksuit</h1>
          <p className="text-lg mb-6 font-poppins px-5">
          From purpose-led design details to year-round durability—the ROGER tracksuit is comfortable and crafted with care.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
            title='Discover More'
            link='/pages/roger-icons'
            variant= "outline"
            className='w-37'
            />
             <Button
            title='Shop The Collection'
            link='/pages/the-tracksuit-lookbook'
            variant= "outline"
            className='w-37'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover
