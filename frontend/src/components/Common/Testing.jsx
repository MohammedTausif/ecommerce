import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  // List of menu items
  const menuItems = ['Home', 'About', 'Contact'];
  // Track the active index (e.g., based on click)
  const [activeIndex, setActiveIndex] = useState();
  // Style for the indicator: left offset and width
  const [indicatorStyle, setIndicatorStyle] = useState({});
  // Refs for menu items
  const menuRefs = useRef([]);

  // Update indicator position when activeIndex changes
  useEffect(() => {
    const current = menuRefs.current[activeIndex];
    if (current) {
      setIndicatorStyle({
        left: current.offsetLeft,
        width: current.offsetWidth,
      });
    }
  }, [activeIndex]);

  return (
    <nav className="relative border-b border-gray-300">
      <ul className="flex px-2 space-x-6 font-poppins">
        {menuItems.map((item, index) => (
          <li
            key={index}
            // Save a ref for each menu item
            ref={(el) => (menuRefs.current[index] = el)}
            // Change active index on click (or use onMouseEnter for hover effect)
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setIndicatorStyle({})}
            
            className="cursor-pointer py-3 text-gray-700"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Active indicator element */}
      <div
        className="absolute bottom-0 h-[2px] bg-black -500 transition-all duration-300"
        style={indicatorStyle}
      ></div>
    </nav>
  );
};

export default Navbar;
