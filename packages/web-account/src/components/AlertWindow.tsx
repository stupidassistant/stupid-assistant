import React from 'react';
import { Button, DialogTitle, DialogActions, DialogContent, DialogContentText, Dialog } from '@mui/material';

export default function AlertWindow(props: {open: boolean, setOpen: (val: boolean) => void, title: string, text: string}) {
  const { open, setOpen, title, text } = props;

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={() => setOpen(false)}
    >
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}