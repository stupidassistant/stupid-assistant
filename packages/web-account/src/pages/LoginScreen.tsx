import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import Title from '../components/Title';
import EventButton from '../components/EventButton';
import LinkButton from '../components/LinkButton';
import ButtonContainer from '../components/ButtonContainer';
import SignedInScreen from '../components/SignedInScreen';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from '@mui/material';

export default function SimpleContainer() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState('');
  
  const [alertMsg, setAlertMsg] = React.useState<string|null>(null);

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(getAuth(), email, password)
    .then(() => {
      setAlertMsg(null);
    })
    .catch(error => {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/invalid-email":
          setAlertMsg('Invalid email address');
          break;
        case "auth/user-disabled":
          setAlertMsg('Your account is disabled');
          break;
        case "auth/user-not-found":
          setAlertMsg('No account was found for this email');
          break;
        case "auth/wrong-password":
          setAlertMsg('Incorrect password');
          break;
      }
    });
  }

  return (
    <SignedInScreen redirectOnAuth={true}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Title
            title="The Stupid Assistant"
            subTitle="Our clean and transparent login"
          />
          <EmailInput
            value={username}
            onChangeText={setUsername}
          />
          <PasswordInput
            value={password}
            onChangeText={setPassword}
          />
          <ButtonContainer>
            <EventButton
              label='Login'
              onClick={() => signIn(username, password)}
            />
            {alertMsg != null ? <Alert severity="error" style={{marginBottom: 10}}>{alertMsg}</Alert> : <></>}
            <LinkButton
              label='Forgot Password'
              to='/forgot-password'
              params={username.length <= 0 ? {} : {
                email: username
              }}
            />
            <LinkButton
              label='Dont have an account?'
              to='/register'
              params={username.length <= 0 ? {} : {
                email: username
              }}
            />
          </ButtonContainer>
        </Box>
      </Container>
    </SignedInScreen>
  );
}