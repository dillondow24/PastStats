import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Home() {
  return (
    <React.Fragment>
        <Header/>
        <Box>
            <Typography variant='h1'>Home</Typography>
        </Box>
        <Footer />
    </React.Fragment>
  )
}
