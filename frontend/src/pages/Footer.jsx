import React from 'react';
import { Link } from 'react-router-dom'
import { Facebook, Instagram, InstagramIcon, Linkedin, LinkedinIcon, TwitterIcon } from 'lucide-react'


const socialLinks = [
  { name: 'Instagram', icon: <InstagramIcon className='size-4 md:size-5 stroke-[1px]' />, link: '/', },
  { name: 'Linkedin', icon: <Linkedin className='size-4 md:size-5 stroke-[1px]'  />, link: '/', },
  { name: 'Facebook', icon: <Facebook className='size-4 md:size-5 stroke-[1px]' />, link: '/', },
  { name: 'Twitter', icon: <TwitterIcon className='size-4 md:size-5 stroke-[1px]' />, link: '/', }
]
const AboutLinks = [
  { title: 'Our Story' },
  { title: 'Materials' },
  { title: 'B Corp' },
  { title: 'Journal' },
  { title: 'Careers' }
]
const ShopLinks = [
  { title: 'Womens' },
  { title: 'Mens' },
  { title: 'Accessories' },
  { title: 'New Arrivals' },
  { title: 'Best Sellers' }
]
const FooterLinks = [
  { title: 'Privacy Policy' },
  { title: 'Terms of Service' },
  { title: 'Accessibility' },
  { title: 'Cookie Settings' }
]
const HelpLinks = [
  { title: 'Contact Us' },
  { title: 'FAQ' },
  { title: 'Shipping' },
  { title: 'Returns' },
  { title: 'Size Guide' }
]
const Footer = () => {
  return (
    <footer className=" bg-black text-white font-poppins">
      <div className='flex w-full md:flex-row flex-col  h-full'>
      {/* Newsletter Section */}
      <div className="md:border-r border-b border-gray-700 w-full md:w-1/2">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 py-8 ">
          <div className=" flex flex-col md:fex-row justify-between items-start space-y-4 md:space-y-8">
            <div className="flex-1">
              <h3 className="md:text-xs text-lg font-light mb-2">Want to be part of our collective?</h3>
              </div>
            <div >
              <p className='md:text-xs text-sm font-light'>
              Be the first to receive innovative new product launches, perspectives and technologies, direct to your inbox. To introduce you to our world, we are offering 10% off your first order. Discount applies to full-price products only.
              </p>
            </div>
            <form className="flex flex-col flex-1 w-full max-w-xl">
              <div className='flex w-full'>

              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border-[0.5px] border-gray-600  p-2  focus:outline-none placeholder-gray-200 font-poppins text-sm w-1/2"
                />
              <input
                type="text"
                placeholder="Name"
                className="flex-1 bg-transparent border-[0.5px]  border-gray-600  p-2 focus:outline-none placeholder-gray-200 text-sm w-1/2"
                />
                </div>
              <button className="px-6 py-2 bg-transparent text-white border-[0.5px]  border-gray-600 font-light hover:text-gray-300 transition-colors">
                Subscribe
              </button>
            </form>

            <div className="flex space-x-4">
                  {socialLinks.map((platform) => (
                    <Link key={platform.name} to={platform.link} className="hover:opacity-75 transition-opacity">
                      {platform.icon}
                    </Link>
                  ))}
                </div>


          </div>
        </div>
        
      </div>

      {/* Main Footer Content */}
      <div className="md:w-1/2 w-full mx-auto border-b border-gray-700 ">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 px-4 sm:px-6 lg:px-6 py-12">
          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-medium mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {ShopLinks.map((item) => (
                <li key={item.title}>
                  <a href="/" className="hover:text-white transition-colors">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          

          {/* About Column */}
          <div>
            <h4 className="text-sm font-medium mb-4">ABOUT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {AboutLinks.map((item) => (
                <li key={item.title}>
                  <a href="/" className="hover:text-white transition-colors">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm font-medium mb-4">HELP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {HelpLinks.map((item) => (
                <li key={item.title}>
                  <a href="/" className="hover:text-white transition-colors">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col space-y-5">
              <div>
                <h4 className="text-sm font-medium ">DOWNLOAD OUR APP</h4>
                <div className="flex space-x-2">
                  <Link to="/" className="hover:opacity-75 transition-opacity">
                    <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" alt="App Store" className="h-20" />
                  </Link>
                  <Link to="/" className="hover:opacity-75 transition-opacity">
                    <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" alt="Google Play" className="h-20" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    
         <div className="w-full h-full ">
          <div className="w-full h-full bg-black flex flex-col md:flex-row justify-between  items-center space-y-4 md:space-y-0 text-sm text-gray-300  ">
          <div className=" h-full md:w-1/2 w-full text-center md:text-right flex space-x-1 text-sm font-poppins border-r border-gray-700 py-4 px-3">
              <p>© {new Date().getFullYear()} ROGER.</p>
              <p>Made with materials from nature</p>
            </div>
            <div className="hidden md:flex w-1/2  justify-end  space-x-4 px-3">
              {FooterLinks.map((item) => (
                <Link key={item.title} to="/" className="hover:text-white transition-colors">{item.title}</Link>
              ))}
            </div>
            
          </div>
        </div> 
      
    </footer>
  );
};

export default Footer;