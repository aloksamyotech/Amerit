import { TypographyProps } from '@mui/material';

export type Address = {
  line: string;
  city: string;
  state: string;
  zip: string;
};

export type Vendor = {
  orderNumber: string;
  name: string;
  address: Address;
};

export type Unit = {
  id: string;
  vin: string;
  year: number;
  make: string;
  model: string;
  due: string;
};

export type Shop = {
  name: string;
  address: Address;
};

export type VendorRepairOrder = {
  id: string;
  priority: string;
  repairOrderNumber?: string;
  vendor: Vendor;
  unit: Unit;
  shop: Shop;
  estimateDue: string;
  responseDue: string;
  shopAvailable: string;
  status: string;
  vendorWorkOrderNumber: string;
  purchaseOrderNumber: string;
  workInvoiceNumber: string;
  contact: string;
  odo: string;
};

export type VendorRepairOrderList = VendorRepairOrder[];

export interface TypographyStatusProps extends TypographyProps {
  row: VendorRepairOrder;
}

export interface TypographyRepairOrderLinkProps extends TypographyProps {
  row: VendorRepairOrder;
}

export interface TypographySummaryProps extends TypographyProps {
  row: VendorRepairOrder;
}

export interface TypographyFormattedDateTime extends TypographyProps {
  date?: string;
  direction: 'row' | 'column';
  color?: string;
  justify?: 'left' | 'right';
}

export interface TypographyVendorShopSummary extends TypographyProps {
  row: VendorRepairOrder;
}
