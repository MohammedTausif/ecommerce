import React, { useState } from 'react'
import Navbar from '../Common/Navbar'
import HeroSection from '../Common/Hero'
import Collection from '../../pages/Collection'
import CategoriesPage from '../../pages/Collection'
import { Newsletter } from '../../pages/Newsletter'




const UserLayout = () => {

    return (
        <>
            <Navbar />
            <HeroSection/>
            <CategoriesPage/>
            <Newsletter/>
        </>
    )
}

export default UserLayout
