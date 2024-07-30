import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import Input from "antd/es/input/Input"


const Search = () => {
    const searchBars = [
        {
            label: 'Location',
            icon: <HiOutlineLocationMarker />,
            placeholder: 'Where do you want to go?',
            type: 'text',
        },
        {
            label: 'Travelers',
            icon: <RiAccountPinCircleLine />,
            placeholder: 'Add guests',
            type: 'text',
        },
        {
            label: 'Check In',
            icon: <RxCalendar />,
            placeholder: 'Add date',
            type: 'text',
        },
        {
            label: 'Check Out',
            icon: <RxCalendar />,
            placeholder: 'Add date',
            type: 'text',
        },

    ]

    const sections = ["Economy", "Business Class", "First Class"]


    return (
        <Box>
            <Container maxWidth={"lg"} className='search section'>
                <Stack className='sectContainer'>
                    <Stack>
                        <Stack className='btns' borderRadius={{ xs: "1rem", md: "3rem" }} direction={{ xs: "column", md: "row" }}>
                            {sections.map((section, index) => (
                                <Button key={index} className='singleBtn' sx={{
                                    fontSize: { xs: "12px", md: "13px" }
                                }}>
                                    {section}
                                </Button>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack className="searchInputs" direction={{ xs: "column", md: "row" }}>
                        {searchBars.map((item, index) => (
                            <Stack key={index} className="singleInput flex">
                                <Stack className="icon">
                                    {item.icon}
                                </Stack>
                                <Stack className="texts">
                                    <Typography variant='h5'>{item.label}</Typography>
                                    <form action="">
                                        <Input className='inputStyles' type={item.type} placeholder={item.placeholder} />
                                    </form>
                                </Stack>
                            </Stack>
                        ))}
                        <Stack alignItems={"center"}>
                            <Button className='btn' sx={{
                                fontSize: "18px !important",
                                width: { xs: "200px", md: "275px" },
                                height: "2.5rem"
                            }}>Search Flight</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default Search