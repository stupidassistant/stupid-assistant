import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import PasswordInput from '../components/PasswordInput';
import EmailInput from '../components/EmailInput';
import Title from '../components/Title';
import EventButton from '../components/EventButton';
import LinkButton from '../components/LinkButton';
import ButtonContainer from '../components/ButtonContainer';
import SignedInScreen from '../components/SignedInScreen';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from '@mui/material';

export default function RegisterScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState('');
  
  const [alertMsg, setAlertMsg] = React.useState<string|null>(null);

  const register = (email: string, password: string) => {
    createUserWithEmailAndPassword(getAuth(), email, password)
    .then(() => {
      setAlertMsg(null);
    })
    .catch(error => {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/email-already-in-use":
          setAlertMsg('This email is already in use.');
          break;
        case "auth/invalid-email":
          setAlertMsg('The email you enter is invalid.');
          break;
        case "auth/operation-not-allowed":
          setAlertMsg('We are not accepting registrations at this time.');
          break;
        case "auth/weak-password":
          setAlertMsg('Sorry your password is too week, try another.');
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
            subTitle="Register to get started"
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
              label='Register'
              onClick={() => register(username, password)}
            />
            {alertMsg != null ? <Alert severity="error" style={{marginBottom: 10}}>{alertMsg}</Alert> : <></>}
            <LinkButton
              label='Have an account?'
              to='/login'
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