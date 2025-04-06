import React from 'react'
import { FooterData } from '../../data/footerData'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'


const MainFooter = ({ openIndex, toggleDropdown }) => {
  return (
    <div>
      <div
        className="md:grid md:grid-cols-4 md:gap-6 md:mb-10 px-0 sm:px-6 lg:px-6 md:py-8"
      >
        {
          FooterData.map((item, index) => (
            <div key={item.name} className={`md:border-none  border-b-[0.5px] border-gray-700`}>
              <h4 className=' px-2 md:px-0 md:text-sm md:font-medium text-xs font-extralight md:mt-0 mb-4 mt-4  w-full flex items-center justify-between cursor-pointer md:pointer-events-none '
                onClick={() => toggleDropdown(index)} >

                <span className='hidden md:inline'>{item.name.toLocaleUpperCase()} </span>
                <span className='md:hidden'>{item.name} </span> 
                
                <span className={`md:hidden transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  <ArrowDown size={14} />
                </span>
              </h4>


              {/* Mobile dropdown */}
              <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0 "}`}>
                <ul className='pl-3 pb-4 text-gray-400 space-y-2 text-xs '>
                  {
                    item.list.map((section) => (
                      <li key={section.name} className=' hover:text-white cursor-pointer'>
                        {section.name}
                      </li>
                    ))}
                </ul>
              </div>


              {/* desktop Links */}
              <div className='hidden md:block space-y-2'>
                {

                  FooterData[index].list.map((item) => (
                    <ul key={item.name} className='text-sm text-gray-400'>
                      <li className='hover:text-white transition-colors cursor-pointer'>{item.name}</li>

                    </ul>
                  ))

                }
              </div>

            </div>
          ))
        }
        {/* Social Links */}
        <div className="col-span-2 md:col-span-1 hidden md:block">
          <div className="flex flex-col space-y-5">
            <div>
              <h4 className="text-sm font-medium ">DOWNLOAD OUR APP</h4>
              <div className="hidden md:flex space-x-2">
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
  )
}

export default MainFooter

