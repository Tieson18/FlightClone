import { Box, Container, Grid, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../assets/logo.png'
import { Twitter, YouTube } from '@mui/icons-material'
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const footerLinks = [
        {
            title: "Information",
            links: ["Home", "Explore", "Flight Status", "Travel", "Check-In", "Manage your Booking"]
        },
        {
            title: "Quick Guide",
            links: ["FAQ", "How to", "Features", "Baggage", "Route Maps", "Our communities"]
        },
        {
            title: "Information",
            links: ["Chauffuer", "Our partners", "Destination", "Careers", "Transportation", "Programming Rules"]
        },
    ]

    const socalIcons = [<TiSocialFacebook />, <Twitter />, <YouTube />, <FaPinterestP />]

    const navigate = useNavigate()

    return (
        <Box component={"footer"} className='footer section'>
            <Container maxWidth={"lg"}>
                <Grid container className='footCon'>
                    <Grid item xs={12} md={2.5} className="gridOne">
                        <Stack>
                            <img src={Logo} className="logo" />
                        </Stack>
                        <Typography variant='p' className='textDec'>Your mind should be stronger than your feelings, fly!</Typography>
                        <Stack className="socIcon flex" gap={2}>
                            {socalIcons.map((icon) => (
                                <Button>{icon}</Button>
                            ))}
                        </Stack>
                    </Grid>
                    {footerLinks.map((link, i) => (
                        <Grid item xs={12} md={2.5} key={i} className="footLinks">
                            <Typography component={"span"}>{link.title}</Typography>
                            {link.links.map((link, i) => (
                                <Stack key={i}>
                                    <Link onClick={() => navigate(`/${link.toLowerCase().replace(/\s/g, '-')}`)}>
                                        {link}
                                    </Link>
                                </Stack>
                            ))}
                        </Grid>
                    ))}
                </Grid>
                <Stack className="copyRight">
                    <Typography variant='p'>Courtesy Design | Developed by <Link>IsraTech</Link></Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer