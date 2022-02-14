import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Box, Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography, useTheme
} from '@mui/material';
import React from 'react';
import GoogleAuthenticationButton from '../GoogleAuthenticationButton';
import { useStyles } from './styles';


export default function SignUp() {
    const theme = useTheme();
    const styles = useStyles(theme);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
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
            Sign up
          </Typography>

          <GoogleAuthenticationButton signUp/>

          <Box sx={styles.dividerContainer}>
            <Divider>OR</Divider>
          </Box>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='filled'
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='filled'
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='filled'
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='filled'
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel 
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label={
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <Typography sx={{mr: 1}}>I Accept the </Typography>
                      <Link href="#">Terms and Conditions</Link>
                    </Box>
                  }
                  />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
    );
}