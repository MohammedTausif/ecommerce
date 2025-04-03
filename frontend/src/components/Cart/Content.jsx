import React, { useState } from 'react'

const products = [
    {
        id: 1,
        name: "Sweatshirt MENS 365 Collection",
        size: "M",
        price: "499",
        color : "Green",
        quantity: 1,
        image: "https://pangaia.com/cdn/shop/files/365_Midweight-Sweatshirt_Forest_Green-1_3a4659c6-4e6b-4c37-8bfa-0a2c2dcd8ee4.png?crop=center&height=1866&v=1727177645&width=1400"
    },
    {
        id: 2,
        name: "Track Pants",
        size: "M",
        price: "999",
        color : "Green",
        quantity: 2,
        image: "https://pangaia.com/cdn/shop/files/365_TrackPants_Forest_Green-1_19b47d32-6b6a-4fa1-9e3a-7b1a6d2e100c.png?crop=center&height=1364&v=1729733037&width=1024"
    },
    {
        id: 3,
        name: "Sweatshirt",
        size: "M",
        price: "499",
        color : "Green",
        quantity: 1,
        image: "https://pangaia.com/cdn/shop/files/365_Midweight-Sweatshirt_Forest_Green-1_3a4659c6-4e6b-4c37-8bfa-0a2c2dcd8ee4.png?crop=center&height=1866&v=1727177645&width=1400"
    },
    {
        id: 4,
        name: "Track Pants",
        size: "M",
        price: "999",
        color : "Green",
        quantity: 2,
        image: "https://pangaia.com/cdn/shop/files/365_TrackPants_Forest_Green-1_19b47d32-6b6a-4fa1-9e3a-7b1a6d2e100c.png?crop=center&height=1364&v=1729733037&width=1024"
    }
]

const CartContent = () => {
    // const [items, setItems] = useState(null)

  return (
    <div>
      {
        products.map((product, index)=>(
            <div key={index} className=' flex items-start justify-between  py-3 border-b border-gray-200 '>

                <div className=' flex items-start '>
                    <img src={product.image} alt={product.name} className='w-25 h-32 object-cover mx-2 ' />
                </div>

                <div className='flex flex-col h-full justify-evenly  items-start w-1/2 font-poppins font-normal'>
                <div className='space-y-1'>
                    <h3 className='text-sm'> {product.name} </h3>
                    <p className='text-[11px] mt-1 text-gray-500'>Color : {product.color}</p>
                    <p className='text-[11px] mt-1 text-gray-500'>Size : {product.size}</p>
                </div>
                    
                    <div className='flex items-center mt-4 text-sm font-Inter space-x-0 font-extralight'>
                        <button className='border  border-gray-200 cursor-pointer text-lg font-extralight font-poppins flex items-center justify-center w-12 h-8.5'>-</button>
                        <span className='bg-[#F8F8F8] border-t border-b border-gray-200 h-8.5 w-14.5 flex justify-center items-center text-gray-900 text-xs'>{product.quantity}</span>
                        <button className='border  border-gray-200 cursor-pointer text-lg font-extralight font-poppins flex items-center justify-center w-12 h-8.5'>+</button>

                    </div>
                </div>

                <div className='mx-3 flex flex-col h-24  items-end justify-between text-gray-600'>
                    <p className='text-sm'>${product.price.toLocaleString()}</p>
                    <button className='text-gray-600 text-xs cursor-pointer' onClick={()=>alert("feature coming soon")}>
                        Remove
                    </button>
                </div>



            </div>
        ))
      }
    </div>
  )
}

export default CartContent
