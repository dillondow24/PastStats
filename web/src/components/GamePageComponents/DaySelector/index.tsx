import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';
import { SportRadarNBAGame } from '../../../model/sportradar/NBAGame';
import { getGameDay } from '../../../utils/getGameDay';
import { useStyles } from './styles';

interface Props {
  activeDate: string;
  onChangeActiveDate: (date: string) => void;
}

export default function DaySelector({activeDate, onChangeActiveDate}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const [previousDay, setPreviousDay] = useState(moment(activeDate).add(-1, 'days'));
    const [activeDay, setActiveDay] = useState(moment(activeDate));
    const [nextDay, setNextDay] = useState(moment(activeDate).add(1, 'days'),);

    const [games, setGames] = useState<SportRadarNBAGame[]>([]);


    const handleDayChange = (dayChangeValue: -1 | 1) => {      
      setPreviousDay((cur) => moment(cur).add(dayChangeValue, 'days'));
      setActiveDay((cur) => {
        const newActiveDay = moment(cur).add(dayChangeValue, 'days')
        onChangeActiveDate(newActiveDay.toISOString());
        return newActiveDay;
      });
      setNextDay((cur) => moment(cur).add(dayChangeValue, 'days'));
    }


    return (
      <Box sx={styles.root}>
        <Box sx={styles.buttonContainer}>
          <IconButton onClick={() => handleDayChange(-1)}>
            <ChevronLeft/>
          </IconButton>
        </Box>
        
        <Box>
          <Button color='inherit' onClick={() => handleDayChange(-1)}>
            <Typography color='textSecondary' variant="body1">
              {getGameDay(previousDay)}
            </Typography>
          </Button>

          <Button variant='outlined' sx={{mx: 2}}>
            <Typography variant="body1">
              {getGameDay(activeDay)}
            </Typography>
          </Button>

          <Button color='inherit' onClick={() => handleDayChange(1)}>
            <Typography color='textSecondary' variant="body1">
              {getGameDay(nextDay)}
            </Typography>
          </Button>
        </Box>

        <Box sx={styles.buttonContainer}>
          <IconButton onClick={() => handleDayChange(1)}>
            <ChevronRight />
          </IconButton>
        </Box>

      </Box>
    );
}
