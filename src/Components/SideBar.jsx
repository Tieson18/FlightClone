import { Button, Drawer, IconButton, List, ListItem, ListItemButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import { SecondaryColor } from '../../utils/colors'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ isOpen, handleClose }) => {
    const barLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Offers", link: "/offers" },
        { name: "Seats", link: "/seats" },
        { name: "Destinations", link: "/destinations" }
    ]

    const navigate = useNavigate()

    return (
        <Stack sx={{
        }}>
            <Drawer
                anchor={"right"}
                open={isOpen}
                onClose={handleClose}
                sx={{
                    display: { xs: "block", md: "none" }
                }}
                PaperProps={{
                    sx: {
                        background: SecondaryColor,
                        borderRadius: "10px",
                        top: "5em",
                        right: "30%",
                        height: "50%",
                        width: "40%",
                        textAlign: "center",
                    }
                }}

            >
                <List sx={{ margin: "auto" }}>
                    {barLinks.map((item) => (
                        <ListItem key={item.name}>
                            <ListItemButton sx={{ justifyContent: "center" }} onClick={() => navigate(item.link)}>{item.name}</ListItemButton>
                        </ListItem>
                    ))}
                    <Button className='btn' sx={{ mt: 1 }}>Contact us</Button>
                </List>

            </Drawer>
        </Stack>
    )
}

export default SideBar