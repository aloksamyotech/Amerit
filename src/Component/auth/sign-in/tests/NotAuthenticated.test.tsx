import { signIn } from 'next-auth/react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotAuthenticated from '../NotAuthenticated';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('<NotAuthenticated />', () => {
  it('calls signIn when the "Sign in" is clicked', () => {
    render(<NotAuthenticated />);
    const signInLink = screen.getByText('Sign in');
    fireEvent.click(signInLink);
    expect(signIn).toHaveBeenCalledWith('azure-ad-b2c');
  });
});
