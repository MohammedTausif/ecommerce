import React from 'react'

const Collection = () => {
    return (
        <>
            <section className="absolute ">
               
                <div className='w-full relative z-1 inset-0  '>
                    <div className='w-full flex flex-wrap'>
                        <div className="relative">
                            <img src="https://pangaia.com/cdn/shop/files/Tracksuits.jpg?crop=center&height=1023&v=1741857608&width=768"
                                className='h-[638px] w-[480px] relative'
                                alt="" />
                            <div className='absolute inset-0 '>
                            <div className='flex flex-col justify-end items-center h-full relative bottom-8 space-y-4'>
                                <h1 className='text-white text-2xl  font-normal font-poppins tracking-wider'>Tracksuits</h1>
                         
                            <button className='bg-white h-[48px] w-[148px] text-xs rounded-full hover:bg-white/80'>Shop Now</button>
                            </div>

                                </div>
                        </div>

                        <div className='relative'>
                            <img src="https://pangaia.com/cdn/shop/files/ELEVATED_WOMENS_2-033B_de7e1d6a-e980-42ea-b76a-c9beebee65b2.png?crop=center&height=1866&v=1742481866&width=1400"
                                className='h-[638px] w-[480px]'
                                alt="" />

                            <div className='absolute inset-0 '>
                                <div className='flex flex-col justify-end items-center h-full relative bottom-8 space-y-4'>
                                    <h1 className='text-white text-2xl  font-normal font-poppins tracking-wider'>Linen</h1>

                                    <button className='bg-white h-[48px] w-[148px] text-xs rounded-full hover:bg-white/80'>Shop Now</button>
                                </div>

                            </div>

                        </div>

                        <div className='relative'>
                            <img
                                src="https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768"
                                className='h-[638px] w-[480px]'
                                alt="" />

                            <div className='absolute inset-0 '>
                                <div className='flex flex-col justify-end items-center h-full relative bottom-8 space-y-4'>
                                    <h1 className='text-white text-2xl  font-normal font-poppins tracking-wider'>Lightweight Outwear</h1>

                                    <button className='bg-white h-[48px] w-[148px] text-xs rounded-full hover:bg-white/80'>Shop Now</button>
                                </div>

                            </div>



                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Collection
