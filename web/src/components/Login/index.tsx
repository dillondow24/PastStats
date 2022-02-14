import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Box, Button, Checkbox, Chip, Divider, FormControlLabel, Grid, Link, TextField, Typography, useTheme
} from '@mui/material';
import React from 'react';
import GoogleAuthenticationButton from '../GoogleAuthenticationButton';
import { useStyles } from './styles';


export default function Login() {
    const theme = useTheme();
    const styles = useStyles(theme);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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