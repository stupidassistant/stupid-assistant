import React from 'react';
import Button from '@mui/material/Button';

export default function EventButton(props: {onClick: () => void, label: string, submit?: boolean}) {
  return (
    <Button onClick={props.onClick} variant="contained" size="large" disableElevation style={{marginBottom: 15, textTransform: 'none'}} type={props.submit ? "submit" : undefined}>
      {props.label}
    </Button>
  );
}