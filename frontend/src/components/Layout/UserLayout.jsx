import React from 'react'
import Navbar from '../Common/Navbar'
import HeroSection from '../Common/Hero'
import CategoriesPage from '../../pages/Collection'
import { Newsletter } from '../../pages/Newsletter'
import Footer from '../../pages/Footer'
import Trending from '../../pages/Trending'


const UserLayout = () => {

    return (
        <>
            <Navbar />
            <HeroSection/>
            <CategoriesPage/>
            <Trending/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default UserLayout
