import { useTheme } from '@mui/material';
import { useState } from 'react';
import { useStyles } from '../styles';


export default function GameDetails() {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
      <div>
        Game Details
      </div>
    );
}
