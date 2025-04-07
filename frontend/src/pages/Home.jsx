import React from 'react'
import HeroSection from '../components/Common/Hero'
import Trending from './Trending'
import Discover from './Discover'
import GetInspired from './GetInspired'
import VideoCarousel from './VideoCarousel'
import CategoriesPage from './Collection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <CategoriesPage />
            <Trending />
            <Discover/>
            <GetInspired />
            <VideoCarousel />
        </>
    )
}

export default Home
