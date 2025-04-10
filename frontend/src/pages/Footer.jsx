import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FooterLinks } from '../data/footerData';
import MainFooter from '../components/Footer/MainFooter';
import Newsletter from '../components/Footer/Newsletter';


const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }



  return (
    <footer className="relative  bottom-0 mt-13 bg-black text-white font-poppins">
      <div className='flex w-full md:flex-row flex-col  h-full'>
        {/* Newsletter Section */}
       <Newsletter/>

        {/* Main Footer Content */}
        <div className="md:w-1/2 w-full mx-auto border-b border-gray-700 ">
          <MainFooter openIndex={openIndex} toggleDropdown={toggleDropdown}/>
        </div>
      </div>

      <div className="w-full h-full ">
        <div className="w-full h-full bg-black flex flex-col md:flex-row justify-between  items-center space-y-4 md:space-y-0 text-sm text-gray-300  ">
          <div className=" h-full md:w-1/2 w-full text-center md:text-right flex space-x-1 text-sm font-poppins md:border-r border-gray-700 py-4 px-3">
            <p>© {new Date().getFullYear()} ROGER.</p>
            <p>Made with materials from nature</p>
          </div>
          <div className="hidden md:flex w-1/2  justify-end  space-x-4 px-3">
            {FooterLinks.map((item) => (
              <Link key={item.name} to={item.link} className="hover:text-white transition-colors">{item.name}</Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;