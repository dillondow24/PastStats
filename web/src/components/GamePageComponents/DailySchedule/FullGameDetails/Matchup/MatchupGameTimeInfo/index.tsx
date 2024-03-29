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

export default function MatchupGameTimeInfo() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary, showPastStats, pastStats, dailyScheduleGame, isLive, isFinal} = useGameContext();
    const {showLiveStats} = useShowLiveStats();

    const getBroadcast = () => {
      if(dailyScheduleGame.broadcasts.length === 0) return null
      const broadcast = dailyScheduleGame.broadcasts.find(b => b.locale =='home');
      if(!broadcast) return dailyScheduleGame.broadcasts[0].network
      return broadcast.network
    }

    if(showPastStats) {
      return (
        <Box sx={styles.section} style={{flexDirection: 'column'}}>
          <Typography variant="body1" color='primary'><b>{'Past Stats'}</b></Typography>
          <Typography variant="h5"><b>{pastStats ? pastStats.clock : '--:--'}</b></Typography>
          <Typography variant="subtitle1">{pastStats ? toOrdinalSuffix(pastStats.quarter) : '--:--'}</Typography>
        </Box>
      )
    }

    if(isLive){
      return (
        <Box sx={styles.section} style={{flexDirection: 'column'}}>
          <Typography variant="body1" color='error'><b>{'Live'}</b></Typography>
          <Typography variant="h5"><b>{showLiveStats ? gameSummary.clock : '--:--'}</b></Typography>
          <Typography variant="subtitle1">{toOrdinalSuffix(gameSummary.quarter)}</Typography>
        </Box>
      )
    }

    if(isFinal){
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
        <Typography variant="subtitle1">{getBroadcast()}</Typography>
      </Box>
    );
}
