import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { SportRadarNBAGame } from '../../../model/sportradar/NBAGame';
import { DailyScheduleGamePreview } from '../DailyScheduleGamePreview';
import { useStyles } from './styles';

interface Props {
  game: SportRadarNBAGame;
}

export default function FullGameDetails({game}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
      null
    );
}
