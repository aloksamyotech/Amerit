import '@testing-library/jest-dom';
import * as ReactQuery from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MOCK_SESSION, MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import Search from '../Search';

const queryClient = new ReactQuery.QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

jest.mock('src/services/search');

const wrapper = ({ children }: any) => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    <SessionProvider session={MOCK_SESSION}>{children}</SessionProvider>
  </ReactQuery.QueryClientProvider>
);

jest.mock('src/services/search');

describe('Search component', () => {
  const setSearchData = jest.fn();
  beforeEach(() => {
    render(
      <Search
        setSearchData={setSearchData}
        searchResults={MOCK_VENDOR_REPAIR_ORDERS}
      />,
      { wrapper }
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('calls setSearchData on mount', async () => {
    expect(setSearchData).toHaveBeenCalledTimes(1);
  });

  /* TODO: Reinstate validation once we have real data
  it('shows error messages for value less than 3 characters for Repair Order Nbr', async () => {
    const value = 'aa';
    const limitMessage =
      'Repair Order Nbr value should have at least 3 characters';
    const repairOrderNbr = screen.getByPlaceholderText('Repair Order Nbr');
    fireEvent.change(repairOrderNbr, { target: { value } });
    fireEvent.click(screen.getByRole('button', { name: 'Show Results' }));
    expect(await screen.findAllByText(limitMessage));
  });

  it('shows error messages for value should be less than 12 for Repair Order Nbr', async () => {
    const value = 'ddsfasdfasdfasdfhlkla';
    const limitMessage =
      'Repair Order Nbr value should be less than 12 characters';
    const repairOrderNbr = screen.getByPlaceholderText('Repair Order Nbr');
    fireEvent.change(repairOrderNbr, { target: { value } });
    fireEvent.click(screen.getByRole('button', { name: 'Show Results' }));
    expect(await screen.findAllByText(limitMessage));
  });

  it('shows error messages for value less than 3 characters for Vendor Work Order Nbr', async () => {
    const value = 'aa';
    const limitMessage =
      'Vendor Work Order Nbr value should have at least 3 characters';
    const vendorWorkOrderNbr = screen.getByPlaceholderText(
      'Vendor Work Order Nbr'
    );
    fireEvent.change(vendorWorkOrderNbr, { target: { value } });
    fireEvent.click(screen.getByRole('button', { name: 'Show Results' }));
    expect(await screen.findAllByText(limitMessage));
  });

  it('shows error messages for value should be less than 12 for Vendor Work Order Nbr', async () => {
    const value = 'ddsfasdfasdfasdfhlkla';
    const limitMessage =
      'Vendor Work Order Nbr value should be less than 12 characters';
    const vendorWorkOrderNbr = screen.getByPlaceholderText(
      'Vendor Work Order Nbr'
    );
    fireEvent.change(vendorWorkOrderNbr, { target: { value } });
    fireEvent.click(screen.getByRole('button', { name: 'Show Results' }));
    expect(await screen.findAllByText(limitMessage));
  });

  it('shows error messages for value less than 3 characters for VIN', async () => {
    const value = 'aa';
    const limitMessage = 'VIN value should have at least 3 characters';
    const vin = screen.getByPlaceholderText('Vin');
    fireEvent.change(vin, { target: { value } });
    fireEvent.click(screen.getByRole('button', { name: 'Show Results' }));
    expect(await screen.findAllByText(limitMessage));
  });

  it('shows error messages for value should be less than 24 for VIN', async () => {
    const value = 'ddsfasdfasdfasdfhlklaasdfasdfasdfsadfasdf';
    const limitMessage = 'VIN value should be less than 24 characters';
    const vin = screen.getByPlaceholderText('Vin');
    fireEvent.change(vin, { target: { value } });
    fireEvent.click(screen.getByRole('button', { name: 'Show Results' }));
    expect(await screen.findAllByText(limitMessage));
  });
  */

  it('calls setSearchData correctly ', async () => {
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Show Results' }));
    });
    expect(setSearchData).toHaveBeenCalledTimes(2);
  });
});
