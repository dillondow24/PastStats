import { useTheme } from '@mui/material';
import { useState } from 'react';
import { useStyles } from '../styles';


export default function Matchup() {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
      <div>
        Matchup
      </div>
    );
}
