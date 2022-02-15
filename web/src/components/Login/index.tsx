import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Box, Button, Divider, Grid, Link, TextField, Typography, useTheme
} from '@mui/material';
import React, { useState } from 'react';
import { useUserContext } from '../../contexts/userContext';
import { verifyPassword } from '../../utils/verifyPassword';
import GoogleAuthenticationButton from '../GoogleAuthenticationButton';
import { useStyles } from './styles';

interface Props {
  onSubmit: () => void;
}

export default function Login({onSubmit}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<Error | null>(null);

    const {handleLogin} = useUserContext();

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        verifyPassword(password)
        handleLogin(email, password);
        setError(null);
        onSubmit();
      } catch (error: any){
        setError(error);
      }
    };

    return (
        <Box sx={styles.root}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <GoogleAuthenticationButton />

          <Box sx={styles.dividerContainer}>
            <Divider >OR</Divider>
          </Box>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="filled"
              onChange={handleChangeEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="filled"
              onChange={handleChangePassword}
            />
            {error ? <Typography align='center' variant="body2" color="error">{error.message}</Typography> : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!email.includes('@') || password === ''}
            >
              Login
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#">
                  Forgot Password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    );
}
