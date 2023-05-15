import React from 'react';
import { MOCK_SESSION } from '@core/test/mocks';
import Authenticated from '@components/auth/sign-in/Authenticated';

export default {
  title: 'Auth/Authenticated',
  component: Authenticated
};

export const Default = () => <Authenticated session={MOCK_SESSION} />;
