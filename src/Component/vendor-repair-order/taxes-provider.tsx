import { createContext, useState, ReactNode } from 'react';
import { TaxesContext as TaxesContextType } from '@components/estimate/types';

const TaxesContext = createContext<TaxesContextType>({} as TaxesContextType);

const TaxesProvider = ({ children }: { children: ReactNode }) => {
  // TODO: The tax amounts should be part of an estimate object.
  // When we retrieve an estimate, the tax amounts should be part of that.
  // When we save an estimate, the tax amounts should be saved with the estimate.
  const [estimateTaxes, setEstimateTaxes] = useState<number>(0);
  const [actualTaxes, setActualTaxes] = useState<number>(0);

  return (
    <TaxesContext.Provider
      value={{ estimateTaxes, setEstimateTaxes, actualTaxes, setActualTaxes }}
    >
      {children}
    </TaxesContext.Provider>
  );
};

export default TaxesProvider;
export { TaxesContext };
