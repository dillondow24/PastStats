import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageContent from './components/PageContent';
import SignUp from './routes/SignUp';
import Home from './routes/Home';
import Login from './routes/Login';
import { Box, Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container fixed >
        <Routes>
          <Route path="/" element={<Home />} />
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
