import { Avatar, IconButton, Menu, Tooltip, Typography, MenuItem, Box, useTheme, Button, PopoverOrigin} from '@mui/material';
import React from 'react';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import Login from '../../Login';
import SignUp from '../../SignUp';

const anchorOrigin: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'center',
}
const transformOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'center',
}



export default function AuthenticationButtons() {
    const navigate = useNavigate();

    const theme = useTheme();
    const styles = useStyles(theme);

    const [anchorElLogin, setAnchorElLogin] = React.useState<null | HTMLElement>(null);
    const [anchorElSignUp, setAnchorElSignUp] = React.useState<null | HTMLElement>(null);

    const handleOpenLoginMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElLogin(event.currentTarget);
    };
    const handleCloseLoginMenu = () => {
      setAnchorElLogin(null);
    };

    const handleOpenSignUpMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElSignUp(event.currentTarget);
    };

    const handleCloseSignUpMenu = () => {
      setAnchorElSignUp(null);
    };

    return (
      <Box sx={styles.root}>
        <Button onClick={handleOpenLoginMenu} sx={{mr: 1}}>Login</Button>
        <Button variant={'contained'} color='primary' onClick={handleOpenSignUpMenu}>Sign Up</Button>

        <Menu
            sx={styles.menu}
            id="login-menu"
            anchorEl={anchorElLogin}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            open={Boolean(anchorElLogin)}
            onClose={handleCloseLoginMenu}
          >
            <Login onSubmit={handleCloseLoginMenu}/>
          </Menu>

        <Menu
            sx={styles.menu}
            id="signup-menu"
            anchorEl={anchorElSignUp}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            open={Boolean(anchorElSignUp)}
            onClose={handleCloseSignUpMenu}
          >
            <SignUp onSubmit={handleCloseSignUpMenu}/>
          </Menu>
      </Box>
    )

}
