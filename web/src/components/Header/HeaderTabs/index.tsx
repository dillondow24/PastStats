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
    const location = useLocation();
    const navigate = useNavigate();

    const pages = [
        {
            label: 'Games',
            to: 'Games',
        },
        {
            label: 'Teams',
            to: 'Teams',
        },
        {
            label: 'Profile',
            to: 'Profile',
        }
    ];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleChange = (event: any, newValue: number) => {
        getCurrentTab();
        handleOpenNavMenu(event);
    };

    const getCurrentTab = () => {
        switch (location.pathname) {
            case '/':
                return 0;
            case '/Games':
                return 0;
            case '/Teams':
                return 1;
            case '/Profile':
                return 2;
            default:    
                return 0;
        }
    }

    const renderWebView = () => {
        return (
            <Box sx={styles.webViewRoot}>
                <Tabs value={getCurrentTab()} onChange={handleChange} centered>
                    {pages.map((page, index) => {
                        return (
                            <Tab key={index} label={page.label} onClick={() => navigate(page.to)}/>
                        )
                    })}
                </Tabs>
            </Box>
        )
    }

    const renderMobileView = () => {
        return (
            <>
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
                    onClose={handleCloseNavMenu}
                    sx={styles.menu}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.label}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>

                <Box sx={styles.logoContainer}>
                    <PastStatsLogo />
                </Box>
            </>
        )
    }

return (
    <>
          {renderWebView()}
          {renderMobileView()}
    </>
)
}

