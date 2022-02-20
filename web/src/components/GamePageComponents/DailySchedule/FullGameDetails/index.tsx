import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { GameSummary } from '../../../../model/sportradar/models/GameSummary';
import GameDetails from './GameDetails';
import Matchup from './Matchup';
import { useStyles } from './styles';
import TeamScoring from './TeamScoring';
import TeamStats from './TeamStats';

interface Props {
  gameId: string;
  gameSummary: GameSummary | undefined;
}



export default function FullGameDetails({gameId, gameSummary}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);


    

    return (
      <Grid 
        container 
        spacing={1}
        >
        <Grid item xs={6}>
          <Box sx={styles.section}>
            <Matchup />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={styles.section}>
            <TeamScoring />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={styles.section}>
            <TeamStats />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={styles.section}>
            <TeamStats />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={styles.section}>
            <TeamStats />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={styles.section}>
            <GameDetails />
          </Box>
        </Grid>
      </Grid>
    );
}