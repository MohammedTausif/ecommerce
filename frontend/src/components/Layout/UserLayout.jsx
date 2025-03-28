import React from 'react'
import Navbar from '../Common/Navbar'
import HeroSection from '../Common/Hero'
import CategoriesPage from '../../pages/Collection'
import { Newsletter } from '../../pages/Newsletter'
import Footer from '../../pages/Footer'
import Trending from '../../pages/Trending'
import Discover from '../../pages/Discover'
import GetInspired from '../../pages/GetInspired'


const UserLayout = () => {

    return (
        <>
            <Navbar />
            <HeroSection/>
            <CategoriesPage/>
            <Trending/>
            <Discover/>
            <GetInspired/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default UserLayout
