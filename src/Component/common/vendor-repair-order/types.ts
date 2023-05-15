import { SyntheticEvent } from 'react';
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
  status: string;
  vendorWorkOrderNumber: string;
};

export type VendorRepairOrderList = VendorRepairOrder[];

export type RepairJob = {
  id: number;
  vmrs: string;
  complaint: string;
  repairReason: string;
  description: string;
};

export type RepairJobProps = {
  repairJob: RepairJob;
  count: number;
  expanded: Set<number>;
  handleExpandedChange: (
    event: SyntheticEvent<Element, Event>,
    expanded: boolean
  ) => void;
};

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
}

export interface TypographyVendorShopSummary extends TypographyProps {
  row: VendorRepairOrder;
}
