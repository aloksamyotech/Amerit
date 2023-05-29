import axios from 'axios';
import { VMRS_MOCKS } from 'src/mocks/estimate';
import {
  CreateJobSection,
  Estimate,
  JobSectionEstimate,
  JobSectionLine
} from '@components/estimate/job-section/types';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import { EstimateReOpen } from '@components/estimate-reopen/types';
import { REOPEN_REASONS } from 'src/constants';

const API_ENDPOINT = 'https://vendorportalbeaps-dev.azurewebsites.net/api'; // TODO: put this in a config

export const jobs = (id: string) => {
  if (typeof id === 'string') {
    // TODO - find a better way to handle this
    return axios
      .get(`${API_ENDPOINT}/RepairOrders/${id}/section`)
      .then((res) => res.data);
  }
};

export const types = () => {
  const url = `${API_ENDPOINT}/SectionTypes`;

  return axios.get(url).then((res) => res.data);
};

export const sectionTypes = (id: number) => {
  const url = `${API_ENDPOINT}/SectionTypes/${id}`;

  return axios.get(url).then((res) => res.data);
};

export const vmrs = () => {
  // const url = `${API_ENDPOINT}/jobs/vrms`;

  return VMRS_MOCKS;

  // return axios
  //   .get(url)
  //   .then((res) => res.data);
};

export const createJobSection = async (
  request: CreateJobSection,
  id: string
) => {
  console.log('request', request);

  return axios
    .post(`${API_ENDPOINT}/RepairOrders/${id}/section`, request)
    .then((response) => {
      return response.data;
    });
};

export const repairReasons = (jobType: string) => {
  return axios
    .get(`${API_ENDPOINT}/JobTypes/categories/${jobType || 'Towing'}/reasons`)
    .then((res) => res.data);
};

export const updateNotes = async (request: Estimate) => {
  const { id, tmsRepairOrderSectionId } = request;

  return axios
    .put(
      `${API_ENDPOINT}/RepairOrders/${id}/section/${tmsRepairOrderSectionId}`,
      request
    )
    .then((response) => {
      console.log(response);
    });
};

export const createJobSectionEstimate = async (request: JobSectionEstimate) => {
  console.log('request', request);

  // const response = await axiosClient.post<JobSectionEstimate>('/jobsectionestimate', request);

  // return response.data;
};

export const createJobSectionActual = async (request: JobSectionEstimate) => {
  console.log('request', request);

  // const response = await axiosClient.post<JobSectionEstimate>('/jobsectionestimate', request);

  // return response.data;
};

export const deleteJobSection = (id: number, sectionId: number) => {
  return axios
    .delete(`${API_ENDPOINT}/RepairOrders/${id}/section/${sectionId}`)
    .then((res) => res.data);
};

export const deleteJobSectionEstimateRow = (
  id: number,
  sectionId: number,
  lineId: number
) => {
  return axios
    .delete(
      `${API_ENDPOINT}/RepairOrders/${id}/section/${sectionId}/line/${lineId}`
    )
    .then((res) => res.data);
};

export const createJobSectionEstimateRow = async (
  request: JobSectionLine,
  sectionId: number,
  id: number
) => {
  return axios
    .post(`${API_ENDPOINT}/RepairOrders/${id}/section/${sectionId}/line`, {
      ...request
    })
    .then((response) => {
      console.log(response);
    });
};

// TODO: Endpoint requested in AVP-184
// TODO: I'm not sure at this stage what is being submitted, is it the
// repair order or an estimate?
export const submitEstimate = (vendorRepairOrder: VendorRepairOrder) => {
  return Promise.resolve(vendorRepairOrder);
};

export const reopenEstimateReasons = () => {
  return REOPEN_REASONS;
};

export const postReopenEstimate = (request: EstimateReOpen) => {
  console.log(request); // TODO: Need api for this
};
