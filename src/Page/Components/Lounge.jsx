import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Board from "../../assets/boarding.jpg"
import Service from "../../assets/service.jpg"

const Lounge = () => {
    const loungeContent = [
        {
            text: 'Help through the airport',
            description: 'You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.'
        },
        {
            text: 'Priority Boarding',
            description: 'You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.'
        },
        {
            text: 'Care on the flight',
            description: 'You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.'
        },
        {
            text: 'Chauffeur-drive service',
            description: 'You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.'
        },
    ]


    return (
        <Box component={"section"} mt={3}>
            <Container maxWidth={"lg"}>
                <Grid container gap={3} direction={{ xs: "column-reverse", md: "row" }} >
                    <Grid item xs={12} md={6}>
                        <Stack className='loungeText'>
                            <Typography variant='h4'>Unaccompanied Minor Lounge</Typography>
                        </Stack>
                        <Grid container className='loungeCon' gap={3}>
                            {loungeContent.map((content, i) => (
                                <Grid item sx={12} md={5} key={i} className='singleGrid'>
                                    <Stack>""
                                        <Typography component={"span"} variant='h6' pb={1} fontWeight={500}>{content.text}</Typography>
                                        <Typography variant='p' className='textDec'>{content.description}</Typography>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} mb={[10, 10, 0]}>
                        <Stack className='loungeImg' alignItems={{ xs: "center", md: "flex-start" }}>
                            <Stack>
                                <Box component={"img"} src={Service} sx={{
                                    width: { xs: '50%', md: '100%' },
                                    height: { xs: "230px", md: "300px" },
                                    maxWidth: { xs: "150px", md: "200px" },
                                    borderRadius: '20rem',
                                    position: "absolute",
                                    transform: { xs: "translate(-35%, 0%)", sm: "translate(100%, 0%)", md: "translate(0%, 0%)" },
                                }} />
                                <Box component={"img"} src={Board} sx={{
                                    width: { xs: '100%', md: '100%' },
                                    height: { xs: "180px", md: "250px" },
                                    maxWidth: { xs: "130px", md: "180px" },
                                    borderRadius: '20rem',
                                    transform: { xs: "translate(40%, 50%)", sm: "translate(200%, 50%)", md: "translate(70%, 50%)" },
                                    // zIndex: "1",
                                }} />
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Lounge