import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useShowLiveStats } from '../../../../../contexts/showLiveStatsContext';
import { getGameTime } from '../../../../../utils/getGameTime';
import { getWinner } from '../../../../../utils/getWinner';
import { useGameContext } from '../../GameContext';
import { useStyles } from './styles';
import FullDetailsTeamScore from './FullDetailsTeamScore';


export default function Matchup() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary} = useGameContext();
    const {showLiveStats} = useShowLiveStats();

    return (
      <Grid container alignItems='center'>

        {/* Home Team */}
        <Grid item xs={4}>
          <Box sx={styles.section}>
            <FullDetailsTeamScore 
                team={gameSummary.home}
                isWinner={getWinner(gameSummary, showLiveStats) === 'home'}
                alignScore={'right'}/>
          </Box>
        </Grid>

        {/* Game Time */}
        <Grid item xs={4}>
            <Box sx={styles.section} style={{flexDirection: 'column'}}>
              <Typography variant="h6">{'Final'}</Typography>
              <Typography variant="body1">{getGameTime()}</Typography>
            </Box>
        </Grid>

        {/* Away Team */}
        <Grid item xs={4}>
          <Box sx={styles.section}>
            <FullDetailsTeamScore 
                team={gameSummary.away} 
                isWinner={getWinner(gameSummary, showLiveStats) === 'away'}
                alignScore={'left'}/>
          </Box>
        </Grid>
      </Grid>
    );
}
