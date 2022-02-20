import { Avatar, Box, Divider, Typography, useTheme } from '@mui/material';
import { useStyles } from './styles';


export function LoadingDailySchedulePreview() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const LOGO_SIZE = 30


    return (
      <Box sx={styles.root}>
        <Box sx={{...styles.container, pb: 1}} style={{justifyContent: 'space-between'}}>
          <Typography variant="caption" color={'textSecondary'}>
            <b></b>
          </Typography>
          <Typography variant="caption" color='textSecondary'>
            <b>{'-:--'}</b>
            </Typography>
        </Box>

        {/* Home Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Avatar variant='rounded' src={''} alt={'H'} sx={{ width: LOGO_SIZE, height: LOGO_SIZE, mr: 1}}/>
            <Typography>{'Home Team'}</Typography>
          </Box>
          <Typography color={'textSecondary'}><b>-</b></Typography>
        </Box>
          
        <Divider sx={{my: 1}}/>


        {/* Away Team */}
        <Box sx={styles.container} style={{justifyContent: 'space-between'}}>
          <Box sx={styles.container} style={{paddingLeft: 0}}>
            <Avatar variant='rounded' src={''} alt={'Away Team'} sx={{ width: LOGO_SIZE, height: LOGO_SIZE, mr: 1}}/>
            <Typography>{'Away Team'}</Typography>
          </Box>
          <Typography color={'textSecondary'}><b>-</b></Typography>
        </Box>
      </Box>
    );
}
