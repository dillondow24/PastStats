import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Box, Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography, useTheme
} from '@mui/material';
import React, { useState } from 'react';
import { useUserContext } from '../../contexts/userContext';
import { verifyPassword } from '../../utils/verifyPassword';
import GoogleAuthenticationButton from '../GoogleAuthenticationButton';
import { useStyles } from './styles';

interface Props {
  onSubmit: () => void;
}

export default function SignUp({onSubmit}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {handleSignUp} = useUserContext();
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleChangeAccept = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(event.target.checked);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        verifyPassword(password)
        handleSignUp(username, email, phone, password);
        setError(null);
        onSubmit();
      } catch (error: any){
        setError(error);
      }
    };

    const disableSignUp = username === '' || !email.includes('@') || phone === '' ||  password === '' || !accept;

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
              <Grid item xs={12}>
                <TextField
                  variant='filled'
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={handleChangeUsername}
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
                  onChange={handleChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='filled'
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  onChange={handleChangePhone}
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
                  onChange={handleChangePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel 
                  control={<Checkbox value="acceptTermsAndConditions" color="primary" onChange={handleChangeAccept} checked={accept} />}
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
              disabled={disableSignUp}
            >
              Sign Up
            </Button>
            {error ? <Typography align='center' variant="body2" color="error">{error.message}</Typography> : null}
          </Box>
        </Box>
    );
}