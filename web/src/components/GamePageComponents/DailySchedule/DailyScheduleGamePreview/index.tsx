import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useShowLiveStats } from '../../../../contexts/showLiveStatsContext';
import { GameSummary } from '../../../../model/sportradar/models/GameSummary';
import { GameSummaryTeamInfo } from '../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryTeamInfo';
import { getGameDay } from '../../../../utils/getGameDay';
import { getGameTime } from '../../../../utils/getGameTime';
import { getTeamLogo } from '../../../../utils/getTeamLogo';
import { toOrdinalSuffix } from '../../../../utils/toOrdinalSuffix';
import { useStyles } from './styles';

interface Props {
  gameSummary: GameSummary;
  selected: boolean;
  onClick: () => void;
}

export function DailyScheduleGamePreview({gameSummary, selected, onClick}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);
    const {showLiveStats} = useShowLiveStats();

    const LOGO_SIZE = 40
    const isLive = gameSummary.status === 'inprogress'
    const isHalf = gameSummary.status === 'halftime'


    const selectedStyles = {
      border: `1px solid ${theme.palette.primary.main}`,
    }

    const getWinner = () => {
      if (gameSummary.status !== 'closed' || !showLiveStats) return 'none';
      return gameSummary.home.points > gameSummary.away.points ? 'home' : 'away'; 
    }

    const getTeamRecord = (teamId: string) => {
      //TODO: make api call to get team data (including record) from sportradar and store in recoil state
      return '(32-27)'
    }

    const getScoreOrRecord = (team: GameSummaryTeamInfo) => {
      if (gameSummary.status === 'scheduled'){
        return getTeamRecord(team.id );
      } else {
        return showLiveStats ? team.points : '-';
      }
    }

    const getGameTimeLabel = () => {
      if(!isLive || !showLiveStats) return getGameTime(gameSummary.scheduled, ['complete', 'closed'].includes(gameSummary.status));
      if(isHalf) return 'Half';
      return `${toOrdinalSuffix(gameSummary.quarter)} ${gameSummary.clock}`;
    }

    return (
      <Box sx={styles.root} onClick={onClick} style={selected ? selectedStyles : undefined}>
        <Box sx={{...styles.container, pb: 1}} style={{justifyContent: 'space-between'}}>
          <Typography variant="caption" color={isLive ? 'error' : 'textSecondary'}>
            <b>{isLive ? 'Live' : getGameDay(gameSummary.scheduled) }</b>
          </Typography>
          <Typography variant="caption" color='textSecondary'>
            <b>{getGameTimeLabel()}</b>
          </Typography>
        </Box>

        {/* Home Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Box sx={{mr: 1, mb: -1}}>{getTeamLogo(gameSummary.home.id, LOGO_SIZE)}</Box>
            <Typography>{gameSummary.home.alias}</Typography>
          </Box>
          <Typography color={getWinner() === 'away' ? 'textSecondary' : undefined}><b>{getScoreOrRecord(gameSummary.home)}</b></Typography>
        </Box>
          
        <Divider sx={{my: 1}}/>


        {/* Away Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Box sx={{mr: 1, mb: -1}}>{getTeamLogo(gameSummary.away.id, LOGO_SIZE)}</Box>
            <Typography>{gameSummary.away.alias}</Typography>
          </Box>
          <Typography color={getWinner() === 'home' ? 'textSecondary' : undefined}><b>{getScoreOrRecord(gameSummary.away)}</b></Typography>
        </Box>
      </Box>
    );
}
