import { GridValueGetterParams } from '@mui/x-data-grid';

// Value getters for each column in the VRO datagrid, these replicate
// the data that is displayed by the columns corresponding renderCell
// and are used by the filtering
// TODO: Refactor so we have a single source of truth for fields that
// are displayed in each column

const repairOrder = ({ row: vendorRepairOrder }: GridValueGetterParams) =>
  vendorRepairOrder.repairOrderNumber;

const vendorWorkOrder = ({ row: vendorRepairOrder }: GridValueGetterParams) => {
  const { unit } = vendorRepairOrder;
  const { vin, year, make, model } = unit;

  return `${vin} ${year} ${make} ${model}`;
};

const vendorShop = ({ row: vendorRepairOrder }: GridValueGetterParams) => {
  const { shop } = vendorRepairOrder;
  const { name, address } = shop;
  const { line, city, state, zip } = address;

  return `${name} ${line} ${city} ${state} ${zip}`;
};

const unitVin = ({ row: vendorRepairOrder }: GridValueGetterParams) => {
  const { unit } = vendorRepairOrder;

  return unit.vin;
};

const responseDue = ({ row: vendorRepairOrder }: GridValueGetterParams) =>
  new Date(vendorRepairOrder.responseDue);

const estimateDue = ({ row: vendorRepairOrder }: GridValueGetterParams) =>
  new Date(vendorRepairOrder.estimateDue);

const unitDue = ({ row: vendorRepairOrder }: GridValueGetterParams) => {
  const { unit } = vendorRepairOrder;

  return new Date(unit.due);
};

const status = ({ row: vendorRepairOrder }: GridValueGetterParams) =>
  vendorRepairOrder.status;

export {
  repairOrder,
  vendorWorkOrder,
  vendorShop,
  unitVin,
  responseDue,
  estimateDue,
  unitDue,
  status
};
