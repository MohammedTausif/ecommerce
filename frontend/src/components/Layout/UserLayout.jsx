import React from 'react'
import Navbar from '../Common/Navbar'
import HeroSection from '../Common/Hero'
import CategoriesPage from '../../pages/Collection'
import Footer from '../../pages/Footer'
import Trending from '../../pages/Trending'
import Discover from '../../pages/Discover'
import GetInspired from '../../pages/GetInspired'
import VideoCarousel from '../../pages/VideoCarousel'
import { Outlet } from 'react-router-dom'


const UserLayout = () => {

    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />


        </>
    )
}

export default UserLayout
