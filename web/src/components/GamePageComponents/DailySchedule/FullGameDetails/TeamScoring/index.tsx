import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { useShowLiveStats } from '../../../../../contexts/showLiveStatsContext';
import { GameSummaryTeamInfo } from '../../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryTeamInfo';
import { PastStatsTeamInfo } from '../../../../../model/sportradar/models/PastStatsStatistics/interfaces/PastStatsTeamInfo';
import { getTeamLogo } from '../../../../../utils/getTeamLogo';
import { toOrdinalSuffix } from '../../../../../utils/toOrdinalSuffix';
import { useGameContext } from '../../GameContext';
import { useStyles } from './styles';


export default function TeamScoring() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary, isScheduled, showPastStats, pastStats} = useGameContext();
    const {showLiveStats} = useShowLiveStats();

    const LOGO_SIZE = 40
    const hideScore = (!showLiveStats || isScheduled) && !showPastStats

    const renderTeamRow = (team?: GameSummaryTeamInfo | PastStatsTeamInfo) => {
      if(!team) return
      return (
        <>
          <TableCell component="th" scope="row">
            <Box sx={styles.nameContainer}>
              <Box sx={styles.teamLogo}>{getTeamLogo(team.id, LOGO_SIZE)}</Box>
              {team.name}
            </Box>
          </TableCell>
          {team.scoring.map((quarter, index) => (
            <TableCell align="center" sx={styles.tableCell}>{hideScore ? '-' : quarter.points}</TableCell>
          ))}
          <TableCell align="center" sx={styles.tableCell}>{hideScore ? '-' : team.points}</TableCell>
        </>
      )
    }
    
    return (
      <TableContainer sx={styles.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant='h5'><b>Scoring</b></Typography></TableCell>
              {gameSummary.home.scoring.map((score, index) => (
                <TableCell align="center" sx={styles.tableCell}><b>{toOrdinalSuffix(score.number)}</b></TableCell>
              ))}
              <TableCell align="center" sx={styles.tableCell}><b>TOT</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {renderTeamRow(showPastStats ? pastStats?.home : gameSummary.home)}
            </TableRow>
            <TableRow>
              {renderTeamRow(showPastStats ? pastStats?.away : gameSummary.away)}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
}

