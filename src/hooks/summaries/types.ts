import { VendorEstimateFields } from '@components/estimate/job-section/types';

export type Summary = {
  [key in keyof VendorEstimateFields]: number;
};
