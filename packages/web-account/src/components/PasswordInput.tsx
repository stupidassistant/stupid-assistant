import React from 'react';
import Input from './Input';

export default function PasswordInput(props: {value: string, onChangeText: (txt: string) => void}) {
  return (
    <Input
      value={props.value}
      onChangeText={props.onChangeText}
      label='Password'
      type='password'
      verifyFunc={(value: string) => value.length > 6}
      errorText='Invalid Email Address'
    />
  );
}