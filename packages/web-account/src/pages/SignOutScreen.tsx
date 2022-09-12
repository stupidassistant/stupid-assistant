import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Title from '../components/Title';
import EventButton from '../components/EventButton';
import LinkButton from '../components/LinkButton';
import ButtonContainer from '../components/ButtonContainer';
import SignedInScreen from '../components/SignedInScreen';

import { getAuth, signOut } from 'firebase/auth';

export default function SimpleContainer() {
  const onSignOut = () => {
    signOut(getAuth());
  }
  
  return (
    <SignedInScreen redirectOnAuth={false}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Title
            title="The Stupid Assistant"
            subTitle="Do you wish to sign out?"
          />
          <ButtonContainer>
            <EventButton
              label='Sign Out'
              onClick={onSignOut}
            />
            <LinkButton
              label='Back'
              to='/login'
            />
          </ButtonContainer>
        </Box>
      </Container>
    </SignedInScreen>
  );
}