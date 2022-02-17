import { Grid, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';
import DailySchedule from '../../components/GamePageComponents/DailySchedule';
import DaySelector from '../../components/GamePageComponents/DaySelector';
import { useStyles } from './styles';

export default function Games() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const [activeDay, setActiveDay] = useState(moment().toISOString());

    const year = moment(activeDay).year();
    const month = moment(activeDay).month() + 1;
    const day = moment(activeDay).date();

    return (
        <Grid container spacing={1}>

            <Grid item xs={12}>
                <DaySelector activeDate={activeDay} onChangeActiveDate={(newDate) => setActiveDay(newDate)}/>
            </Grid>

            <Grid item xs={12}>
                <DailySchedule year={year} month={month} day={day} />
            </Grid>
            
        </Grid>
    )
}
