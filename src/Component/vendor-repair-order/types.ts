import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';

export interface EstimateMetadata {
  odo: string;
  workOrder: string;
}

export interface EstimateAcceptButtonType {
  isDirty: boolean;
  isSaved: boolean;
  vendorRepairOrder: VendorRepairOrder;
}
