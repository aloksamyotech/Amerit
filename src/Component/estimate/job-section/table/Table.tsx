import React, { useEffect, useState, useRef } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
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
import { EstimateTable, JobSectionLine } from '../types';
import {
  deleteJobSectionEstimateRow,
  createJobSectionEstimateRow
} from 'src/services/estimate';

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
  setTaxes,
  types,
  sectionId,
  vmrs
}: EstimateTable) => {
  const theme = useTheme();
  const router = useRouter();
  const { vendorRepairOrderId } = router.query;
  const [data, setData] = useState(estimateList || []);
  const [index, setIndex] = useState(-1);
  const [rowIndexToUpdate, setRowIndexToUpdate] = useState(-1);
  const [qtyText, setQtyText] = useState(0);
  const [chargeText, setChargeText] = useState(0);
  const [totalText, setTotalText] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [saveRow, setSaveRow] = useState(false);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [typeText, setTypeText] = useState('');
  const [partDescriptionText, setPartDescriptionText] = useState('');
  const [mfgPartNumberText, setMfgPartNumberText] = useState('');
  const [isRowValidationFulfilled, setIsRowValidationFulfilled] =
    useState(false);
  const [rowToDeleteId, setRowToDeleteId] = useState<number>();
  const [addRow, setAddRow] = useState<JobSectionLine>({} as JobSectionLine);
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate: deleteTableRow } = useMutation<any, Error>(async () => {
    return (
      rowToDeleteId &&
      (await deleteJobSectionEstimateRow(
        Number(vendorRepairOrderId || 0),
        sectionId || 0,
        rowToDeleteId
      ))
    );
  });

  const { mutate: postTableRow } = useMutation<any, Error>(async () => {
    return (
      addRow &&
      (await createJobSectionEstimateRow(
        addRow,
        sectionId || 0,
        Number(vendorRepairOrderId || 0)
      ))
    );
  });

  useEffect(() => {
    if (addRow) {
      postTableRow();
    }
  }, [addRow]);

  const typeRef = useRef<HTMLInputElement>(null);
  const partDescriptionTextRef = useRef<HTMLInputElement>(null);
  const mfgPartNumberTextRef = useRef<HTMLInputElement>(null);
  const qtyTextRef = useRef<HTMLInputElement>(null);
  const chargeTextRef = useRef<HTMLInputElement>(null);

  const triggerValidation = (
    reference: React.RefObject<HTMLInputElement>,
    field: string | number
  ): boolean => {
    if (reference) {
      if (reference.current) {
        if (field == '' || field == 0) {
          reference.current.style.display = 'block';
          reference.current.style.color = theme.palette.error.main;
          reference.current.style.border = 'none';
          reference.current.style.background = 'transparent';
          reference.current.value = 'Required';
          reference.current.style.fontWeight = '400';
          reference.current.style.fontSize = '12px';

          setIsRowValidationFulfilled(false);
          setSaveRow(false);

          return false;
        } else {
          reference.current.style.display = 'none';
          setIsRowValidationFulfilled(true);

          return true;
        }
      }
    }

    return false;
  };

  useEffect(() => {
    triggerValidation(typeRef, typeText);
  }, [typeText]);

  useEffect(() => {
    triggerValidation(partDescriptionTextRef, partDescriptionText);
  }, [partDescriptionText]);

  useEffect(() => {
    triggerValidation(mfgPartNumberTextRef, mfgPartNumberText);
  }, [mfgPartNumberText]);

  useEffect(() => {
    triggerValidation(qtyTextRef, qtyText);
  }, [qtyText]);

  useEffect(() => {
    triggerValidation(chargeTextRef, chargeText);
  }, [chargeText]);

  const saveTableRow = () => {
    const detail: JobSectionLine = {
      jobType: typeText,
      vrmsCode: vmrs,
      vrmsDescription: 'vrms description',
      partNumber: mfgPartNumberText,
      quantity: qtyText,
      charge: chargeText,
      total: totalText,
      partDescription: partDescriptionText
    };
    setAddRow(detail);
  };

  useEffect(() => {
    if (rowToDeleteId) {
      deleteTableRow();
    }
  }, [rowToDeleteId]);

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
    const parts = data.filter((x) => x.jobType === 'Parts');
    const shopSupply = data.filter((x) => x.jobType === 'Shop Supplies');
    const fees = data.filter((x) => x.jobType === 'Fees');
    const labor = data.filter((x) => x.jobType === 'Labor');
    const sublet = data.filter((x) => x.jobType === 'Sublet');
    const freight = data.filter((x) => x.jobType === 'Freight');
    const towing = data.filter((x) => x.jobType === 'Towing');
    const travel = data.filter((x) => x.jobType === 'Travel');
    const taxes = data.filter((x) => x.jobType === 'Taxes');

    let partsTotal = 0;
    let shopSuppliesTotal = 0;
    let feesTotal = 0;
    let laborTotal = 0;
    let subletTotal = 0;
    let freightTotal = 0;
    let towingTotal = 0;
    let travelTotal = 0;
    let taxesTotal = 0;

    parts.forEach((x) => {
      partsTotal += Number(x.quantity) * Number(x.charge);
    });
    fees.forEach((x) => {
      feesTotal += Number(x.quantity) * Number(x.charge);
    });
    shopSupply.forEach((x) => {
      shopSuppliesTotal += Number(x.quantity) * Number(x.charge);
    });
    labor.forEach((x) => {
      laborTotal += Number(x.quantity) * Number(x.charge);
    });
    sublet.forEach((x) => {
      subletTotal += Number(x.quantity) * Number(x.charge);
    });
    freight.forEach((x) => {
      freightTotal += Number(x.quantity) * Number(x.charge);
    });
    towing.forEach((x) => {
      towingTotal += Number(x.quantity) * Number(x.charge);
    });
    travel.forEach((x) => {
      travelTotal += Number(x.quantity) * Number(x.charge);
    });
    taxes.forEach((x) => {
      taxesTotal += Number(x.quantity) * Number(x.charge);
    });

    setParts(partsTotal);
    setShopSupplies(shopSuppliesTotal);
    setFees(feesTotal);
    setLabor(laborTotal);
    setSublet(subletTotal);
    setFreight(freightTotal);
    setTowing(towingTotal);
    setTravel(travelTotal);
    setTaxes(taxesTotal);
  }, [data]);

  const isEditableElementExists = () => {
    const isElement = data.some(
      (estimateItem: any) => estimateItem?.charge?.props
    );

    return isElement;
  };

  const handleAddClick = () => {
    if (!isEditableElementExists()) {
      setDisableButton(true);
      const rowIndex = data && data.length ? data.length : 0;
      setData([
        ...data,
        {
          jobType: (
            <Box>
              <EditableCell
                rowIndex={rowIndex}
                accessorKey='jobType'
                handleSaveRow={handleSaveRow}
                types={types}
              />
              <Box sx={{ height: '12px' }}>
                <input
                  type={'text'}
                  ref={typeRef}
                  value=''
                  style={{ display: 'none', width: '58px' }}
                  disabled
                />
              </Box>
            </Box>
          ),
          partDescription: (
            <Box>
              <EditableCell
                rowIndex={rowIndex}
                accessorKey='partDescription'
                handleSaveRow={handleSaveRow}
              />
              <Box sx={{ height: '12px' }}>
                <input
                  type={'text'}
                  ref={partDescriptionTextRef}
                  value=''
                  disabled
                  style={{ display: 'none' }}
                />
              </Box>
            </Box>
          ),
          partNumber: (
            <Box>
              <EditableCell
                rowIndex={rowIndex}
                accessorKey='partNumber'
                handleSaveRow={handleSaveRow}
              />
              <Box sx={{ height: '12px' }}>
                <input
                  type={'text'}
                  ref={mfgPartNumberTextRef}
                  value=''
                  disabled
                  style={{ display: 'none' }}
                />
              </Box>
            </Box>
          ),
          quantity: (
            <Box>
              <EditableCell
                rowIndex={rowIndex}
                accessorKey='qty'
                handleSaveRow={handleSaveRow}
              />
              <Box sx={{ height: '12px' }}>
                <input
                  type={'text'}
                  ref={qtyTextRef}
                  value=''
                  style={{ display: 'none', width: '58px' }}
                  disabled
                />
              </Box>
            </Box>
          ),
          charge: (
            <Box>
              <EditableCell
                rowIndex={rowIndex}
                accessorKey='charge'
                handleSaveRow={handleSaveRow}
              />
              <Box sx={{ height: '12px' }}>
                <input
                  type={'text'}
                  ref={chargeTextRef}
                  value=''
                  style={{ display: 'none', width: '58px' }}
                  disabled
                />
              </Box>
            </Box>
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
                backgroundColor: 'transparent'
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
    const { id } = data[rowIndex];
    setRowToDeleteId(id || 0);
    setIndex(rowIndex);
    setRefresh(true);
    setDisableButton(false);
  };

  const handleSaveRow = (index: number, accessorKey: string, value: string) => {
    setRowIndexToUpdate(index);
    if (accessorKey === 'jobType') {
      setTypeText(value);
    }
    if (accessorKey === 'partDescription') {
      setPartDescriptionText(value);
    }
    if (accessorKey === 'partNumber') {
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
    if (isRowValidationFulfilled) {
      if (rowIndexToUpdate > -1 && saveRow) {
        data[rowIndexToUpdate]['jobType'] = typeText;
        data[rowIndexToUpdate]['partDescription'] = partDescriptionText;
        data[rowIndexToUpdate]['partNumber'] = mfgPartNumberText;
        data[rowIndexToUpdate]['quantity'] = qtyText;
        data[rowIndexToUpdate]['charge'] = chargeText;
        data[rowIndexToUpdate]['total'] = totalText;
        setData([...data]);
        setVendorsEstimateList([...data]);
        setSaveRow(false);
        saveTableRow();
      }

      if (!saveRow) {
        setTypeText('');
        setPartDescriptionText('');
        setMfgPartNumberText('');
        setQtyText(0);
        setChargeText(0);
        setTotalText(0);
      }
    }
  }, [saveRow]);

  const handleSaveClick = () => {
    const activeValidations = [];
    let isFulfilled: boolean = false;

    isFulfilled = triggerValidation(typeRef, typeText);
    if (isFulfilled) activeValidations.push(isFulfilled);

    isFulfilled = triggerValidation(
      partDescriptionTextRef,
      partDescriptionText
    );
    if (isFulfilled) activeValidations.push(isFulfilled);

    isFulfilled = triggerValidation(mfgPartNumberTextRef, mfgPartNumberText);
    if (isFulfilled) activeValidations.push(isFulfilled);

    isFulfilled = triggerValidation(qtyTextRef, qtyText);
    if (isFulfilled) activeValidations.push(isFulfilled);

    isFulfilled = triggerValidation(chargeTextRef, chargeText);
    if (isFulfilled) activeValidations.push(isFulfilled);

    if (activeValidations.length === 5) {
      setSaveRow(true);
      setDisableButton(false);
    }
  };

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
          muiTablePaperProps={{
            elevation: 0,
            sx: { border: `2px solid ${theme.palette.charcoal[200]}` }
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
                  disabled={disableButton}
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
                width: '70px'
              }}
            >
              {row.original.charge?.props && (
                <IconButton onClick={handleSaveClick}>
                  <SaveIcon fontSize='small' />
                </IconButton>
              )}
              <IconButton
                onClick={() => {
                  handleDeleteClick(row.index);
                }}
              >
                <DeleteIcon fontSize='small' />
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
