import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Title from '../components/Title';
import EmailInput from '../components/EmailInput';
import LinkButton from '../components/LinkButton';
import ButtonContainer from '../components/ButtonContainer';
import SignedInScreen from '../components/SignedInScreen';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function MyAccountScreen() {
  const [email, setEmail] = React.useState("");

  onAuthStateChanged(getAuth(), user => {
    if (user?.email)
      setEmail(user.email);
  });

  return (
    <React.Fragment>
      <SignedInScreen>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box textAlign='center' style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Title
              title="The Stupid Assistant"
              subTitle="Your Account"
            />
            <EmailInput
              value={email}
              disabled
            />
            <Box textAlign='center' display='flex' flexDirection='column' alignItems='center' mt={2}>
              <Typography variant="body2" gutterBottom>
                We value your privacy so we allow you to control all the infomation we store. But currently we are only storing your email. Great right?
              </Typography>
            </Box>
            <ButtonContainer>
              <LinkButton
                label='My Auth Token'
                to='/token'
              />
              <LinkButton
                label='Sign Out'
                to='/signout'
              />
            </ButtonContainer>
          </Box>
        </Container>
      </SignedInScreen>
    </React.Fragment>
  );
};