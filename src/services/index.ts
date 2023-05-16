import axios from "axios";

const API_ENDPOINT = 'https://vendor-portal.azure-api.net/api';

export const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
  },
});
