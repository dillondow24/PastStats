import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Games from './routes/Games';
import Login from './routes/Login';
import Profile from './routes/Profile';
import SignUp from './routes/SignUp';
import Teams from './routes/Teams';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container fixed >
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="Games" element={<Games />} />
          <Route path="Teams" element={<Teams />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
