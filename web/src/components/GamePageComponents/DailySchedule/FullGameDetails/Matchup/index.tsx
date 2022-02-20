import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useShowLiveStats } from '../../../../../contexts/showLiveStatsContext';
import { getWinner } from '../../../../../utils/getWinner';
import { useGameContext } from '../../GameContext';
import { useStyles } from './styles';
import FullDetailsTeamScore from './FullDetailsTeamScore';
import { getGameTimeLabel } from '../../../../../utils/getGameTimeLabel';
import { getGameDay } from '../../../../../utils/getGameDay';
import MatchupGameTimeInfo from './MatchupGameTimeInfo';


export default function Matchup() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary} = useGameContext();
    const {showLiveStats} = useShowLiveStats();


    const isLive = gameSummary.status === 'inprogress'
    const isFinal = ['completed', 'closed'].includes(gameSummary.status)

    return (
      <Grid container alignItems='center'>

        {/* Home Team */}
        <Grid item xs={4}>
          <Box sx={styles.section}>
            <FullDetailsTeamScore 
                team={gameSummary.home}
                isLoser={getWinner(gameSummary, showLiveStats) === 'away'}
                alignScore={'right'}/>
          </Box>
        </Grid>

        {/* Game Time */}
        <Grid item xs={4}>
          <Box sx={styles.section}>
            <MatchupGameTimeInfo type={isLive ? 'Live' : isFinal ? 'Final' : 'Scheduled'}/>
          </Box>
        </Grid>

        {/* Away Team */}
        <Grid item xs={4}>
          <Box sx={styles.section}>
            <FullDetailsTeamScore 
                team={gameSummary.away} 
                isLoser={getWinner(gameSummary, showLiveStats) === 'home'}
                alignScore={'left'}/>
          </Box>
        </Grid>
      </Grid>
    );
}
