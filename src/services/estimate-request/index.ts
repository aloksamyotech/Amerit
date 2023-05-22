import axios, { AxiosResponse } from 'axios';
import { EstimateAccept } from '@components/estimate-accept/types';
import { EstimateDecline } from '@components/estimate-decline/types';

const API_ENDPOINT = 'https://vendorportalbeaps-dev.azurewebsites.net/api'; // TODO: put this in a config

export const accept = (
  acceptDetails: EstimateAccept,
  vendorRepairOrderId: string
) => {
  const { message, vendorWorkOrderNumber, vendorShop } = acceptDetails;
  const payload = {
    vendorShop,
    availableDateTime: '2023-05-18T18:32:22.942Z', // TODO: What to put here?
    vendorWorkOrderNumber,
    message
  };

  return axios.post(
    `${API_ENDPOINT}/RepairOrders/${vendorRepairOrderId}:accept`,
    payload
  );
};

export const decline = (
  estimateDecline: EstimateDecline,
  vendorRepairOrderId: string
): Promise<AxiosResponse<any, any>> => {
  const { code, message } = estimateDecline;
  const payload = {
    code,
    message,
    vendorShopId: '1' // TODO: Check where this is supposed to come from
  };

  return axios.post(
    `${API_ENDPOINT}/RepairOrders/${vendorRepairOrderId}:decline`,
    payload
  );
};
