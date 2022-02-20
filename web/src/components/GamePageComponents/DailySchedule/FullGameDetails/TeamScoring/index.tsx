import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, useTheme, Box } from '@mui/material';
import { useState } from 'react';
import { useShowLiveStats } from '../../../../../contexts/showLiveStatsContext';
import { GameSummaryTeamInfo } from '../../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryTeamInfo';
import { getTeamLogo } from '../../../../../utils/getTeamLogo';
import { toOrdinalSuffix } from '../../../../../utils/toOrdinalSuffix';
import { useGameContext } from '../../GameContext';
import { useStyles } from './styles';


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TeamScoring() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary, dailyScheduleGame, isScheduled} = useGameContext();
    const {showLiveStats} = useShowLiveStats();

    const LOGO_SIZE = 40


    const hideScore = !showLiveStats || isScheduled

    const renderTeamRow = (team: GameSummaryTeamInfo) => {
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
              <TableCell>Team</TableCell>
              {gameSummary.home.scoring.map((score, index) => (
                <TableCell align="center" sx={styles.tableCell}><b>{toOrdinalSuffix(score.number)}</b></TableCell>
              ))}
              <TableCell align="center" sx={styles.tableCell}><b>TOT</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {renderTeamRow(gameSummary.home)}
            </TableRow>
            <TableRow>
              {renderTeamRow(gameSummary.away)}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
}

