import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function LoadingScreen(): JSX.Element {
  return (
    <Box position='absolute' display='flex' top={0} left={0} right={0} bottom={0} justifyContent='center' alignItems='center'>
      <CircularProgress />
    </Box>
  );
}