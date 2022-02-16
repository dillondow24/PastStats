import * as React from 'react';
import {Avatar, Box, Divider, Typography} from '@mui/material';
import { SportRadarNBAGame } from '../../model/sportradar/NBAGame';
import { useTheme } from '@mui/material';
import { useStyles } from './styles';
import { NBATeamMetadata } from '../../utils/getNBATeamMetadata';


interface Props {
  game: SportRadarNBAGame;
  selected: boolean;
  onClick: () => void;
}

export default function GamePreviewCard({game, selected, onClick}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const LOGO_SIZE = 30

    console.log('game: ', game)
    //@ts-ignore
    const homeTeam = NBATeamMetadata[game.home.id];
    //@ts-ignore
    const awayTeam = NBATeamMetadata[game.away.id];

    console.log('homeTeam: ', homeTeam)
    console.log('awayTeam: ', awayTeam)

    const selectedStyles = {
      border: `1px solid ${theme.palette.primary.main}`,
    }

    return (
      <Box sx={styles.root} onClick={onClick} style={selected ? selectedStyles : undefined}>

        <Box sx={styles.teamContainer} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.teamContainer}>
            <Avatar src={homeTeam.logo} alt={homeTeam.name} sx={{ width: LOGO_SIZE, height: LOGO_SIZE, mr: 1}}/>
            <Typography>{homeTeam.name}</Typography>
          </Box>

          <Typography><b>{game.home_points}</b></Typography>
        </Box>
          
        <Divider sx={{my: 1}}/>

        <Box sx={styles.teamContainer} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.teamContainer}>
            <Avatar src={awayTeam.logo} alt={awayTeam.name} sx={{ width: LOGO_SIZE, height: LOGO_SIZE, mr: 1}}/>
            <Typography>{awayTeam.name}</Typography>
          </Box>

          <Typography><b>{game.away_points}</b></Typography>
        </Box>
      </Box>
    );
}
