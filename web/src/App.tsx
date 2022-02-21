import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, CssBaseline, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Games from './routes/Games';
import Profile from './routes/Profile';
import Standings from './routes/Standings';
import Teams from './routes/Teams';

function App() {
  const theme = useTheme();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>

        <Box sx={{display: 'flex'}}>
          <Header/>
        </Box>

        <Box sx={{display: 'flex', flex: 1}}>
          <Container maxWidth='md'>
            <Box sx={{ mt: '70px', pb: 2}}>
              <Routes>
                <Route path="/" element={<Games />} />
                <Route path="Games" element={<Games />} />
                <Route path="Teams" element={<Teams />} />
                <Route path="Standings" element={<Standings />} />
                <Route path="Profile" element={<Profile />} />
              </Routes>
            </Box>
          </Container>
        </Box>

        <Box sx={{display: 'flex'}}>
          <Footer/>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
