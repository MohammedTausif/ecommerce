import React, { useEffect, useState } from 'react'
import {X} from 'lucide-react'

const MobileMenu = ({isOpen, onClick}) => {

  const [shouldRender, setShouldRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
    }
    else {
      setTimeout(() => setShouldRender(false), 300)
    }

  }, [isOpen])
  return (
    <>
      {
        shouldRender && (
          <div 
          // className={`absolute z-50 left-0 top-0 w-1/2 h-screen bg-gray-100 text-black  transition-all transform duration-1000 ${shouldRender? "translate-x-0" : "-translate-x-full"}`}
          >
        <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          shouldRender ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        
      />

      {/* Slide-in Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-screen w-1/2 bg-white z-50 transform transition-transform duration-500 ${
          shouldRender ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClick}
          className="absolute top-4 right-4 p-2 text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Menu Content */}
        <nav className="mt-16 px-6 space-y-6 text-lg font-semibold text-gray-800">
          <a href="#" className="block">Womens</a>
          <a href="#" className="block">Mens</a>
          <a href="#" className="block">Kids</a>
          <a href="#" className="block">SpringLook</a>
        </nav>
      </div>

        </div>
        )
      }
    </>
  )
}

export default MobileMenu
