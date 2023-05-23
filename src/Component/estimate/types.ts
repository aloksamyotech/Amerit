import { Dispatch, SetStateAction } from 'react';

export interface TaxesContext {
  estimateTaxes: number;
  setEstimateTaxes: Dispatch<SetStateAction<number>>;
  actualTaxes: number;
  setActualTaxes: Dispatch<SetStateAction<number>>;
}
