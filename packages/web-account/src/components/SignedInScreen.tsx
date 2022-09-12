import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import RedirectWithParams from './RedirectWithParams';
import LoadingScreen from './LoadingScreen';

export default function SignedInScreen(props: {children: JSX.Element|JSX.Element[], redirectOnAuth?: boolean, to?: string}): JSX.Element {
  const [signedIn, setSignedIn] = React.useState<null|boolean>(null);

  onAuthStateChanged(getAuth(), user => {
    setSignedIn(user?.uid != null);
  })

  if (signedIn === null)
    return <LoadingScreen />;

  if (signedIn === (props.redirectOnAuth || false)) {
    const screenParams = new URLSearchParams(window.location.search);
    const tokenType = screenParams.get('token_type');
    const toUrl: string = !props.redirectOnAuth ? '/login' : !tokenType ? '/' : tokenType === "refresh" ? "/refreshToken" : "token";
    return <RedirectWithParams toUrl={toUrl} useScreenParams={['redirect_to', 'token_type']} />;
  }

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}