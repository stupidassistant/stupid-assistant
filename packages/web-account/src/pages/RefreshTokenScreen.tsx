import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Title from '../components/Title';
import Input from '../components/Input';
import LinkButton from '../components/LinkButton';
import ButtonContainer from '../components/ButtonContainer';
import SignedInScreen from '../components/SignedInScreen';
import LoadingScreen from '../components/LoadingScreen';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function GenerateTokenScreen() {
  const [token, setToken] = React.useState<null|string|false>(null);

  onAuthStateChanged(getAuth(), currentUser => {      
    if (currentUser) {
      const refreshToken: string = currentUser.refreshToken;

      const params = new URLSearchParams(window.location.search);
      const redirect_url: string|null = params.get('redirect_to');
      if (redirect_url)
        window.location.replace(`${redirect_url}?refresh_token=${refreshToken}`);

      setToken(currentUser.refreshToken);
    }
  })

  if (token === null)
    return <LoadingScreen />

  return (
    <React.Fragment>
      <SignedInScreen redirectOnAuth={false}>
        {token === null ?
          <LoadingScreen /> :
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
              <Box textAlign='center' style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Title
                  title="The Stupid Assistant"
                  subTitle="Your Refresh Token"
                />
                <Input
                  value={token || ''}
                  disabled
                  label='Token'
                />
                {token === false && <Box textAlign='center' display='flex' flexDirection='column' alignItems='center' mt={2}>
                  <Typography variant="body2" gutterBottom style={{color: 'red'}}>
                    Failed to get your token
                  </Typography>
                </Box>}
                <ButtonContainer>
                  <LinkButton
                    label='Go Back'
                    to='/'
                  />
                </ButtonContainer>
              </Box>
            </Container>
          </React.Fragment>
        }
      </SignedInScreen>
    </React.Fragment>
  );
}