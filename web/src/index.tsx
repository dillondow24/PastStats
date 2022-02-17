import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { theme } from './theme/theme';
import { ThemeProvider } from '@mui/material';
import { UserContextProvider } from './contexts/userContext';
import { ShowLiveStatsProvider } from './contexts/showLiveStatsContext';

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
