import { Box, Container, Stack, Typography } from '@mui/material'
import takeoff from '../../assets/takeoff.png'
import video from '../../assets/video.mp4'
import React from 'react'

const Header = () => {
    return (
        <Box component={"section"}>
            <Container maxWidth={"lg"} className='home'>
                <Stack alignItems={"center"} >
                    <Typography variant='h2' fontSize={{ xs: '2.75rem', md: '3.75rem' }} width={{ xs: "90%", md: "50%" }} className='mainText' >Create Ever-Lasting Memories With Us</Typography>
                </Stack>
                <Stack className='flex homeImg'>
                    <Stack height={{ xs: "", md: "280px" }}>
                        <Box component={"video"} src={video} autoPlay sx={{
                            width: "80%",
                            height: { xs: "50%", md: "100%" },
                        }}></Box>
                    </Stack>
                    <Box component={"img"} src={takeoff} alt="plane" className='plane' sx={{ top: { xs: "-5%", md: "-30px" } }} />
                </Stack>
            </Container>
        </Box>
    )
}

export default Header