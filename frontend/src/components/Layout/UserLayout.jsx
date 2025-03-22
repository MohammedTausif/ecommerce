import React, { useState } from 'react'
import Navbar from '../Common/Navbar'




const UserLayout = () => {


    return (
        <>
            <Navbar />

            <div className="relative hidden md:block w-full h-screen ">

                <img
                    src="src/assets/Hero-Desktop.webp"
                    alt="Background"
                    className="absolute inset-0 w-full h-auto object-coer obect-top top-13 "
                />

                <div className="relative w-full h-full  flex items-center justify-center top-[20%]">
                    <h1 className="text-white text-5xl font-serif font-[100] ">
                        For Every Season
                    </h1>
                </div>
            </div>
        </>
    )
}

export default UserLayout
