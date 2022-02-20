import { Box, Table, TableContainer, Typography, useTheme, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useState } from 'react';
import { useShowLiveStats } from '../../../../../../contexts/showLiveStatsContext';
import { GameSummaryPlayer, GameSummaryPlayersStatistics } from '../../../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryPlayer';
import { useGameContext } from '../../../GameContext';
import { useStyles } from '../styles';


interface Props {
  playerType: 'Starters' | 'Bench';
  players: GameSummaryPlayer[]
}

export default function BoxScore({players, playerType}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);
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

    const getPlayerStatistic = (category: string, statistics: GameSummaryPlayersStatistics) => {
      if(showLiveStats) return '-'
      switch (category) {
        case ('MIN') : 
          return statistics.minutes
        case ('PTS') : 
          return statistics.points
        case ('REB') : 
          return statistics.rebounds
        case ('AST') : 
          return statistics.assists
        case ('FG') : 
          return `${statistics.field_goals_made}/${statistics.field_goals_att}`
        case ('3PT') : 
          return `${statistics.three_points_made}/${statistics.three_points_att}`
        case ('FT') : 
          return `${statistics.free_throws_made}/${statistics.free_throws_att}`
        case ('STL') : 
          return statistics.steals
        case ('BLK') : 
          return statistics.blocks
        case ('TO') : 
          return statistics.turnovers
        case ('PF') : 
          return statistics.personal_fouls
        case ('+/-') : 
          return statistics.pls_min
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
                  <TableRow>
                    <TableCell sx={{minWidth: 150}}>{`${player.first_name.charAt(0)}. ${player.last_name}`}</TableCell>
                    {statisticalCategories.map((category) => {
                      return (
                        <TableCell align="center" sx={styles.tableCell}>{getPlayerStatistic(category, player.statistics)}</TableCell>
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
