import React from 'react'

const SearchPage = ({isOpen, onClose}) => {
    if(!isOpen){
        return
    }

  return (
    <div className='absolute  w-[35vw]  h-[100vh] top-0  bg-white shadow-md transition-all duration-300 left-[65%]'>
    <div className='text-black font-poppins flex justify-between mx-auto p-2  '>
        <div onClick={onClose}> X </div>
        <div>Search</div>
    </div>
    <div>
        <div className='text-black'>
            <input type="text" name="search" id="" placeholder='enter here' className='outline-1 rounded py-2 px-2 ' />
            <button className='bg-black px-3 py-2 rounded-md text-white' type="submit">Search </button>
        </div>
    </div>
    </div>

  )
}

export default SearchPage
