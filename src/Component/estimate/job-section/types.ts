import { ReactElement } from 'react';

export interface Estimate {
  id?: number;
  jobId?: string;
  complaint?: string;
  correction?: string;
  cause?: string;
  type?: string;
  vmrs?: string;
  repairReason?: string;
  notes?: string;
  estimateAmount?: number;
  actualAmount?: number;
  readOnly?: boolean;
  sectionNumber?: number;
  tmsRepairOrderSectionId?: number;
  sectionTypeCode?: string;
  vmrsCode?: string;
  complaintText?: string;
  correctionText?: string;
  causeText?: string;
  sectionSqNbr?: number;
  jobType?: string;
  lines?: any; // TODO - need to provide types in next ticket
  setTotalEstmateAmount?: (value?: number) => void;
  setTotalActualAmount?: (value?: number) => void;
  sectionId?: number;
}

export interface CreateJobSection {
  jobType?: string;
  vrms?: string;
  repairReason?: string;
  correction?: string;
  cause?: string;
  notes?: string;
  complaint?: string;
}

export interface JobSection {
  sectionNumber: number;
  removeElement?: (index: number) => void;
  defaultExpanded?: boolean;
}

export interface LineItem {
  type: string | ReactElement<any, any>;
  partDescription: string | ReactElement<any, any>;
  mfgPartNumber: string | ReactElement<any, any>;
  qty: number | ReactElement<any, any>;
  charge: number | ReactElement<any, any>;
  total: number | ReactElement<any, any>;
  id?: number;
}

export interface JobType {
  id: number;
  name: string;
}

export interface Vmrs {
  name: string;
  value: string;
}

export interface RepairReason {
  name: string;
  value: string;
  id: number;
}

export interface VendorEstimateType {
  type?: string;
  setTotalEstimate?: (value: number) => void;
  setTotalActual?: (value: number) => void;
  types?: JobType[];
  sectionId?: number;
  vmrs?: string;
}

export interface JobSectionEstimate {
  vendorsEstimateList: LineItem[];
  labor: number;
  sublet: number;
  freight: number;
  towing: number;
  travel: number;
  fees: number;
  parts: number;
  shopSupplies: number;
}

export interface EstimateTable {
  setVendorsEstimateList: (data: LineItem[]) => void;
  estimateList: LineItem[];
  types?: JobType[];
  setParts: (value: number) => void;
  setShopSupplies: (value: number) => void;
  setFees: (value: number) => void;
  setLabor: (value: number) => void;
  setSublet: (value: number) => void;
  setFreight: (value: number) => void;
  setTowing: (value: number) => void;
  setTravel: (value: number) => void;
  availableLineItemTypes?: string[];
  sectionId?: number;
  vmrs?: string;
}

export interface VendorEstimateFields {
  labor: number;
  parts: number;
  shopSupplies: number;
  fees: number;
  sublet: number;
  freight: number;
  towing: number;
  travel: number;
  sectionTotal: number;
}

export interface VendorEstimateItem extends VendorEstimateFields {
  setLabor: (value: number) => void;
  setSublet: (value: number) => void;
  setFreight: (value: number) => void;
  setTowing: (value: number) => void;
  setTravel: (value: number) => void;
  setTotalEstimate?: (value: number) => void;
  availableLineItemTypes: string[];
}

export interface EstimateList {
  type: string | ReactElement<any, any>;
  partDescription: string | ReactElement<any, any>;
  mfgPartNumber: string | ReactElement<any, any>;
  qty: number | ReactElement<any, any>;
  charge: number | ReactElement<any, any>;
  total: number | ReactElement<any, any>;
}

export interface SummaryField {
  label: string;
  prop: keyof VendorEstimateFields;
}

export interface JobSectionsContextProvider {
  jobSections: Estimate[];
  refetch: () => void;
}

export interface JobSectionLine {
  charge: number;
  jobType: string;
  vrmsDescription: string;
  partNumber: string;
  quantity: number;
  total: number;
  vrmsCode?: string;

  // TODO : need to check with BE
  // partDescription: string;
}
export interface JobAccordionSection {
  heading: ReactElement<any, any>;
  detail: ReactElement<any, any>;
  panelCountText?: string;
  defaultExpanded?: boolean;
}
