import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Input } from 'antd'
import React from 'react'

const Subscribers = () => {
    return (
        <Box component={"section"} className='subscribe' mt={3}>
            <Container maxWidth={"lg"} className='subSec'>
                <Typography variant='h4'>Subscribe Newletters & get Latest News</Typography>
                <form action="">
                    <Stack className='subInput' width={{ xs: "90%", md: "60%" }} mt={2} direction={{ xs: "column", md: "row" }}>
                        <Input type="text" placeholder='Enter your email address' />
                        <Button type='submit' className='btn'>Subscribe</Button>
                    </Stack>
                </form>
            </Container>
        </Box>
    )
}

export default Subscribers