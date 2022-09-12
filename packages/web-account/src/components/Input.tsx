import React from 'react';
import { Box, TextField } from '@mui/material';

export default function Input(props: {value: string, onChangeText?: (txt: string) => void, disabled?: boolean, label: string, type?: "email"|"password", verifyFunc?: (txt: string) => boolean, errorText?: string}) {
  const valueError: boolean = props.verifyFunc ? !props.verifyFunc(props.value) : false;
  return (
    <Box mb={2} textAlign='center' width='100%' maxWidth={300}>
      <TextField
        value={props.value}
        onChange={(e) => props.onChangeText && props.onChangeText(e.target.value)}
        label={props.label}
        variant="outlined"
        size="small"
        type={props.type}
        disabled={props.disabled}
        fullWidth
        error={props.value !== "" && valueError}
        helperText={props.value !== "" && valueError && props.errorText}
      />
    </Box>
  );
}