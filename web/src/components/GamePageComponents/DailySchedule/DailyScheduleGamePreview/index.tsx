import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useShowLiveStats } from '../../../../contexts/showLiveStatsContext';
import { GameSummary } from '../../../../model/sportradar/models/GameSummary';
import { getGameDay } from '../../../../utils/getGameDay';
import { getGameTimeLabel } from '../../../../utils/getGameTimeLabel';
import { getWinner } from '../../../../utils/getWinner';
import { PreviewTeamScore } from './PreviewTeamScore';
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
    
    const isLive = gameSummary.status === 'inprogress'
    const isFinal = ['completed', 'closed'].includes(gameSummary.status)

    const selectedStyles = {
      border: `1px solid ${theme.palette.primary.main}`,
    }

    return (
      <Box sx={styles.root} onClick={onClick} style={selected ? selectedStyles : undefined}>

        {/* Game Time */}
        <Box sx={{...styles.container, pb: 1}} style={{justifyContent: 'space-between'}}>
          <Typography variant="caption" color={isLive ? 'error' : 'textSecondary'}>
            <b>{isFinal ? '' : isLive ? 'Live' : getGameDay(gameSummary.scheduled) }</b>
          </Typography>
          <Typography variant="caption" color='textSecondary'>
            <b>{getGameTimeLabel(showLiveStats, gameSummary)}</b>
          </Typography>
        </Box>

        {/* Home Team */}
        <PreviewTeamScore 
          team={gameSummary.home}
          isWinner={getWinner(gameSummary, showLiveStats) === 'home'}
          showRecord={gameSummary.status === 'scheduled'}
          />
        <Divider sx={{my: 1}}/>


        {/* Away Team */}
        <PreviewTeamScore 
          team={gameSummary.away}
          isWinner={getWinner(gameSummary, showLiveStats) === 'away'}
          showRecord={gameSummary.status === 'scheduled'}
          />
      </Box>
    );
}

