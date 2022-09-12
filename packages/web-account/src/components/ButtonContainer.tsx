import React from 'react';
import { Box } from '@mui/material';

export default function ButtonContainer({children}: {children?: JSX.Element|Array<JSX.Element>}) {
  return (
    <Box textAlign='center' display='flex' flexDirection='column' alignItems='center' mt={2}>
      {children}
    </Box>
  );
}