import { Fab, useTheme, Typography, Tooltip } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';
import SportsIcon from '@mui/icons-material/Sports';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface ShowLiveStatsInterface {
    showLiveStats: boolean;
}


const ShowLiveStats = createContext<ShowLiveStatsInterface>({
    showLiveStats: false,
});
export const useShowLiveStats = () => useContext(ShowLiveStats);


export const ShowLiveStatsProvider = ({children}: any) => {
  const theme = useTheme();
  const [showLiveStats, setShowLiveStats] = useState(false);

  return (
    <ShowLiveStats.Provider value={{showLiveStats}}>
      {children}
      <Tooltip title="Toggle Visibility of Game Stats">
        <Fab 
          color={showLiveStats ? 'secondary' : 'primary'} 
          sx={{position: 'fixed', bottom: theme.spacing(15), right: theme.spacing(5)}} 
          onClick={() => setShowLiveStats((prev) => !prev)}>
          {showLiveStats ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </Fab>
      </Tooltip>
    </ShowLiveStats.Provider>
  );
};