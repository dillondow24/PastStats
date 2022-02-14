import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import PastStatsLogo from '../PastStatsLogo';
import { useTheme } from '@mui/material';
import { useStyles } from './styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/dillondow24/PastStats">
        PastStats
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
      <Box
        component="footer"
        sx={styles.root}
      >
        <Container maxWidth="lg">
          <Box sx={styles.container}>
            <Box sx={styles.logoContainer}>
              <PastStatsLogo full/>
            </Box>
              <Copyright />
          </Box> 
        </Container>
      </Box>
    )
}