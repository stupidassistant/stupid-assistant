import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Logo from './Logo';

export default function Title(props: {title: string, subTitle: string}) {
  return (
    <Box mb={1} textAlign='center'>
      <Logo />
      <Typography variant="h6" gutterBottom>{props.subTitle}</Typography>
    </Box>
  );
}