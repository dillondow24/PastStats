import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useShowLiveStats } from '../../../../../../contexts/showLiveStatsContext';
import { GameSummaryTeamInfo } from '../../../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryTeamInfo';
import { getTeamLogo } from '../../../../../../utils/getTeamLogo';
import { getWinner } from '../../../../../../utils/getWinner';
import { useGameContext } from '../../../GameContext';
import { useStyles } from './styles';


interface Props {
  team: GameSummaryTeamInfo
  pastStatsScore: string | number
  isLoser: boolean
  alignScore: 'left' | 'right'
}

export default function FullDetailsTeamScore({team, pastStatsScore, isLoser, alignScore}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary, showPastStats, pastStats} = useGameContext();
    const {showLiveStats} = useShowLiveStats();

    const LOGO_SIZE = 80

    const getTeamRecord = (teamId: string) => {
      //TODO: make api call to get team data (including record) from sportradar and store in recoil state
      return '(32-27)'
    }

    const getScoreOrRecord = () => {
      if (gameSummary.status === 'scheduled'){
        return '-';
      } else {
        return showPastStats ? pastStatsScore : showLiveStats ? team.points : '-';
      }
    }

    const renderScore = () => {
      return (
        <Typography 
          variant="h4"
          color={isLoser && showLiveStats && !showPastStats ? 'textSecondary' : undefined} 
          sx={styles.score}>
              <b>{getScoreOrRecord()}</b>
        </Typography>
      )
    }


    return (
          <Box sx={styles.root}>
            {alignScore === 'left' && renderScore()}
            <Box sx={styles.teamContainer}>
              <Box sx={{mb: -1}}>{getTeamLogo(team.id, LOGO_SIZE)}</Box>
              <Typography><b>{team.alias}</b></Typography>
            </Box>
            {alignScore === 'right' && renderScore()}
          </Box>
    );
}
