import React, { useState } from 'react'
import Navbar from '../Common/Navbar'
import HeroSection from '../Common/Hero'
import Collection from '../../pages/Collection'




const UserLayout = () => {


    return (
        <>
            <Navbar />
            <HeroSection/>
            <Collection/>

            
        </>
    )
}

export default UserLayout
