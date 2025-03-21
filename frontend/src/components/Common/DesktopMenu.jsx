import React, { useEffect, useRef, useState } from 'react'
import { Menu } from '../../data/NavbarData'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

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



  return (

    <div className="relative w-[100vw] "
      // onMouseLeave={() => setHoveredIndex(null)}
    >
      <span className="flex items-center w-full bg-white h-10 px-2 space-x-6">
        {Menu.map((item, index) => (
          <NavLink
            key={index}
            ref={(e) => (navRefs.current[index] = e)}
            className="flex items-end justify-start "
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {item?.name}
          </NavLink>
        ))}
      </span>
      {
        hoveredIndex != null && <div className='absolute bottom-0 h-[1px] bg-black transition-all duration-200'
          style={indicatorStyle}
        ></div>
        
      }
       {
        hoveredIndex != null && <div className='absolute 0 z-0 h-[100vh] w-[100vw] bg-gray-900/25 transition-all duration-200 '
          
        ></div>
        
      }

      {
        hoveredIndex !== null && Menu[hoveredIndex]?.subMenu && (
          <div className="absolute top-10 left-0 w-[100vw] h-[423px] bg-white   shadow-md p-3 flex transition-all duration-200 "
          onMouseLeave={()=> setHoveredIndex(null)}
          >
            {Menu[hoveredIndex].subMenu.map((sub, subIndex) => (
              <div key={subIndex} className="min-w-[180px] h-full  space-y-2 ">
                <h1 className="font-bold">{sub?.category}</h1>
                <ul className='space-y-2 grid '>
                  {sub.list.map((listItem, itemIndex) => (
                    <Link to={listItem.Link} key={itemIndex} className='cursor-pointer '>
                      {listItem.name ? listItem.name : listItem.color}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        )}
    </div>

  );
};

export default DesktopMenu;

