import React, { useEffect, useState } from 'react'
import { Menu } from '../../data/navbarData';
import { ArrowDown } from 'lucide-react';

const MobileAccordionMenu = ({ isOpen, onClick }) => {
  const [openTopIndex, setOpenTopIndex] = useState(0);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const [shouldRender, setShouldRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
    }
    else {
      setTimeout(() => setShouldRender(false), 300)
    }

  }, [isOpen])

  const handleTopClick = (idx) => {
    setOpenTopIndex(openTopIndex === idx ? null : idx);
    setOpenSubIndex(null);
  };

  const handleSubClick = (sidx) => {
    setOpenSubIndex(sidx);
  };

  return (
    <>
      {shouldRender &&
        <div className="md:hidden absolute  left-0 top-12 w-full h-screen bg-gray-50 ">
          {/* Top-level buttons in 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 p-4 w-full ">
            {Menu.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => handleTopClick(idx)}
                className={`flex items-center justify-between ${openTopIndex === idx ? "bg-green-200 text-green-800" : "bg-white text-gray-800"} p-4 rounded-lg shadow-sm transition-colors duration-200`}
              >
                <span className="font-medium ">{item.name}</span>
                <ArrowDown
                  className={`transform transition-transform duration-300 ${openTopIndex === idx ? 'rotate-180' : ''
                    }`}
                  size={20}
                />
              </button>
            ))}
          </div>

          {openTopIndex === null && null}

          {/* Sub-menu panel */}
          {openTopIndex !== null && openSubIndex === null && (
            <div className="px-4 pb-6">
              {Menu[openTopIndex].subMenu.map((sub, sidx) => (
                <div key={sub.category} className="mb-4">
                  {/* Category header */}
                  <button
                    onClick={() => handleSubClick(sidx)}
                    className="w-full flex items-center justify-between bg-green-100 p-3 rounded-md"
                  >
                    <span className="text-green-800 font-semibold">{sub.category}</span>
                    <ArrowDown
                      className={`transform transition-transform duration-300 ${openSubIndex === sidx ? 'rotate-180' : ''
                        }`}
                      size={18}
                    />
                  </button>


                </div>
              ))}
            </div>
          )}


          {/* sub menu list */}
          {openTopIndex !== null && openSubIndex !== null && (
            <div
              className={`  w-full bg-white py-4 overflow-auto text-black
                   transition-all duration-300 ease-in-out
                `}
            >
              {/* Button to go back */}
              {/* Category title */}
              <button
              onClick={()=>setOpenSubIndex(null)}
               className="text-sm font-poppins mb-2 flex items-center ">
                <span>

                  <ArrowDown className="transform rotate-90 mr-1 stroke-1" size={18} />
                </span>
                {Menu[openTopIndex].subMenu[openSubIndex].category}

              </button>

              <ul className="space-y-0 font-poppins text-xs">
                {Menu[openTopIndex].subMenu[openSubIndex].list.map((link, lidx) => (
                  <li key={lidx}>
                    <a
                      href={link.Link || link.link || '#'}
                      className="block p-3 bg-white  cursor-pointer  hover:bg-gray-50 transition-colors"
                    >
                      {link.name || link.color}
                    </a>
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
