import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, CssBaseline, useTheme } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Games from './routes/Games';
import Profile from './routes/Profile';
import Teams from './routes/Teams';

function App() {
  const theme = useTheme();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth='lg'>
        <Box sx={{ mt: 1, minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Games />} />
            <Route path="Games" element={<Games />} />
            <Route path="Teams" element={<Teams />} />
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
