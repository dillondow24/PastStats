import { Fab, useTheme, Typography, Tooltip } from '@mui/material';
import React, { createContext, useContext, useEffect, useState } from 'react';
import SportsIcon from '@mui/icons-material/Sports';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import pThrottle from 'p-throttle';



interface ThrottleAPIInterface {
  throttle: (callback: () => void) => void
}

const ThrottleAPI = createContext<ThrottleAPIInterface>({
    throttle: (callback: () => void) => {}
});

export const useThrottleAPI = () => useContext(ThrottleAPI);

export const ThrottleAPIProvider = ({children}: any) => {
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState(new Date().valueOf() - 10000);

  const throttle = async (callback: () => any): Promise<any> => {
    const now = new Date().valueOf();
    const diff = now - lastFetchTimestamp;
    if(diff < 10000) { // wait 1 second before executing
      // setTimeout(() => {
      //   setLastFetchTimestamp(now);
      //   callback();
      // }, 1100);
    } else { // has been more than 1 second, so execute
      setLastFetchTimestamp(now); // set the last fetch timestamp
      callback();
    }
  }

  return (
    <ThrottleAPI.Provider value={{throttle}}>
      {children}
    </ThrottleAPI.Provider>
  );
};