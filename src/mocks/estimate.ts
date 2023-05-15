import {
  RepairReason,
  JobType,
  Vmrs,
  Estimate,
  EstimateList
} from '@components/estimate/job-section/types';

export const ESTIMATE_MOCKS: Estimate[] = [
  {
    type: 'Job',
    vmrs: 'Vmrs Drop-Down Item 1',
    estimateAmount: 150,
    actualAmount: 230,
    complaint: 'Complaint text',
    cause: 'Cause text',
    correction: 'Correction text',
    notes: 'Notes text'
  }
];

export const JOB_TYPE_MOCKS: JobType[] = [
  { name: 'Job', id: 1 },
  { name: 'Towing', id: 2 },
  { name: 'Travel', id: 3 }
];

export const VMRS_MOCKS: Vmrs[] = [
  { name: 'Vmrs Drop-Down Item 1', value: 'Vmrs Drop-Down Item 1' },
  { name: 'Vmrs Drop-Down Item 2', value: 'Vmrs Drop-Down Item 2' },
  { name: 'Vmrs Drop-Down Item 3', value: 'Vmrs Drop-Down Item 3' }
];

export const REPAIR_REASONS_MOCKS: RepairReason[] = [
  { name: 'Default', value: 'default', id: 1 },
  { name: 'Reason 1', value: 'reason 1', id: 2 },
  { name: 'Reason 2', value: 'reason 2', id: 3 }
];

export const VENDOR_ESTIMATE_MOCKS: EstimateList[] = [
  {
    type: 'Parts',
    partDescription: 'Part description',
    mfgPartNumber: 'mfg Part Number',
    qty: 2,
    charge: 120.0,
    total: 240.0
  }
];

export const VENDOR_ACTUAL_MOCKS: EstimateList[] = [
  {
    type: 'Freight',
    partDescription: 'Freight description',
    mfgPartNumber: 'mfg Part Number',
    qty: 1,
    charge: 1000.0,
    total: 1000.0
  }
];
