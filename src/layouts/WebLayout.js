import React from 'react'
import Navbar from '../components/Navbar/WebNavbar'

function WebLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default WebLayout
