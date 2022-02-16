import * as React from 'react';
import {Avatar, Box, Divider, Typography} from '@mui/material';
import { SportRadarNBAGame } from '../../model/sportradar/NBAGame';
import { useTheme } from '@mui/material';
import { useStyles } from './styles';
import { NBATeamMetadata } from '../../utils/getNBATeamMetadata';
import moment from 'moment';

interface Props {
  game: SportRadarNBAGame;
  selected: boolean;
  onClick: () => void;
}


export function DailyScheduleGamePreview({game, selected, onClick}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const LOGO_SIZE = 30

    console.log('game: ', game)
    //@ts-ignore
    const homeTeam = NBATeamMetadata[game.home.id];
    //@ts-ignore
    const awayTeam = NBATeamMetadata[game.away.id];

    const selectedStyles = {
      border: `1px solid ${theme.palette.primary.main}`,
    }

    
    const getGameDay = () => {
      const tipoff = moment(game.scheduled)
      const yesterday = moment().add(-1, 'days')
      const today = moment()
      const tomorrow = moment().add(1, 'day')
      if(tipoff.isSame(yesterday, 'day')) {
        return 'Yesterday'
      } else if(tipoff.isSame(today, 'day')) {
        return 'Today'
      } else if(tipoff.isSame(tomorrow, 'day')) {
        return 'Tomorrow'
      } else {
         return tipoff.format('ddd, MMM D')
      }
    }
    
    const getGameTime = () => {
      switch (game.status){
        case 'closed':
          return 'Final'
        default:
          const scheduled = moment(game.scheduled)
          return scheduled.format('h:mm a')
      }
    }

    return (
      <Box sx={styles.root} onClick={onClick} style={selected ? selectedStyles : undefined}>
        <Box sx={{...styles.container, pb: 1}} style={{justifyContent: 'space-between'}}>
          <Typography variant="caption" color='textSecondary'><b>{getGameDay()}</b></Typography>
          <Typography variant="caption" color='textSecondary'><b>{getGameTime()}</b></Typography>
        </Box>

        {/* Home Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Avatar variant='rounded' src={homeTeam.logo} alt={homeTeam.name} sx={{ width: LOGO_SIZE, height: LOGO_SIZE, mr: 1}}/>
            <Typography>{homeTeam.name}</Typography>
          </Box>
          <Typography><b>{game.home_points}</b></Typography>
        </Box>
          
        <Divider sx={{my: 1}}/>


        {/* Away Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Avatar variant='rounded' src={awayTeam.logo} alt={awayTeam.name} sx={{ width: LOGO_SIZE, height: LOGO_SIZE, mr: 1}}/>
            <Typography>{awayTeam.name}</Typography>
          </Box>
          <Typography><b>{game.away_points}</b></Typography>
        </Box>
      </Box>
    );
}
