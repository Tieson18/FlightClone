import React, { useState } from 'react'
import { Box, Button, Container, IconButton, Stack } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { SiConsul } from "react-icons/si";
import { } from "@mui/icons-material"
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/logo.png"
import SideBar from '../../Components/SideBar';
import { blackColor } from '../../../utils/colors';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [noBg, addBg] = useState("navTwo")

    const addBgColor = () => {
        if (window.scrollY >= 10) {
            addBg('navTwo navTwoBg')
        } else {
            addBg('navTwo')
        }
    }
    window.addEventListener("scroll", addBgColor)

    const navbarII = ["Home", "About", "Offers", "Seats", "Destinations"]

    return (
        <Box component={"header"} border={"1px solid red"}>
            <Container maxWidth={"lg"} className='navbar' border={"1px solid red"}>
                <Stack className='flex navOne' component={"nav"} p={1} justifyContent={"space-between"}>
                    <Link>
                        <SiConsul className='navSvg' />
                    </Link>
                    <Stack className='navLinks' gap={3} direction={"row"} display={{ xs: "none", md: "flex" }}>
                        <NavLink><BsPhoneVibrate className='navSvg' />Support</NavLink>
                        <NavLink><AiOutlineGlobal className='navSvg' />Language</NavLink>
                    </Stack>
                    <Stack className='flex atb' gap={2}>
                        <NavLink>Sign in</NavLink>
                        <NavLink>Sign Out</NavLink>
                    </Stack>
                </Stack>
                <Stack component={"nav"} className={noBg} direction={"row"} justifyContent={"space-between"}>
                    <Stack>
                        <Link>
                            <img src={logo} alt="wings" className='logo' />
                        </Link>
                    </Stack>
                    <Stack className='flex' zIndex={2000} gap={5} display={{ xs: "none", md: "flex" }}>
                        {navbarII.map((head, index) =>
                            <NavLink key={index}>{head}</NavLink>
                        )}
                    </Stack>
                    <Button className='btn' sx={{ display: { xs: "none", md: "flex" } }}>Contact</Button>
                    <IconButton
                        sx={{ display: { xs: "flex", md: "none" } }}
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <CgMenuGridO size={"30px"} color={blackColor} />
                    </IconButton>
                </Stack>
            </Container>
            <SideBar
                isOpen={isDrawerOpen}
                handleClose={() => setIsDrawerOpen(false)}
            />
        </Box >
    )
}

export default Navbar 