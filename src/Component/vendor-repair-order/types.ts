import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';

export interface EstimateMetadata {
  odo: string;
  workOrder: string;
  taxes: number;
}

export interface EstimateAcceptButtonType {
  isDirty: boolean;
  isSaved: boolean;
  vendorRepairOrder: VendorRepairOrder;
}
