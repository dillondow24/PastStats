import { Avatar, Box, IconButton, Menu, MenuItem, PopoverOrigin, Tooltip, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const anchorOrigin: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'center',
}
const transformOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'center',
}

export default function HeaderProfileMenu() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };


      return (
        <Box sx={styles.root}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Dillon Dow" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          
          <Menu
            sx={styles.menu}
            id="profile-menu"
            anchorEl={anchorElUser}
            anchorOrigin={anchorOrigin}
            keepMounted
            transformOrigin={transformOrigin}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
  
}
