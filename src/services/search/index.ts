import axios from 'axios';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { MOCK_VENDOR_REPAIR_ORDERS } from '@core/test/mocks';
import { Search } from 'src/Component/search/types';

const API_ENDPOINT = 'https://vendorportalbeaps-dev.azurewebsites.net/api'; // TODO: put this in a config

export const search = (params: Search) => {
  const { status, userID, vendorWorkOrderNbr, repairOrderNbr, location, vin } =
    params;
  let statusParam = '';
  if (status) {
    statusParam = `&status=${status}`;
  }

  let userIDParam = '';
  if (userID) {
    userIDParam = `&userID=${userID}`;
  }

  let vinParam = '';
  if (vin) {
    vinParam = `&vin=${vin}`;
  }

  let vendorWorkOrderNbrParam = '';
  if (vendorWorkOrderNbr) {
    vendorWorkOrderNbrParam = `&vendorWorkOrderNbr=${vendorWorkOrderNbr}`;
  }

  let repairOrderNbrParam = '';
  if (repairOrderNbr) {
    repairOrderNbrParam = `&repairOrderNumber=${repairOrderNbr}`;
  }

  let vendorShopParam = '';
  if (location) {
    vendorShopParam = `&location=${location}`;
  }

  const url = `${API_ENDPOINT}/RepairOrders?${statusParam}${userIDParam}${vendorWorkOrderNbrParam}${repairOrderNbrParam}${vendorShopParam}${vinParam}`;

  return axios
    .get(url)
    .then((res) => res.data)
    .then((res) =>
      // eslint-disable-next-line lines-around-comment
      // TODO: Remove this, it is adding a "unit" property,
      // this will be supplied by the API
      res.map((vendorRepairOrder: VendorRepairOrder) => ({
        ...vendorRepairOrder,
        unit: {
          vin: MOCK_VENDOR_REPAIR_ORDERS[0].unit.vin,
          make: '',
          model: '',
          year: ''
        }
      }))
    );
};

export const vendorRepairOrder = (id: string): Promise<VendorRepairOrder> => {
  const url = `${API_ENDPOINT}/RepairOrders/${id}`;

  return (
    axios
      .get(url)
      .then((res) => res.data)

      // TODO: Remove me, the API will provide a 'unit' property,
      // at the moment it doesn't
      .then((res) => ({
        ...res,
        unit: MOCK_VENDOR_REPAIR_ORDERS[0].unit
      }))
  );
};
