import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';

// TODO: Endpoint requested in AVP-184
export const updateRepairOrder = (vendorRepairOrder: VendorRepairOrder) => {
  return Promise.resolve(vendorRepairOrder);
};
