import {useEffect, useState} from 'react';
import {Avatar, Box, Divider, Typography} from '@mui/material';
import { useTheme } from '@mui/material';
import { useStyles } from './styles';
import { getTeamLogo } from '../../../utils/getTeamLogo';
import moment from 'moment';
import { getGameDay } from '../../../utils/getGameDay';
import { getGameTime } from '../../../utils/getGameTime';
import { toOrdinalSuffix } from '../../../utils/toOrdinalSuffix';
import { API } from '../../../api';
import { LoadingDailySchedulePreview } from './LoadingDailySchedulePreview';
import { useShowLiveStats } from '../../../contexts/showLiveStatsContext';
import { useThrottleAPI } from '../../../contexts/throttleAPI';
import { DailyScheduleGame } from '../../../model/sportradar/models/DailySchedule/Interfaces/DailyScheduleGame';

interface Props {
  dailyScheduleGame?: DailyScheduleGame;
  selected: boolean;
  onClick: () => void;
  index: number
}


export function DailyScheduleGamePreview({dailyScheduleGame, selected, onClick, index}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);
    const {showLiveStats} = useShowLiveStats();
    const {throttle} = useThrottleAPI();
    const [gameSummary, setGameSummary] = useState<any | null>(null);
    const [loadingGameSummary, setLoadingGameSummary] = useState(true);

    /** 
     * TODO:
     * remove timeout
     * timeout is here because sportsradar only allows 1 call per second
     */
    useEffect(() => {
      const setup = async () => {
          if (!dailyScheduleGame) return
          throttle(async () => {
            try {
              const newGameSummary = await API.SportRadarAPI.getGameSummary(dailyScheduleGame.id)
              setGameSummary(newGameSummary);
            } finally {
              setLoadingGameSummary(false);
            }
          })
      }
      setup()
    }, [])

    const LOGO_SIZE = 40

    const isLive = dailyScheduleGame?.status === 'inprogress'
    const isHalf = gameSummary?.status === 'halftime'


    const selectedStyles = {
      border: `1px solid ${theme.palette.primary.main}`,
    }

    const getWinner = () => {
      if (!dailyScheduleGame || dailyScheduleGame.status !== 'closed' || !showLiveStats) return 'none';
      return dailyScheduleGame.home_points > dailyScheduleGame.away_points ? 'home' : 'away'; 
    }

    const getTeamRecord = (teamId: string) => {
      //TODO: make api call to get team data (including record) from sportradar and store in recoil state
      return '(32-27)'
    }

    const getScoreOrRecord = (team: 'home' | 'away') => {
      if(!dailyScheduleGame) return '-';
      const isHome = team === 'home';
      if (dailyScheduleGame.status === 'scheduled'){
        return getTeamRecord(isHome ? dailyScheduleGame.home.id : dailyScheduleGame.away.id);
      } else if (dailyScheduleGame.status === 'inprogress') {
        return gameSummary && showLiveStats ? isHome ? gameSummary.home.points : gameSummary.away.points : '-';
      } else {
        return showLiveStats ? isHome ? dailyScheduleGame.home_points : dailyScheduleGame.away_points : '-';
      }
    }


    if(!dailyScheduleGame || loadingGameSummary){
      return <LoadingDailySchedulePreview />
    }

    return (
      <Box sx={styles.root} onClick={onClick} style={selected ? selectedStyles : undefined}>
        <Box sx={{...styles.container, pb: 1}} style={{justifyContent: 'space-between'}}>
          <Typography variant="caption" color={isLive ? 'error' : 'textSecondary'}>
            <b>{dailyScheduleGame ? 
                isLive ? 
                  'Live' 
                  : getGameDay(dailyScheduleGame.scheduled) 
                : ''}
                </b>
          </Typography>
          <Typography variant="caption" color='textSecondary'>
            <b>{dailyScheduleGame ? 
                isLive && showLiveStats ? 
                  isHalf ? 
                    'Half' 
                    : `${toOrdinalSuffix(gameSummary ? gameSummary.quarter : 1)} ${gameSummary ? gameSummary.clock : '12:00'}` 
                  : getGameTime(dailyScheduleGame.scheduled, ['complete', 'closed'].includes(dailyScheduleGame.status)) 
                : '-:--'}</b>
            </Typography>
        </Box>

        {/* Home Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Box sx={{mr: 1, mb: -1}}>{getTeamLogo(dailyScheduleGame.home.id, LOGO_SIZE)}</Box>
            <Typography>{dailyScheduleGame.home.alias}</Typography>
          </Box>
          <Typography color={getWinner() === 'away' ? 'textSecondary' : undefined}><b>{getScoreOrRecord('home')}</b></Typography>
        </Box>
          
        <Divider sx={{my: 1}}/>


        {/* Away Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Box sx={{mr: 1, mb: -1}}>{getTeamLogo(dailyScheduleGame.away.id, LOGO_SIZE)}</Box>
            <Typography>{dailyScheduleGame.away.alias}</Typography>
          </Box>
          <Typography color={getWinner() === 'home' ? 'textSecondary' : undefined}><b>{getScoreOrRecord('away')}</b></Typography>
        </Box>
      </Box>
    );
}
