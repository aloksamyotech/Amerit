import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from 'react-query';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Grid, Tabs } from '@mui/material';
import useJobSection from '@hooks/job-section';
import LineItemsSummary from '@components/common/line-items-summary/LineItemsSummary';
import {
  JobSectionEstimate,
  JobType,
  LineItem,
  VendorEstimateType
} from '@components/estimate/job-section/types';
import { VENDOR_ACTUAL_MOCKS } from 'src/mocks/estimate';
import {
  createJobSectionEstimate,
  createJobSectionActual,
  types,
  sectionTypes,
} from 'src/services/estimate';
import Table from '../table';
import { TableContext } from '../VroLinesProvider';

export default function TabsControl({
  type,
  setTotalEstimate,
  setTotalActual,
  sectionId,
  vmrs,
}: VendorEstimateType) {
  const [value, setValue] = useState('1');
  const [sectionType, setSectionType] = useState<JobType>();
  const [vendorsEstimateList, setVendorsEstimateList] = useState<LineItem[]>(
    []
  );
  const [vendorsActualList, setVendorsActualList] = useState<LineItem[]>([]);
  const { mutate: sectionTypeMutate, data: sectionTypesData } = useMutation<
    any,
    Error
  >(async () => {
    return sectionType && (await sectionTypes(sectionType.id));
  });
  const { data: typesData } = useQuery(['types'], types);
  const { data } = useContext(TableContext);

  useEffect(() => {
    if (type) {
      const sectionTypeValue: JobType = typesData?.find(
        (x: JobType) => x.name === type.trim()
      );
      setSectionType(sectionTypeValue);
    }
  }, [type, typesData]);

  useEffect(() => {
    if (sectionType) {
      sectionTypeMutate();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionType]);

  // TODO: This whole area needs a refactor. I am not doing it now because Umer is
  // also working in this area and I don't want to cause conflicts. So for now everything
  // will be lumped into here.
  // We need something along the lines of an Estimate (that is used within the first
  // TabPanel) component that obtains its data from the API, makes its own call to
  // useJobSection, calls mutations to the API etc. This will then allow us to have
  // an Actuals component that does similar things, but for its own concerns.

  const {
    availableLineItemTypes: availableLineItemTypesEstimate,
    sectionTotal: sectionTotalEstimate,
    labor: laborEstimate,
    setLabor: setLaborEstimate,
    sublet: subletEstimate,
    setSublet: setSubletEstimate,
    freight: freightEstimate,
    setFreight: setFreightEstimate,
    towing: towingEstimate,
    setTowing: setTowingEstimate,
    travel: travelEstimate,
    setTravel: setTravelEstimate,
    fees: feesEstimate,
    setFees: setFeesEstimate,
    parts: partsEstimate,
    setParts: setPartsEstimate,
    shopSupplies: shopSuppliesEstimate,
    setShopSupplies: setShopSuppliesEstimate
  } = useJobSection(type!, setTotalEstimate!);

  const {
    availableLineItemTypes: availableLineItemTypesActual,
    sectionTotal: sectionTotalActual,
    labor: laborActual,
    setLabor: setLaborActual,
    sublet: subletActual,
    setSublet: setSubletActual,
    freight: freightActual,
    setFreight: setFreightActual,
    towing: towingActual,
    setTowing: setTowingActual,
    travel: travelActual,
    setTravel: setTravelActual,
    fees: feesActual,
    setFees: setFeesActual,
    parts: partsActual,
    setParts: setPartsActual,
    shopSupplies: shopSuppliesActual,
    setShopSupplies: setShopSuppliesActual
  } = useJobSection(type!, setTotalActual!);

  const [estimatePayLoad, setEstimatePayload] = useState<JobSectionEstimate>();
  const [actualPayLoad, setActualPayload] = useState<JobSectionEstimate>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { mutate: postJobSectionEstimate } = useMutation<any, Error>(
    async () => {
      return (
        estimatePayLoad && (await createJobSectionEstimate(estimatePayLoad))
      );
    }
  );

  const { mutate: postJobSectionActual } = useMutation<any, Error>(async () => {
    return actualPayLoad && (await createJobSectionActual(actualPayLoad));
  });

  useEffect(() => {
    if (estimatePayLoad) {
      postJobSectionEstimate();
    }
  }, [estimatePayLoad]);

  useEffect(() => {
    if (actualPayLoad) {
      postJobSectionActual();
    }
  }, [actualPayLoad]);

  const handleEstimateSaveButtonClick = () => {
    setEstimatePayload({
      vendorsEstimateList,
      labor: laborEstimate,
      sublet: subletEstimate,
      freight: freightEstimate,
      towing: towingEstimate,
      travel: travelEstimate,
      fees: feesEstimate,
      parts: partsEstimate,
      shopSupplies: shopSuppliesEstimate
    });
  };

  const handleActualSaveButtonClick = () => {
    setActualPayload({
      vendorsEstimateList: vendorsActualList,
      labor: laborActual,
      sublet: subletActual,
      freight: freightActual,
      towing: towingActual,
      travel: travelActual,
      fees: feesActual,
      parts: partsActual,
      shopSupplies: shopSuppliesActual
    });
  };

  const vendorEstimateItem = {
    labor: laborEstimate,
    parts: partsEstimate,
    shopSupplies: shopSuppliesEstimate,
    fees: feesEstimate,
    sublet: subletEstimate,
    freight: freightEstimate,
    towing: towingEstimate,
    travel: travelEstimate,
    sectionTotal: sectionTotalEstimate
  };

  const vendorActualItem = {
    labor: laborActual,
    parts: partsActual,
    shopSupplies: shopSuppliesActual,
    fees: feesActual,
    sublet: subletActual,
    freight: freightActual,
    towing: towingActual,
    travel: travelActual,
    sectionTotal: sectionTotalActual
  };

  const tableRows = data?.map((row: any) => { // TODO - Need to check with BE about the type
    const {
      id,
      vroSectionId,
      lineDesc1PartNbr,
      lineDesc2MfgPartDesc,
      vendEstQty,
      vendEstUnitAmt,
      vroLineTypeCode
    } = row;

    return (
      {
        type: vroLineTypeCode,
        partDescription: lineDesc1PartNbr,
        mfgPartNumber: lineDesc2MfgPartDesc,
        qty: vendEstQty,
        charge: vendEstUnitAmt,
        total: vendEstQty * vendEstUnitAmt,
        vroSectionId,
        id
      }
    )
  });

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            indicatorColor='secondary'
            textColor='primary'
            onChange={handleChange}
            aria-label='disabled tabs example'
          >
            <Tab
              sx={{ fontWeight: '1000' }}
              label='VENDOR ESTIMATE'
              value='1'
            />
            <Tab
              sx={{ fontWeight: '1000' }}
              label='COMPLETION ACTUAL'
              value='2'
              // eslint-disable-next-line lines-around-comment
              // TODO: According to AVP-190 this should be enabled when the
              // VRO status is "Estimate approved" & a PO has been assigned
              disabled={false}
            />
          </Tabs>
        </Box>
        <TabPanel value='1' style={{ padding: 0 }}>
          <Grid container>
            <Grid item xs={12}>
              <LineItemsSummary
                vendorEstimateItem={vendorEstimateItem}
                availableLineItemTypes={availableLineItemTypesEstimate}
              />
              <Box>
                <Table
                  types={sectionTypesData}
                  setVendorsEstimateList={setVendorsEstimateList}
                  estimateList={tableRows}
                  setParts={setPartsEstimate}
                  setShopSupplies={setShopSuppliesEstimate}
                  setFees={setFeesEstimate}
                  setLabor={setLaborEstimate}
                  setSublet={setSubletEstimate}
                  setFreight={setFreightEstimate}
                  setTowing={setTowingEstimate}
                  setTravel={setTravelEstimate}
                  sectionId={sectionId}
                  vmrs={vmrs}
                />
              </Box>
              <Box mt={2} display='flex' justifyContent='right'>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleEstimateSaveButtonClick}
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value='2' style={{ padding: 0 }}>
          <Grid container>
            <Grid item xs={12}>
              <LineItemsSummary
                vendorEstimateItem={vendorActualItem}
                availableLineItemTypes={availableLineItemTypesActual}
              />
              <Box>
                <Table
                  types={typesData}
                  setVendorsEstimateList={setVendorsActualList}
                  estimateList={VENDOR_ACTUAL_MOCKS}
                  setParts={setPartsActual}
                  setShopSupplies={setShopSuppliesActual}
                  setFees={setFeesActual}
                  setLabor={setLaborActual}
                  setSublet={setSubletActual}
                  setFreight={setFreightActual}
                  setTowing={setTowingActual}
                  setTravel={setTravelActual}
                  availableLineItemTypes={availableLineItemTypesActual}
                />
              </Box>
              <Box mt={2} display='flex' justifyContent='right'>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleActualSaveButtonClick}
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
