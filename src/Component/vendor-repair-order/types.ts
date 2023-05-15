import { VendorEstimateFields } from '@components/estimate/job-section/types';

export interface VendorRepairOrder {
  odo: string;
  workOrder: string;
}

export interface EstimateAcceptButtonType {
  isDirty: boolean;
  isSaved: boolean;
}

export type Summary = {
  [key in keyof VendorEstimateFields]: number;
};
