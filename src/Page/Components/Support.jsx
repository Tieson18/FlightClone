import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { fontStyle, greyText } from '../../../utils/colors'
import View1 from '../../assets/planeView1.jpg'
import View2 from '../../assets/planeView2.jpg'
import View3 from '../../assets/planeView3.jpg'


const Support = () => {
    const supportContexts = [
        {
            title: 'Travel requirements for Dubai',
            description: 'Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!',
            number: '01',
            className: 'number'
        },
        {
            title: 'Chauffeur services at your arrival',
            description: 'Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!',
            number: '02',
            className: 'number colorOne'
        },
        {
            title: 'Multi-risk travel insurance',
            description: 'Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!',
            number: '03',
            className: 'number colorTwo'
        }
    ]

    return (
        <Box component={"section"} mb={["9rem", "9rem", 0]}>
            <Container maxWidth={"lg"} className='supContainer'>
                <Stack className="titles">
                    <Typography variant='p' width={{ xs: "50%", md: "100%" }}>travel support</Typography>
                    <Typography variant='h4' width={{ xs: "80%", md: "100%" }}>Plan your travel with confidence</Typography>
                    <Typography variant='p' className='textDec'>Find help with booking and travel plans, see what to expect along the journey!</Typography>
                </Stack>
                <Stack mt={6}>
                    <Grid container gap={1} justifyContent={"space-between"}>
                        <Grid item xs={10} md={5} >
                            <Stack className='textCon'>
                                {supportContexts.map((support, i) => (
                                    <Stack key={i} className='singleInfo' mt={2} gap={2}>
                                        <Typography component={"span"} variant='h6' fontFamily={fontStyle} className={support.className}>{support.number}</Typography>
                                        <Typography variant='h5' fontSize={{ xs: "21px", md: "24px" }} fontWeight={600} fontFamily={fontStyle}>{support.title}</Typography>
                                        <Typography variant='p' className='textDec'>{support.description}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={10} md={5} className="imgContainer">
                            <Stack direction={"row"} >
                                <Box component={"img"} src={View2} sx={{
                                    width: { xs: "50%", md: '100%' },
                                    height: { xs: "220px", md: "350px" },
                                    maxWidth: { xs: "130px", md: "270px" },
                                    borderRadius: '20rem',
                                    transform: { xs: "translate(10%, 40%)", md: "translate(-10%, 40%)" },
                                    zIndex: "2",
                                }} />
                                <Box component={"img"} src={View1} sx={{
                                    width: { xs: "50%", md: '100%' },
                                    height: { xs: "230px", md: "400px" },
                                    maxWidth: { xs: "170px", md: "300px" },
                                    borderRadius: '20rem',
                                    position: "absolute",
                                    transform: { xs: "translate(20%, 0%)", md: "translate(0%, 0%)" },
                                    zIndex: "1",
                                }} />
                                <Box component={"img"} src={View3} sx={{
                                    width: { xs: "50%", md: '100%' },
                                    height: { xs: "190px", md: "350px" },
                                    maxWidth: { xs: "130px", md: "250px" },
                                    borderRadius: '20rem',
                                    transform: { xs: "translate(30%, 60%)", md: "translate(10%, 50%)" },
                                    zIndex: "-1"
                                }} />
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box >
    )
}

export default Support