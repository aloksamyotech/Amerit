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

export const columns: GridColDef[] = [
  {
    field: 'alert',
    headerName: '',
    renderCell: ({ row }: { row: VendorRepairOrder }) => {
      return row.priority === HIGH_PRIORITY_VALUE ? <Alert /> : null;
    },
    flex: 0.1,
    align: 'center'
  },
  {
    field: 'repairOrder',
    headerName: '',
    renderCell: RepairOrderLink,
    flex: 0.1,
    valueGetter: repairOrder
  },
  {
    field: 'vendorWorkOrder',
    headerName: 'Work order',
    renderCell: VendorWorkOrderSummary,
    flex: 0.7,
    valueGetter: vendorWorkOrder,
    filterOperators: getGridStringOperators().filter(
      (operator) => operator.value === 'contains'
    )
  },
  {
    field: 'vendorShop',
    headerName: 'Vendor shop',
    renderCell: ({ row }) => <VendorShopSummary row={row} />,
    flex: 0.8,
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
    flex: 0.8,
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
    flex: 0.6,
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
    flex: 0.6,
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
    flex: 0.6,
    valueGetter: unitDue
  },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: Status,
    flex: 0.8,
    valueGetter: status
  },
  {
    field: 'action',
    headerName: 'Action',
    renderCell: ActionButtons,
    flex: 1,
    filterable: false,
    sortable: false,
    hideable: false
  }
];
