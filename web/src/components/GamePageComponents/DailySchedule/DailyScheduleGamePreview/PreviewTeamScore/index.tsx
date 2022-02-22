import { Box, Typography, useTheme } from '@mui/material';
import { useShowLiveStats } from '../../../../../contexts/showLiveStatsContext';
import { GameSummaryTeamInfo } from '../../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryTeamInfo';
import { getTeamLogo } from '../../../../../utils/getTeamLogo';
import { useGameContext } from '../../GameContext';
import { useStyles } from './styles';

interface Props {
  team: GameSummaryTeamInfo
  isLoser: boolean;
  showRecord: boolean;
}

export function PreviewTeamScore({team, isLoser, showRecord}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);
    const {showLiveStats} = useShowLiveStats();

    const LOGO_SIZE = 40

    const getTeamRecord = (teamId: string) => {
      //TODO: make api call to get team data (including record) from sportradar and store in recoil state
      return '(32-27)'
    }

    const getScoreOrRecord = () => {
      if (showRecord){
        return getTeamRecord(team.id);
      } else {
        return showLiveStats ? team.points : '-';
      }
    }

    return (
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Box sx={{mr: 1, mb: -1}}>{getTeamLogo(team.id, LOGO_SIZE)}</Box>
            <Typography><b>{team.alias}</b></Typography>
          </Box>
          <Typography color={isLoser && showLiveStats ? 'textSecondary' : undefined}><b>{getScoreOrRecord()}</b></Typography>
        </Box>
    );
}

