import React from 'react';
import { Link } from 'react-router-dom'
import { Facebook, Instagram, InstagramIcon, Linkedin, LinkedinIcon, TwitterIcon } from 'lucide-react'
const socialLinks = [
  { name: 'Instagram', icon: <InstagramIcon className='size-4 md:size-5 stroke-1' />, link: '/', },
  { name: 'Linkedin', icon: <Linkedin className='size-4 md:size-5' />, link: '/', },
  { name: 'Facebook', icon: <Facebook className='size-4 md:size-5' />, link: '/', },
  { name: 'Twitter', icon: <TwitterIcon className='size-4 md:size-5' />, link: '/', }
]
const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">STAY IN THE KNOW</h3>
              <p className="text-sm text-gray-400">Sign up for weekly launches, stories and offers</p>
            </div>
            <form className="flex flex-1 w-full max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-white py-2 mr-4 focus:outline-none placeholder-white"
              />
              <button className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-medium mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Womens', 'Mens', 'Accessories', 'New Arrivals', 'Best Sellers'].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-sm font-medium mb-4">ABOUT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Our Story', 'Materials', 'B Corp', 'Journal', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm font-medium mb-4">HELP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Contact Us', 'FAQ', 'Shipping', 'Returns', 'Size Guide'].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-4">FOLLOW US</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((platform) => (
                    <a key={platform.name} href="/" className="hover:opacity-75 transition-opacity">

                      <Link to={platform.link}>
                        {platform.icon}
                      </Link>


                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-4">DOWNLOAD OUR APP</h4>
                <div className="flex space-x-2">
                  <a href="/" className="hover:opacity-75 transition-opacity">
                    <img src="/app-store.svg" alt="App Store" className="h-10" />
                  </a>
                  <a href="/" className="hover:opacity-75 transition-opacity">
                    <img src="/google-play.svg" alt="Google Play" className="h-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
            <div className="flex space-x-4">
              {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Cookie Settings'].map((item) => (
                <a key={item} href="/" className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
            <div className="text-center md:text-right flex space-x-1 text-sm font-poppins">
              <p>© {new Date().getFullYear()} ROGER.</p>
              <p>Made with materials from nature</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;