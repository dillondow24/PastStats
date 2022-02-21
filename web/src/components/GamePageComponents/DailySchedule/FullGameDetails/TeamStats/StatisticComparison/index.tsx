import { Box, styled, ThemeProvider, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useStyles } from './styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

interface Props {
  category: string;
  homeLabel: string;
  homeColor: string;
  homeValue: number;
  homeSecondaryLabel?: string;
  awayLabel: string;
  awayColor: string;
  awayValue: number;
  awaySecondaryLabel?: string;
}

export default function StatisticComparison({
    category,
    homeLabel,
    homeValue,
    homeColor,
    homeSecondaryLabel,
    awayLabel,
    awayValue,
    awayColor,
    awaySecondaryLabel,
  }: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);


    const homePercentage = Math.round((homeValue / (homeValue + awayValue)) * 100);

    return (
      <Box sx={{mb: 3, mx: 2}}>
        <Box sx={styles.label}>

          <Box sx={styles.label}>
            <Typography>{homeLabel}</Typography>
            {homeSecondaryLabel && <Typography color='textSecondary' sx={{mx: 1}}>{homeSecondaryLabel}</Typography>}
          </Box>

          <Typography sx={{fontSize: {sm: 24}}}><b>{category}</b></Typography>

          <Box sx={styles.label}>
            {homeSecondaryLabel && <Typography color='textSecondary' sx={{mx: 1}}>{awaySecondaryLabel}</Typography>}
            <Typography>{awayLabel}</Typography>
          </Box>
          
        </Box>
          <LinearProgress 
            variant='determinate'
            value={homePercentage}
            sx={{
                height: 5,
                borderRadius: 5,
                [`&.${linearProgressClasses.colorPrimary}`]: {
                  backgroundColor: awayColor,
                },
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: homeColor,
                  borderRight: `solid ${theme.palette.background.paper} 5px`,
                },
            }}
            />
      </Box>
    );
}
