import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Menu } from '../../data/NavbarData'

const DesktopMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative w-[100vw]"
    onMouseLeave={() => setHoveredIndex(null)}
    > 
         <span className="flex items-center w-full  h-10 px-2 space-x-6">
        {Menu.map((item, index) => (
          <span
            key={index}
            className="flex items-end justify-start " 
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {item?.name}
           </span>
        ))}
      </span>
      
      {hoveredIndex !== null && Menu[hoveredIndex]?.subMenu && (
        <div className="absolute top-11 left-0 w-[100vw] h-[423px] bg-white   shadow-md p-3 flex "
        // onMouseLeave={()=> setHoveredIndex(null)}
        > 
          {Menu[hoveredIndex].subMenu.map((sub, subIndex) => (
            <div key={subIndex} className="min-w-[200px] h-full  space-y-2 ">
              <h1 className="font-bold">{sub?.category}</h1>
              <ul className='space-y-2 '>
                {sub.list.map((listItem, itemIndex) => (
                  <li key={itemIndex} className='cursor-pointer '>
                    {listItem.name ? listItem.name : listItem.color}
                    
                  </li>
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

