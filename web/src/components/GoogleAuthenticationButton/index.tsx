import { Button, useTheme } from '@mui/material';
import * as React from 'react';
import { useStyles } from './styles';
import GoogleIcon from '@mui/icons-material/Google';



interface Props {
  signUp?: boolean;
}

export default function GoogleAuthenticationButton({signUp}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const handleLogin = () => {
      console.log('login with google')
    }

    const handleSignUp = () => {
      console.log('sign up with google')
    }

    return (
      <Button 
        sx={styles.googleButton} 
        onClick={() => signUp ? handleSignUp() : handleLogin()}
        startIcon={<GoogleIcon />}
        >
        {signUp ? 'Sign up with Google' : 'Login with Google'}
      </Button>
    )
}