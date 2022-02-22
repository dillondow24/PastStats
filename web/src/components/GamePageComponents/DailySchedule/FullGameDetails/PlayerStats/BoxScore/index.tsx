import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { useShowLiveStats } from '../../../../../../contexts/showLiveStatsContext';
import { GameSummaryPlayer, GameSummaryPlayersStatistics } from '../../../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryPlayer';
import { PastStatsPlayerStatistics } from '../../../../../../model/sportradar/models/PastStatsStatistics/interfaces/PastStatsPlayerStatistics';
import { useGameContext } from '../../../GameContext';
import { useStyles } from './styles';


interface Props {
  playerType: 'Starters' | 'Bench';
  players: GameSummaryPlayer[]  |  PastStatsPlayerStatistics[]
}

export default function BoxScore({playerType, players}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);
    const { isFinal, showPastStats} = useGameContext();
    const { showLiveStats } = useShowLiveStats();
    
    const statisticalCategories = [
      'MIN',
      'PTS',
      'REB',
      'AST',
      'FG',
      '3PT',
      'FT',
      'STL',
      'BLK',
      'TO',
      'PF',
      '+/-',
    ]

    const getPlayerStatistic = (category: string, statistics: GameSummaryPlayersStatistics | PastStatsPlayerStatistics) => {
      const [mins] = statistics.minutes.split(':');
      const DNP = mins === '00'
      switch (category) {
        case ('MIN') : 
          return DNP ? isFinal ? 'DNP' : '0' : mins
        case ('PTS') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : statistics.points
        case ('REB') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : statistics.rebounds
        case ('AST') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : statistics.assists
        case ('FG') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : `${statistics.field_goals_made}/${statistics.field_goals_att}`
        case ('3PT') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : `${statistics.three_points_made}/${statistics.three_points_att}`
        case ('FT') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : `${statistics.free_throws_made}/${statistics.free_throws_att}`
        case ('STL') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : statistics.steals
        case ('BLK') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : statistics.blocks
        case ('TO') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : statistics.turnovers
        case ('PF') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : statistics.personal_fouls
        case ('+/-') : 
          return (!showPastStats && (!showLiveStats || DNP)) ? '-' : statistics.pls_min
        default: 
          return '-'
      }
    }

    return (
      <Box>
        <TableContainer sx={styles.root}>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant='h5'><b>{playerType}</b></Typography></TableCell>
                {statisticalCategories.map((category) => (
                  <TableCell align="center" sx={styles.tableCell}><b>{category}</b></TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => {
                return (
                  <TableRow sx={styles.tableRow}>
                    <TableCell sx={{minWidth: 150}}>{`${player.first_name.charAt(0)}. ${player.last_name}`}</TableCell>
                    {statisticalCategories.map((category) => {
                      //@ts-ignore statistics does exist on GameSummaryPlayer
                      const statistic = player.hasOwnProperty('statistics') ? player.statistics : player
                      return (
                        <TableCell align="center" sx={styles.tableCell}>{getPlayerStatistic(category, statistic)}</TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
}
