import { useTheme } from '@mui/material';
import React from 'react'
import { useStyles } from './styles';

export default function Profile() {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <div>Profile</div>
    )
}
