import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { ShowLiveStatsProvider } from './contexts/showLiveStatsContext';
import { UserContextProvider } from './contexts/userContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme/theme';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <ShowLiveStatsProvider>
          <App />
        </ShowLiveStatsProvider>
      </UserContextProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
