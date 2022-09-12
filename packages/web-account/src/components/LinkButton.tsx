import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LinkButton(props: {to: string, label: string, params?: Record<string, string>}) {
  const screenParams = new URLSearchParams(window.location.search);

  let params: Record<string, string> = props.params || {};

  if (screenParams.has('redirect_to'))
    params['redirect_to'] = screenParams.get('redirect_to') || "";

    if (screenParams.has('token_type'))
      params['token_type'] = screenParams.get('token_type') || "";

  const url: string = Object.keys(params).length === 0 ? props.to : `${props.to}?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`;

  return (
    <Button component={Link} style={{textTransform: 'none'}} to={url}>
      {props.label}
    </Button>
  );
}