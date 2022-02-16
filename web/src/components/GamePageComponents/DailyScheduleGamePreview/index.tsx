import * as React from 'react';
import {Avatar, Box, Divider, Typography} from '@mui/material';
import { SportRadarNBAGame } from '../../../model/sportradar/NBAGame';
import { useTheme } from '@mui/material';
import { useStyles } from './styles';
import { NBATeamMetadata } from '../../../utils/getNBATeamMetadata';
import moment from 'moment';
import { getGameDay } from '../../../utils/getGameDay';
import { getGameTime } from '../../../utils/getGameTime';

interface Props {
  game?: SportRadarNBAGame;
  selected: boolean;
  onClick: () => void;
}


export function DailyScheduleGamePreview({game, selected, onClick}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const LOGO_SIZE = 30

    //@ts-ignore
    const homeTeam = game ? NBATeamMetadata[game.home.id] : {logo: '', name: 'Home'};
    //@ts-ignore
    const awayTeam = game ? NBATeamMetadata[game.away.id] : {logo: '', name: 'Away'};

    const selectedStyles = {
      border: `1px solid ${theme.palette.primary.main}`,
    }

    const getWinner = () => {
      if (!game || game.status !== 'closed') return 'none';
      return game.home_points > game.away_points ? 'home' : 'away'; 
    }

    const getTeamRecord = (teamId: string) => {
      //TODO: make api call to get record from sportradar and store in recoil state
      return '(32-27)'
    }

    const getScoreOrRecord = (team: 'home' | ' away') => {
      if(!game) return '-';
      const isHome = team === 'home';
      if (game.status === 'scheduled'){
        return getTeamRecord(isHome ? game.home.id : game.away.id);
      } else {
        return isHome ? game.home_points : game.away_points;
      }
    }

    return (
      <Box sx={styles.root} onClick={onClick} style={selected ? selectedStyles : undefined}>
        <Box sx={{...styles.container, pb: 1}} style={{justifyContent: 'space-between'}}>
          <Typography variant="caption" color='textSecondary'><b>{game ? getGameDay(game.scheduled) : ''}</b></Typography>
          <Typography variant="caption" color='textSecondary'><b>{game ? getGameTime(game.scheduled, game.status === 'closed') : '-:--'}</b></Typography>
        </Box>

        {/* Home Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Avatar variant='rounded' src={homeTeam.logo} alt={homeTeam.name} sx={{ width: LOGO_SIZE, height: LOGO_SIZE, mr: 1}}/>
            <Typography>{homeTeam.name}</Typography>
          </Box>
          <Typography color={getWinner() === 'away' ? 'textSecondary' : undefined}><b>{getScoreOrRecord('home')}</b></Typography>
        </Box>
          
        <Divider sx={{my: 1}}/>


        {/* Away Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Avatar variant='rounded' src={awayTeam.logo} alt={awayTeam.name} sx={{ width: LOGO_SIZE, height: LOGO_SIZE, mr: 1}}/>
            <Typography>{awayTeam.name}</Typography>
          </Box>
          <Typography color={getWinner() === 'home' ? 'textSecondary' : undefined}><b>{getScoreOrRecord('home')}</b></Typography>
        </Box>
      </Box>
    );
}
