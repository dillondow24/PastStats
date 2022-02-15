import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useUserContext } from '../../contexts/userContext';
import PastStatsLogo from '../PastStatsLogo';
import HeaderAuthenticationButtons from './HeaderAuthenticationButtons';
import HeaderProfileMenu from './HeaderProfileMenu';
import HeaderTabs from './HeaderTabs';
import { useStyles } from './styles';


/**
 * header component for the website with logo, tabs, and profile menu
 *
 * @return {*} 
 */
const Header = () => {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {isAuthenticated} = useUserContext();

    console.log('Header.isAuthenticated:', isAuthenticated);

    return (
      <AppBar position="static" color='primary' sx={styles.root} >
        <Box sx={styles.logoContainer}>
          <PastStatsLogo />
        </Box>

        <Box sx={styles.tabsContainer}>
          <HeaderTabs />
        </Box>

        <Box sx={styles.profileContainer}>
          {isAuthenticated ? <HeaderProfileMenu /> : <HeaderAuthenticationButtons />}
        </Box>
      </AppBar>
    );
};

export default Header;
