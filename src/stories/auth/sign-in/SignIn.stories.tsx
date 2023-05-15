import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { MOCK_SESSION } from '@core/test/mocks';
import SignIn from '@components/auth/sign-in';

export default {
  title: 'Auth/SignIn',
  component: SignIn
};

export const WithSession = () => (
  <SessionProvider session={MOCK_SESSION}>
    <SignIn />
  </SessionProvider>
);

export const WithoutSession = () => (
  <SessionProvider session={null}>
    <SignIn />
  </SessionProvider>
);
