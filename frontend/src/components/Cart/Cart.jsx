import React from 'react'

const Cart = ({ isOpen ,onClick }) => {

    if (!isOpen) {
        return
    }

    return (
           <div className='absolute  w-[35vw]  h-[100vh] top-0  bg-white shadow-md transition-all duration-300 left-[65%]'>
            <div className='text-black font-poppins flex justify-between mx-auto p-2  '>
                <div onClick={onClick}> X </div>
                <div>cart</div>
            </div>
            </div>

    )
}

export default Cart
