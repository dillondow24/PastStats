import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Box, Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography, useTheme
} from '@mui/material';
import React, { useState } from 'react';
import { useUserContext } from '../../contexts/userContext';
import { verifyPassword } from '../../utils/verifyPassword';
import GoogleAuthenticationButton from '../GoogleAuthenticationButton';
import { useStyles } from './styles';


export default function SignUp() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {handleSignUp} = useUserContext();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [passwordError, setPasswordError] = useState<Error | null>(null);

    const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
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
        handleSignUp(firstName, lastName, email, phone, password);
        setPasswordError(null);
      } catch (error: any){
        setPasswordError(error);
      }
    };


    const disableSignUp = firstName === '' || lastName === '' || !email.includes('@') || phone === '' ||  password === '' || !accept;

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
                  onChange={handleChangeFirstName}
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
                  onChange={handleChangeLastName}
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
                <TextField
                  variant='filled'
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  onChange={handleChangeEmail}
                />
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
            {passwordError ? <Typography align='center' variant="body2" color="error">{passwordError.message}</Typography> : null}
          </Box>
        </Box>
    );
}