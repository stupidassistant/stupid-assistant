import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import EmailInput from '../components/EmailInput';
import Title from '../components/Title';
import EventButton from '../components/EventButton';
import LinkButton from '../components/LinkButton';
import ButtonContainer from '../components/ButtonContainer';
import SignedInScreen from '../components/SignedInScreen';
import RedirectWithParams from '../components/RedirectWithParams';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Alert } from '@mui/material';

export default function SimpleContainer() {
  const [sentEmail, setSentEmail] = React.useState(false);
  const [username, setUsername] = React.useState("");

  const [alertMsg, setAlertMsg] = React.useState<string|null>(null);

  if (sentEmail)
    return <RedirectWithParams toUrl='/login' additionalParams={{email: username}} useScreenParams={['redirect_url', 'token_type']} />;

  const requestPasswordReset = (email: string) => {
    sendPasswordResetEmail(getAuth(), email).then(() => {
      setSentEmail(true);
      return;
    }).then(() => {
      setAlertMsg(null);
    }).catch(error => {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/invalid-email":
          setAlertMsg('This email address is invalid');
          break;
        case "auth/missing-continue-uri":
          setAlertMsg('Redirect is not configured');
          break;
        case "auth/invalid-continue-uri":
          setAlertMsg('Redirect is not configured');
          break;
        case "auth/unauthorized-continue-uri":
          setAlertMsg('Redirect is not configured');
          break;
        case "auth/user-not-found":
          setAlertMsg('We cannot find an account using this email.');
          break;
      }
    });
  }

  return (
    <React.Fragment>
      <SignedInScreen redirectOnAuth={true}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Title
              title="The Stupid Assistant"
              subTitle="Sorry you forgot your password"
            />
            <EmailInput
              value={username}
              onChangeText={setUsername}
            />
            <ButtonContainer>
              <EventButton
                label='Send Reset Email'
                onClick={() => requestPasswordReset(username)}
              />
              {alertMsg != null ? <Alert severity="error" style={{marginBottom: 10}}>{alertMsg}</Alert> : <></>}
              <LinkButton
                label='Back to Login'
                to='/login'
                params={username.length <= 0 ? {} : {
                  email: username
                }}
              />
            </ButtonContainer>
          </Box>
        </Container>
      </SignedInScreen>
    </React.Fragment>
  );
}