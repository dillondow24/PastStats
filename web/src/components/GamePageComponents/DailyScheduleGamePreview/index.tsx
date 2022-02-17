import {useEffect, useState} from 'react';
import {Avatar, Box, Divider, Typography} from '@mui/material';
import { SportRadarNBAGame } from '../../../model/sportradar/NBAGame';
import { useTheme } from '@mui/material';
import { useStyles } from './styles';
import { getTeamLogo } from '../../../utils/getTeamLogo';
import moment from 'moment';
import { getGameDay } from '../../../utils/getGameDay';
import { getGameTime } from '../../../utils/getGameTime';
import { MOCK_GAME_SUMMARY } from '../../../model/sportradar/MOCKS';
import { toOrdinalSuffix } from '../../../utils/toOrdinalSuffix';
import { API } from '../../../api';
import { LoadingDailySchedulePreview } from './LoadingDailySchedulePreview';
import { useShowLiveStats } from '../../../contexts/showLiveStatsContext';

interface Props {
  game?: SportRadarNBAGame;
  selected: boolean;
  onClick: () => void;
  index: number
}


export function DailyScheduleGamePreview({game, selected, onClick, index}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);
    const {showLiveStats} = useShowLiveStats();

    const [gameSummary, setGameSummary] = useState<any | null>(null);
    const [loadingGameSummary, setLoadingGameSummary] = useState(true);

    /** 
     * TODO:
     * remove timeout
     * timeout is here because sportsradar only allows 1 call per second
     */
    useEffect(() => {
      const setup = async () => {
          if (!game) return
          setTimeout(async () => {
            try {
              const newGameSummary = await API.SportRadarAPI.getGameSummary(game.id)
              setGameSummary(newGameSummary);
            } finally {
              setLoadingGameSummary(false);
            }
          }, (index * 1000) + 500)
      }
      setup()
    }, [])

    const LOGO_SIZE = 40

    const isLive = game?.status === 'inprogress'
    const isHalf = gameSummary?.status === 'halftime'


    const selectedStyles = {
      border: `1px solid ${theme.palette.primary.main}`,
    }

    const getWinner = () => {
      if (!game || game.status !== 'closed' || !showLiveStats) return 'none';
      return game.home_points > game.away_points ? 'home' : 'away'; 
    }

    const getTeamRecord = (teamId: string) => {
      //TODO: make api call to get team data (including record) from sportradar and store in recoil state
      return '(32-27)'
    }

    const getScoreOrRecord = (team: 'home' | 'away') => {
      if(!game) return '-';
      const isHome = team === 'home';
      if (game.status === 'scheduled'){
        return getTeamRecord(isHome ? game.home.id : game.away.id);
      } else if (game.status === 'inprogress') {
        return gameSummary && showLiveStats ? isHome ? gameSummary.home.points : gameSummary.away.points : '-';
      } else {
        return showLiveStats ? isHome ? game.home_points : game.away_points : '-';
      }
    }


    if(!game || loadingGameSummary){
      return <LoadingDailySchedulePreview />
    }

    return (
      <Box sx={styles.root} onClick={onClick} style={selected ? selectedStyles : undefined}>
        <Box sx={{...styles.container, pb: 1}} style={{justifyContent: 'space-between'}}>
          <Typography variant="caption" color={isLive ? 'error' : 'textSecondary'}>
            <b>{game ? 
                isLive ? 
                  'Live' 
                  : getGameDay(game.scheduled) 
                : ''}
                </b>
          </Typography>
          <Typography variant="caption" color='textSecondary'>
            <b>{game ? 
                isLive && showLiveStats ? 
                  isHalf ? 
                    'Half' 
                    : `${toOrdinalSuffix(gameSummary ? gameSummary.quarter : 1)} ${gameSummary ? gameSummary.clock : '12:00'}` 
                  : getGameTime(game.scheduled, ['complete', 'closed'].includes(game.status)) 
                : '-:--'}</b>
            </Typography>
        </Box>

        {/* Home Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Box sx={{mr: 1, mb: -1}}>{getTeamLogo(game.home.id, LOGO_SIZE)}</Box>
            <Typography>{game.home.alias}</Typography>
          </Box>
          <Typography color={getWinner() === 'away' ? 'textSecondary' : undefined}><b>{getScoreOrRecord('home')}</b></Typography>
        </Box>
          
        <Divider sx={{my: 1}}/>


        {/* Away Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Box sx={{mr: 1, mb: -1}}>{getTeamLogo(game.away.id, LOGO_SIZE)}</Box>
            <Typography>{game.away.alias}</Typography>
          </Box>
          <Typography color={getWinner() === 'home' ? 'textSecondary' : undefined}><b>{getScoreOrRecord('away')}</b></Typography>
        </Box>
      </Box>
    );
}
