import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Paris from "../../assets/paris.jpg"
import NYC from "../../assets/NYC.jpg"
import London from "../../assets/london.jpg"
import Dubai from "../../assets/dubai.jpg"
import User1 from "../../assets/user2.jpg"
import User2 from "../../assets/user1.jpg"
import User3 from "../../assets/user3.jpg"
import User4 from "../../assets/user4.jpg"
import { primaryColor } from '../../../utils/colors'

const Travelers = () => {
    const travelContent = [
        {
            travelerImg: User1,
            travelImg: Paris,
            name: "IsraTech",
            username: "@isratech8"
        },
        {
            travelerImg: User2,
            travelImg: NYC,
            name: "Wilson Lindsey",
            username: "@wilsonlindsey"
        },
        {
            travelerImg: User3,
            travelImg: London,
            name: "Nicole Web",
            username: "@nicoleweb"
        },
        {
            travelerImg: User4,
            travelImg: Dubai,
            name: "Naresh Lamer",
            username: "@nareshlamer"
        },
    ]

    return (
        <Box component={"section"} className='section'>
            <Container maxWidth={"lg"} sx={{ textAlign: "center" }}>
                <Typography variant='h4'>Top travelers of this month</Typography>
                <Grid container className="travelCon" >
                    {travelContent.map((content, i) => (
                        <Grid item xs={8} md={2.2} key={i} className="singleTravel" spacing={1} >
                            <img src={content.travelImg} className='travelImg' alt="" />
                            <Stack className='travelDetails'>
                                <Stack className='travelPic'>
                                    <img src={content.travelerImg} className='travelerImg' />
                                </Stack>
                                <Stack className='travelName'>
                                    <Typography component={"span"}>{content.name}</Typography>
                                    <Typography variant='p' color={primaryColor}>{content.username}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Travelers