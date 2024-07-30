import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

const Info = () => {
    const infoCard = [
        {
            title: 'Book & Relax',
            description: 'You can also call airlines from your phone and book a flight ticket!',
            icon: <RxCalendar />,
            className: "infoIcon"
        },
        {
            title: 'Smart Checklist',
            description: 'You can also call airlines from your phone and book a flight ticket!',
            icon: <BsShieldCheck />,
            className: "infoIcon colorOne"
        },
        {
            title: 'Save More',
            description: 'You can also call airlines from your phone and book a flight ticket!',
            icon: <BsBookmarkCheck />,
            className: "infoIcon colorTwo"
        },
    ]


    return (
        <Box component={"section"} className='infoSec'>
            <Container maxWidth={"md"} className='infoCon'>
                <Stack className='infoText' direction={{ xs: "column", md: "row" }}>
                    <Typography variant='h4' width={{ xs: "100%", md: "50%" }} textAlign={{ xs: "center", md: "start" }}>Travel to make memories all around the world</Typography>
                    <Button className='btn'>View All</Button>
                </Stack>
                <Grid container className="cardCon" gap={1}>
                    {infoCard.map((card, index) => (
                        <Grid item sx={12} md={3.9}>
                            <Card key={index} className='singleCard'>
                                <CardContent>
                                    <Stack gap={3}>
                                        <Stack className={card.className}>
                                            {card.icon}
                                        </Stack>
                                        <Typography component={"span"} variant='h5' fontWeight={700} fontSize={"20px"}>{card.title}</Typography>
                                        <Typography variant='p' className={'textDec'}>{card.description}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Info