import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../../pages/Footer'
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
