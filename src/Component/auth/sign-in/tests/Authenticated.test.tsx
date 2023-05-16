import { render, screen, fireEvent } from '@testing-library/react';
import { signOut } from 'next-auth/react';
import { MOCK_SESSION } from '@core/test/mocks';
import Authenticated from '../Authenticated';

jest.mock('next-auth/react', () => ({
  signOut: jest.fn()
}));

describe('<Authenticated />', () => {
  test('calls signOut when the "Sign out" button is clicked', () => {
    render(<Authenticated session={MOCK_SESSION} />);
    const signOutButton = screen.getByTestId('signout-button');
    fireEvent.click(signOutButton);
    expect(signOut).toHaveBeenCalled();
  });
});
