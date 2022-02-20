import { useTheme } from '@mui/material';
import { useState } from 'react';
import { useStyles } from '../styles';


export default function PlayerStats() {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
      <div>
        Player Stats
      </div>
    );
}
