import React, { useEffect, useState, useRef } from 'react';
import MaterialReactTable, { MRT_Icons } from 'material-react-table';
import { Box, Button, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { columns } from './Columns';
import { EditableCell } from './EditableCell';
import { EstimateTable } from '../types';

const Table = ({
  setVendorsEstimateList,
  estimateList,
  setParts,
  setShopSupplies,
  setFees,
  setLabor,
  setSublet,
  setFreight,
  setTowing,
  setTravel,
  types,
}: EstimateTable) => {
  const theme = useTheme();
  const [data, setData] = useState(estimateList);
  const [index, setIndex] = useState(-1);
  const [rowIndexToUpdate, setRowIndexToUpdate] = useState(-1);
  const [qtyText, setQtyText] = useState(0);
  const [chargeText, setChargeText] = useState(0);
  const [totalText, setTotalText] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [saveRow, setSaveRow] = useState(false);
  const [typeText, setTypeText] = useState('');
  const [partDescriptionText, setPartDescriptionText] = useState('');
  const [mfgPartNumberText, setMfgPartNumberText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTotalText(qtyText * chargeText);
    if (inputRef) {
      if (inputRef.current) {
        if (inputRef.current.value) {
          inputRef.current.value = (qtyText * chargeText).toString();
        }
      }
    }
  }, [chargeText]);

  useEffect(() => {
    if (index > -1) {
      const dataToSplice = data;
      dataToSplice.splice(index, 1);
      setData([...dataToSplice]);
      setIndex(-1);
    }
  }, [index]);

  useEffect(() => {
    if (refresh) setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    const parts = data.filter((x) => x.type === 'Parts');
    const shopSupply = data.filter((x) => x.type === 'Shop Supplies');
    const fees = data.filter((x) => x.type === 'Fees');
    const labor = data.filter((x) => x.type === 'Labor');
    const sublet = data.filter((x) => x.type === 'Sublet');
    const freight = data.filter((x) => x.type === 'Freight');
    const towing = data.filter((x) => x.type === 'Towing');
    const travel = data.filter((x) => x.type === 'Travel');

    let partsTotal = 0;
    let shopSuppliesTotal = 0;
    let feesTotal = 0;
    let laborTotal = 0;
    let subletTotal = 0;
    let freightTotal = 0;
    let towingTotal = 0;
    let travelTotal = 0;

    parts.forEach((x) => {
      partsTotal += Number(x.qty) * Number(x.charge);
    });
    fees.forEach((x) => {
      feesTotal += Number(x.qty) * Number(x.charge);
    });
    shopSupply.forEach((x) => {
      shopSuppliesTotal += Number(x.qty) * Number(x.charge);
    });
    labor.forEach((x) => {
      laborTotal += Number(x.qty) * Number(x.charge);
    });
    sublet.forEach((x) => {
      subletTotal += Number(x.qty) * Number(x.charge);
    });
    freight.forEach((x) => {
      freightTotal += Number(x.qty) * Number(x.charge);
    });
    towing.forEach((x) => {
      towingTotal += Number(x.qty) * Number(x.charge);
    });
    travel.forEach((x) => {
      travelTotal += Number(x.qty) * Number(x.charge);
    });

    setParts(partsTotal);
    setShopSupplies(shopSuppliesTotal);
    setFees(feesTotal);
    setLabor(laborTotal);
    setSublet(subletTotal);
    setFreight(freightTotal);
    setTowing(towingTotal);
    setTravel(travelTotal);
  }, [data]);

  const handleAddClick = () => {
    const isElement = data.some(
      (estimateItem: any) => estimateItem?.charge?.props
    );
    if (!isElement) {
      const rowIndex = data && data.length ? data.length : 0;
      setData([
        ...data,
        {
          type: (
            <EditableCell
              rowIndex={rowIndex}
              accessorKey='type'
              handleSaveRow={handleSaveRow}
              isTypeSelect={true}
              types={types}
            />
          ),
          partDescription: (
            <EditableCell
              rowIndex={rowIndex}
              accessorKey='partDescription'
              handleSaveRow={handleSaveRow}
            />
          ),
          mfgPartNumber: (
            <EditableCell
              rowIndex={rowIndex}
              accessorKey='mfgPartNumber'
              handleSaveRow={handleSaveRow}
            />
          ),
          qty: (
            <EditableCell
              rowIndex={rowIndex}
              accessorKey='qty'
              handleSaveRow={handleSaveRow}
            />
          ),
          charge: (
            <EditableCell
              rowIndex={rowIndex}
              accessorKey='charge'
              handleSaveRow={handleSaveRow}
            />
          ),
          total: (
            <input
              type='number'
              ref={inputRef}
              disabled
              value={totalText}
              style={{
                width: '64px',
                border: 'none',
                backgroundColor: 'transparent',
              }}
            />
          )
        }
      ]);
    }
  };

  const Icon = () => {
    return (
      <Box style={{ marginLeft: '12px' }}>
        <FontAwesomeIcon icon={faSortDown} />
        <FontAwesomeIcon
          icon={faSortUp}
          style={{ marginLeft: '-11px', marginBottom: '2px' }}
        />
      </Box>
    );
  };

  const CustomIcons: Partial<MRT_Icons> = {
    DragHandleIcon: () => <Icon />
  };

  const handleDeleteClick = (rowIndex: number) => {
    setIndex(rowIndex);
    setRefresh(true);
  };

  const handleSaveRow = (index: number, accessorKey: string, value: string) => {
    setRowIndexToUpdate(index);
    if (accessorKey === 'type') {
      setTypeText(value);
    }
    if (accessorKey === 'partDescription') {
      setPartDescriptionText(value);
    }
    if (accessorKey === 'mfgPartNumber') {
      setMfgPartNumberText(value);
    }
    if (accessorKey === 'qty') {
      setQtyText(Number(value));
    }
    if (accessorKey === 'charge') {
      setChargeText(Number(value));
    }
    if (accessorKey === 'total') {
      setTotalText(Number(value));
    }
  };

  useEffect(() => {
    if (rowIndexToUpdate > -1 && saveRow) {
      data[rowIndexToUpdate]['type'] = typeText;
      data[rowIndexToUpdate]['partDescription'] = partDescriptionText;
      data[rowIndexToUpdate]['mfgPartNumber'] = mfgPartNumberText;
      data[rowIndexToUpdate]['qty'] = qtyText;
      data[rowIndexToUpdate]['charge'] = chargeText;
      data[rowIndexToUpdate]['total'] = totalText;
      setData([...data]);
      setVendorsEstimateList([...data]);
      setSaveRow(false);
    }

    if (!saveRow) {
      setTypeText('');
      setPartDescriptionText('');
      setMfgPartNumberText('');
      setQtyText(0);
      setChargeText(0);
      setTotalText(0);
    }
  }, [saveRow]);

  return (
    <>
      {!refresh && (
        <MaterialReactTable
          enablePagination={false}
          autoResetPageIndex={false}
          columns={columns as any}
          data={data}
          enableRowOrdering
          enableSorting={false}
          muiTablePaperProps = {{
            elevation: 0,
            sx: {border: `2px solid ${theme.palette.charcoal[200]}`}
          }}
          muiTableBodyRowDragHandleProps={({ table }) => ({
            onDragEnd: () => {
              const { draggingRow, hoveredRow }: any = table.getState();
              if (hoveredRow && draggingRow) {
                data.splice(
                  hoveredRow.index,
                  0,
                  data.splice(draggingRow.index, 1)[0]
                );
                setData([...data]);
              }
            }
          })}
          renderBottomToolbarCustomActions={() => {
            return (
              <Box>
                <Button
                  variant='contained'
                  onClick={handleAddClick}
                  color='secondary'
                  startIcon={<AddIcon />}
                >
                  ADD LINE
                </Button>
              </Box>
            );
          }}
          enableRowActions
          positionActionsColumn='last'
          renderRowActions={({ row }: any) => (
            <Box
              style={{
                display: 'flex',
                justifyContent: 'right',
                width: '70px',
              }}
            >
              {row.original.charge?.props && (
                <IconButton onClick={() => setSaveRow(true)}>
                  <SaveIcon fontSize="small" />
                </IconButton>
              )}
              <IconButton
                onClick={() => {
                  handleDeleteClick(row.index);
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
          icons={CustomIcons}
          initialState={{
            density: 'compact'
          }}
          enableTopToolbar={false}
        />
      )}
    </>
  );
};

export default Table;
