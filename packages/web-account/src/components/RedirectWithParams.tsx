import React from 'react';
import { Navigate } from "react-router-dom";

type RedirectWithParamsProps = {
  toUrl: string,
  additionalParams?: Record<string, string>,
  useScreenParams: string[]
};

export default function RedirectWithParams(props: RedirectWithParamsProps) {
  const screenParams = new URLSearchParams(window.location.search);
  const usedParams: Record<string, string> = props.additionalParams || {};

  for (const key of props.useScreenParams)
    if (screenParams.has(key))
      usedParams[key] = screenParams.get(key) || "";

  const url: string = Object.keys(usedParams).length === 0 ? props.toUrl : 
    `${props.toUrl}?${Object.keys(usedParams).map(key => `${key}=${usedParams[key]}`).join('&')}`;

  return (
    <Navigate
      to={url}
    />
  );
};