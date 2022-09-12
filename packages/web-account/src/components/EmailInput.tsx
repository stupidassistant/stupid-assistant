import React from 'react';
import Input from './Input';

export default function EmailInput(props: {value: string, disabled?: boolean, onChangeText?: (txt: string) => void}) {
  return (
    <Input
      value={props.value}
      onChangeText={props.onChangeText}
      label='Email'
      type='email'
      disabled={props.disabled}
      verifyFunc={(text: string) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(text)}
      errorText='Invalid Email Address'
    />
  );
}