import React from 'react'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Support from './Components/Support'
import Info from './Components/Info'
import Lounge from './Components/Lounge'
import Travelers from './Components/Travelers'
import Subscribers from './Components/Subscribers'
import Footer from './Components/Footer'
import { Box } from '@mui/material'
import Header from './Components/Header'

const Home = () => {
    return (
        <Box minHeight={"100vh"}>
            <Box>
                <Navbar />
                <Header />
            </Box>
            <Search />
            <Support />
            <Info />
            <Lounge />
            <Travelers />
            <Subscribers />
            <Footer />
        </Box>
    )
}

export default Home