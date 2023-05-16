import { useSession } from 'next-auth/react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_SESSION } from '@core/test/mocks';
import SignIn from '../SignIn';

jest.mock('next-auth/react');

describe('<SignIn />', () => {
  test('Shows Sign out when session is present', () => {
    (useSession as jest.Mock).mockReturnValueOnce({ data: MOCK_SESSION });
    render(<SignIn />);
    expect(screen.getByTestId('signout-button')).toBeInTheDocument();
  });

  test('Shows Sign in when session is not present', () => {
    (useSession as jest.Mock).mockReturnValueOnce({ data: undefined });
    render(<SignIn />);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
