import React, { ReactNode, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';

import '../theme/icons';
import Providers from '../providers';
import { MOCK_SESSION } from './mocks';

const TestProviders = ({ children }: { children: ReactNode }) => {
  return <Providers session={MOCK_SESSION}>{children}</Providers>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: TestProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
