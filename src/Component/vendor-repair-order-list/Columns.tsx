import {
  GridColDef,
  GridRenderCellParams,
  getGridStringOperators
} from '@mui/x-data-grid';
import Alert from '@components/alert';
import {
  RepairOrderLink,
  VendorWorkOrderSummary,
  VendorShopSummary,
  UnitVin,
  Status,
  FormattedDateTime,
  ActionButtons
} from '@components/common/vendor-repair-order';
import {
  repairOrder,
  vendorWorkOrder,
  vendorShop,
  unitVin,
  status,
  responseDue,
  estimateDue,
  unitDue
} from '@components/vendor-repair-order/valueGetters';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { HIGH_PRIORITY_VALUE } from 'src/constants';

export const Columns: GridColDef[] = [
  {
    field: 'alert',
    headerName: '',
    renderCell: ({ row }: { row: VendorRepairOrder }) => {
      return row.priority === HIGH_PRIORITY_VALUE ? <Alert /> : null;
    },
    width: 30,
    align: 'center'
  },
  {
    field: 'repairOrder',
    headerName: '',
    renderCell: RepairOrderLink,
    width: 30,
    valueGetter: repairOrder
  },
  {
    field: 'vendorWorkOrder',
    headerName: 'Work order',
    renderCell: VendorWorkOrderSummary,
    width: 150,
    valueGetter: vendorWorkOrder,
    filterOperators: getGridStringOperators().filter(
      (operator) => operator.value === 'contains'
    )
  },
  {
    field: 'vendorShop',
    headerName: 'Vendor shop',
    renderCell: ({ row }) => <VendorShopSummary row={row} />,
    width: 180,
    valueGetter: vendorShop,
    filterOperators: getGridStringOperators().filter(
      (operator) => operator.value === 'contains'
    ),
    sortable: false
  },
  {
    field: 'unit',
    headerName: 'Unit',
    renderCell: UnitVin,
    width: 200,
    valueGetter: unitVin,
    filterOperators: getGridStringOperators().filter(
      (operator) => operator.value === 'contains'
    ),
    sortable: false
  },
  {
    field: 'responseDue',
    headerName: 'Response due',
    renderCell: (colDef: GridRenderCellParams) =>
      FormattedDateTime({
        date: colDef.row.responseDue,
        direction: 'column'
      }),
    width: 120,
    valueGetter: responseDue
  },
  {
    field: 'estimateDue',
    headerName: 'Estimate due',
    renderCell: (colDef: GridRenderCellParams) =>
      FormattedDateTime({
        date: colDef.row.estimateDue,
        direction: 'column'
      }),
    width: 120,
    valueGetter: estimateDue
  },
  {
    field: 'unitDue',
    headerName: 'Repair due',
    renderCell: (colDef: GridRenderCellParams) =>
      FormattedDateTime({
        date: colDef.row.unit.due,
        direction: 'column'
      }),
    width: 120,
    valueGetter: unitDue
  },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: Status,
    width: 190,
    valueGetter: status
  },
  {
    field: 'action',
    headerName: 'Action',
    renderCell: ActionButtons,
    width: 200,
    filterable: false,
    sortable: false,
    hideable: false
  }
];
