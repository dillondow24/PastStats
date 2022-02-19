import { Tab, Tabs, useTheme } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { getGameDay } from '../../../utils/getGameDay';
import { useStyles } from './styles';

interface Props {
  activeDate: string;
  onChangeActiveDate: (date: string) => void;
}

export default function DaySelector({activeDate, onChangeActiveDate}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);
    
    const today = moment()
    const previousDays = new Array(7).fill(null).map((_, index) => moment(today).add(-(index + 1), 'days'))
    const nextDays = new Array(7).fill(null).map((_, index) => moment(today).add(index + 1, 'days'))
    const days = [...(previousDays.reverse()), today, ...nextDays]

    return (
      <Tabs
        value={days.findIndex(day => day.isSame(moment(activeDate), 'day'))}
        onChange={(event: any, newValue: number) => onChangeActiveDate(days[newValue].toISOString())}
        variant="scrollable"
        scrollButtons="auto"        
        aria-label="scrollable auto tabs example"
        sx={styles.tabs}
      >         
        {days.map((day, index) => (
          <Tab label={getGameDay(day.toISOString())} key={index} />
        ))}
      </Tabs>
    );
}