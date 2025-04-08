import React from 'react'
import Button from '../ui/Button'

const Checkout = () => {
    return (
        <>
            <div className='fixed bottom-12 h-30 md:w-[32vw] w-full bg-white yellow-400 px-4 py-1 space-y-1'>
                <div className='flex justify-between text-black font-poppins text-lg font-normal  '>
                    <h1>Subtotal</h1>
                    <span>$49 USD</span>
                </div>
                <div className='flex justify-between text-gray-500'>
                    <h3 className=''>shipping</h3>
                    <p className='text-xs'>Duties, Taxes & Shipping at Checkout</p>
                </div>

                <Button title='checkout' variant="secondary" className="w-full" link={`/checkout/:${''}`} />

            </div>

        </>
    )
}

export default Checkout
