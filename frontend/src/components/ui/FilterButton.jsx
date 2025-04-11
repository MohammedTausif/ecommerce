import React from 'react';

const FilterButton = React.memo(({ title, className = '', Icon, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${className} flex justify-center items-center gap-3 font-poppins font-light rounded-full text-xs cursor-pointer py-4 px-6 bg-[#002FA7] text-white hover:bg-[#002FA7]/90`}
      >
        <span>{title}</span>
        {Icon && (typeof Icon === 'function' ? <Icon  /> : Icon)}
      </button>
    </div>
  );
});

export default FilterButton;
