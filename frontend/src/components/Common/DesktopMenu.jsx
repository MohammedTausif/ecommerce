import React, { useEffect, useRef, useState } from 'react'
import { Menu } from '../../data/navbarData'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'

const DesktopMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const current = navRefs.current[hoveredIndex];
    if (current) {
      setIndicatorStyle({
        left: current.offsetLeft + 1,
        width: current.offsetWidth,
      });
    }
  }, [hoveredIndex])

  // Framer-motion logic
  const subNavVariants = {
    hidden: {
      clipPath: 'inset(0 0 100% 0)',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      clipPath: 'inset(0 0 0 0)',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    }
  };


  return (

    <div className="relative w-full "
    >
      <span className="flex items-center w-full h-12 px-2 space-x-6">
        {Menu.map((item, index) => (
          <NavLink
            key={index}
            ref={(e) => (navRefs.current[index] = e)}
            className="flex items-center h-full "
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {item?.name}
          </NavLink>
        ))}
      </span>
      {/*  */}
      {
        hoveredIndex != null && <div className='absolute bottom-0 h-[1px] bg-black transition-all duration-200'
          style={indicatorStyle}
        ></div>
      }
      {/* webpage background when sub-menu opens */}
      {hoveredIndex != null && <div className='absolute  z-0 h-[100vh] w-[100vw] bg-gray-900/25 transition-all duration-200 ' ></div>}

      {/* Sub-Menu Dropdown */}
      <AnimatePresence>
        {
          hoveredIndex !== null && Menu[hoveredIndex]?.subMenu && (
            <motion.div
              variants={subNavVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ originY: 0 }}
              className="absolute top-12 left-0 w-[100vw] h-[423px] bg-white   shadow-md p-3 flex"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {Menu[hoveredIndex].subMenu.map((sub, subIndex) => (
                <div key={subIndex} className="min-w-[200px] h-full  space-y-2  ">
                  <h1 className="font-bold">{sub?.category}</h1>
                  <ul className='space-y-2 grid '>
                    {sub.list.map((listItem, itemIndex) => (
                      <Link to={listItem.Link} key={itemIndex} className={`${sub.category == 'Trending' ? "font-semibold" : `${sub.category == 'About Us' ? "font-semibold" : ""}`} cursor-pointer`}>
                        {listItem.name ? listItem.name : listItem.color}
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}

              {Menu[hoveredIndex].url && (
                <div className="w-full h-full">
                  {Menu[hoveredIndex].url.endsWith('.mp4') ? (
                    <div className='flex rounded'>
                      <video
                        src={Menu[hoveredIndex].url}
                        autoPlay
                        loop
                        muted
                        className="w-[560px] h-full object-cover object-center rounded absolute right-0"
                      />
                      <h1 className='absolute right-[15%]  bottom-6 bg-blue-800 cursor-pointer text-white rounded-full py-[14px] px-6 font-poppins '>
                        ROGER Stories
                      </h1>

                    </div>
                  ) : (
                    <div>
                      <img
                        src={Menu[hoveredIndex].url}
                        alt={Menu[hoveredIndex].name}
                        className="absolute right-0 w-[560px] object-cover h-full"
                      />
                      <h1 className='absolute right-[15%] bottom-6 bg-blue-800 cursor-pointer text-white rounded-full py-[14px] px-6 font-poppins'>{Menu[hoveredIndex].name == 'Kids' ? "Baby Wear" : "Graphic Tees"} </h1>
                    </div>
                  )}
                </div>
              )}

            </motion.div>
          )}
      </AnimatePresence>
    </div>

  );
};

export default DesktopMenu;

