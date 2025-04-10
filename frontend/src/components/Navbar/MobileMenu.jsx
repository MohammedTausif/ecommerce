import React, { useEffect, useState } from 'react'
import { Menu } from '../../data/navbarData';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAccordionMenu = ({ isOpen, onClick }) => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(0);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const [shouldRender, setShouldRender] = useState(isOpen)

  //to fix background scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
    } else {
      setTimeout(() => setShouldRender(false), 300)
    }
  }, [isOpen])

  const handleCategoryClick = (idx) => {
    setOpenCategoryIndex(openTopIndex === idx ? idx : idx);
    setOpenSubIndex(null);
  };

  const handleSubClick = (sidx) => {
    setOpenSubIndex(sidx);
  };

  return (
    <>
      {shouldRender &&
        <div className="md:hidden absolute  left-0 top-12 w-full h-screen bg-white ">
          {/* Top-level buttons in 2x2 grid */}
          <div className="grid grid-cols-2  w-full ">
            {Menu.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => handleCategoryClick(idx)}
                className={`${openTopIndex === idx ? "bg-[#F8F8F8] text-black" : "bg-white text-[#ADADAD]"} flex items-center justify-center font-poppins text-xs font-normal p-3.5 border-l-[0.5px] border-t-[0.5px] border-gray-200 shadow-sm transition-colors duration-200 cursor-pointer`}
              >
                {item.name}

              </button>
            ))}
          </div>

          {openTopIndex === null && null}

          {/* Sub-menu panel */}
          {openTopIndex !== null && openSubIndex === null && (
            <div className="mt-2 space-y-1 pb-6">
              {Menu[openTopIndex].subMenu.map((sub, sidx) => (
                <div key={sub.category} className=" ">
                  {/* Category header */}
                  <button onClick={() => handleSubClick(sidx)}
                    className="w-full flex items-center justify-between   p-3 cursor-pointer"  >
                    <span className="text-black font-poppins text-xs font-[400]">{sub.category}</span>
                    <ArrowDown
                      className={`transform transition-transform duration-300 ${openSubIndex === sidx ? 'rotate-90' : '-rotate-90'}`}
                      size={12} />
                  </button>

                </div>
              ))}
              {/* inner circle  */}
              <div className='border-t-[0.5px] border-gray-200'>
                <div className='flex flex-col p-3 text-xs  font-poppins font-normal space-y-5 mt-3'>
                  <div className='text-[#002fa7] cursor-pointer'>Inner Circle</div>
                  <div className='cursor-pointer'>Login <span className='font-Inter'>/</span> Register</div>
                  <div className=' cursor-pointer'>India (USD <span className='font-Playfair'>$</span>)</div>
                </div>
              </div>


            </div>
          )}


          {/* sub menu list */}
          {openTopIndex !== null && openSubIndex !== null && (
            <div className='w-full bg-white py-4 overflow-auto text-black transition-all duration-300 ease-in-out' >

              {/* Button to go back */}
              {/* Category title */}
              <button
                onClick={() => setOpenSubIndex(null)}
                className="text-xs font-poppins font-normal px-2 mt-1 mb-2 flex items-center ">
                <span>

                  <ArrowDown className="transform rotate-90 mr-1 stroke-2" size={12} />
                </span>
                {Menu[openTopIndex].subMenu[openSubIndex].category}

              </button>

              <ul className="space-y-0 font-poppins text-xs border-b-[0.5px] border-gray-200">
                {Menu[openTopIndex].subMenu[openSubIndex].list.map((link, lidx) => (
                  <li key={lidx}>
                    <Link onClick={onClick}
                      to={link.Link || link.link || '#'}
                      className="block p-3 bg-white  cursor-pointer  hover:bg-gray-50 transition-colors"
                    >
                      {link.name || link.color}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          )}
        </div>
      }
    </>
  );
};

export default MobileAccordionMenu;
