import axios from 'axios';
import { VMRS_MOCKS } from 'src/mocks/estimate';
import {
  CreateJobSection,
  Estimate,
  JobSectionEstimate
} from '@components/estimate/job-section/types';

const API_ENDPOINT = 'https://vendorportalbeaps-dev.azurewebsites.net/api'; // TODO: put this in a config

export const jobs = (id: string) => {
  if (typeof id === 'string') { // TODO - find a better way to handle this
    return axios
    .get(`${API_ENDPOINT}/RepairOrders/${id}/section`)
    .then((res) => res.data);
  }
};

export const types = () => {
  const url = `${API_ENDPOINT}/JobTypes/categories`;

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
      console.log(response);
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
    .delete(
      `${API_ENDPOINT}/RepairOrders/${id}/section/${sectionId}`
    )
    .then((res) => res.data);
};