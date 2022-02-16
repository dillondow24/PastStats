import { Grid, useTheme } from '@mui/material';
import React from 'react'
import DailySchedule from '../../components/DailySchedule';
import FullGameDetails from '../../components/FullGameDetails';
import { useStyles } from './styles';

export default function Games() {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <DailySchedule year={2022} month={1} day={5} />
            </Grid>
            
        </Grid>
    )
}
