import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useShowLiveStats } from '../../../../../../contexts/showLiveStatsContext';
import { GameSummaryTeamInfo } from '../../../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryTeamInfo';
import { getGameDay } from '../../../../../../utils/getGameDay';
import { getGameTimeLabel } from '../../../../../../utils/getGameTimeLabel';
import { getTeamLogo } from '../../../../../../utils/getTeamLogo';
import { getWinner } from '../../../../../../utils/getWinner';
import { toOrdinalSuffix } from '../../../../../../utils/toOrdinalSuffix';
import { useGameContext } from '../../../GameContext';
import { useStyles } from './styles';


interface Props {
  type: 'Live' | 'Final' | 'Scheduled'
}

export default function MatchupGameTimeInfo({type}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary} = useGameContext();
    const {showLiveStats} = useShowLiveStats();

    if(type === 'Live'){
      return (
        <Box sx={styles.section} style={{flexDirection: 'column'}}>
          <Typography variant="body1" color='error'><b>{'Live'}</b></Typography>
          <Typography variant="h5"><b>{gameSummary.clock}</b></Typography>
          <Typography variant="subtitle1">{toOrdinalSuffix(gameSummary.quarter)}</Typography>
        </Box>
      )
    }

    if(type === 'Final'){
      return (
        <Box sx={styles.section} style={{flexDirection: 'column'}}>
          <Typography variant="h5"><b>{'Final'}</b></Typography>
          <Typography variant="body1">{getGameDay(gameSummary.scheduled)}</Typography>
        </Box>
      )
    }
    return (
      <Box sx={styles.section} style={{flexDirection: 'column'}}>
        <Typography variant="body1">{getGameDay(gameSummary.scheduled)}</Typography>
        <Typography variant="h5"><b>{getGameTimeLabel(showLiveStats, gameSummary)}</b></Typography>
        <Typography variant="subtitle1">{type}</Typography>
      </Box>
    );
}
