import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, IconButton, Menu, MenuItem, Typography, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './styles';
import PastStatsLogo from '../../PastStatsLogo';
import { useLocation, useNavigate } from 'react-router-dom'

export default function HeaderTabs() {
    const theme = useTheme();
    const styles = useStyles(theme);
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const pages = [
        'Games',
        'Teams',
        'Standings',
        'Profile',
    ];

    const getCurrentPage = () => {
        switch (location.pathname) {
            case '/':
                return 'Games';
            case '/Games':
                return 'Games';
            case '/Teams':
                return 'Teams';
            case '/Standings':
                return 'Standings';
            case '/Profile':
                return 'Profile';
            default:    
                return 'Games';
        }
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const renderWebView = () => {
        return (
            <Box sx={styles.webViewRoot}>
                {pages.map((page, index) => {
                    const selected = page === getCurrentPage()
                    return (
                        <Button 
                            // variant={selected ? 'contained' : 'text'} 
                            color={selected ? 'primary' : 'inherit'} 
                            onClick={() => navigate(page)} 
                            key={index}
                            sx={styles.tabButton}>
                            <b><Typography>{page}</Typography></b>
                        </Button>
                    )
                })}
            </Box>
        )
    }

    const renderMobileView = () => {
        return (
            <Box sx={styles.mobileViewRootContainer}>
                <Box sx={styles.mobileViewRoot}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={() => setAnchorElNav(null)}
                    sx={styles.menu}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={() => {
                                navigate(page)
                                setAnchorElNav(null)
                            }
                        }>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>

                <Box sx={styles.logoContainer}>
                    <PastStatsLogo />
                </Box>
            </Box>
        )
    }

return (
    <>
          {renderWebView()}
          {renderMobileView()}
    </>
)
}

