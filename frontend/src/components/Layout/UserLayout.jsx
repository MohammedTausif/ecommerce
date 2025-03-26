import React from 'react'
import Navbar from '../Common/Navbar'
import HeroSection from '../Common/Hero'
import CategoriesPage from '../../pages/Collection'
import { Newsletter } from '../../pages/Newsletter'
import Footer from '../../pages/Footer'


const UserLayout = () => {

    return (
        <>
            <Navbar />
            <HeroSection/>
            <CategoriesPage/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default UserLayout
