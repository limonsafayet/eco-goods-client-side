import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/WebNavbar'

function WebLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default WebLayout
