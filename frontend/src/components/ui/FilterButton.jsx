import React from 'react';

const FilterButton = React.memo(({ title, className = '', Icon, onClick, isActive, badgeCount = 0}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${className} flex justify-center items-center gap-3 font-poppins font-light rounded-full text-xs cursor-pointer py-4 px-6 bg-[#002FA7] text-white hover:bg-[#002FA7]/90`}
      >
        <span>{title}</span>

        <span className="relative inline-block w-5 h-5">
          {Icon && (typeof Icon === 'function' ? <Icon className="w-full h-full" /> : Icon)}

          {isActive && (
            <span className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-[#D70000] rounded-full text-[10px] font-extralight font-sans flex justify-center items-center " >{badgeCount}</span>
          )}
        </span>
        
      </button>
    </div>
  );
});

export default FilterButton;

