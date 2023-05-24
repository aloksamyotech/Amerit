import axios from 'axios';

const API_ENDPOINT = 'https://vendorportalbeaps-dev.azurewebsites.net/api';

export const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-type': 'multipart/form-data'
  }
});
