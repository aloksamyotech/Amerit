import { Profile } from '@components/admin-profile/profile/types/ProfileForm';
import { ILinearProgressWithLabel } from '@components/admin-profile/documents/types';
import { axiosClient } from '..';
import axios from 'axios';

export const saveAdminProfileDetails = async (payload: Profile) => {
  try {
    const data = { detail: { ...payload } };
    const response = await axiosClient.post<Profile>(`/VendorProfile`, data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveAdminContactDetails = async (payload: any, id: number) => {
  try {
    const data = { detail: { ...payload } };
    const response = await axiosClient.post(
      `/VendorProfile/AddContacts/${id}`,
      data
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAdminContactTypes = async () => {
  try {
    const response = await axiosClient.get(`/VendorProfile/GetContactTypes`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveAdminDocumentDetails = async (
  payload: ILinearProgressWithLabel
) => {
  try {
    const data = { detail: { ...payload } };
    const response = await axiosClient.post<ILinearProgressWithLabel>(
      `/VendorProfile/AddDocuments/`,
      data
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAdminDocumentsDetails = async () => {
  try {
    const response = await axiosClient.get<ILinearProgressWithLabel>(
      `/VendorProfile/GetDocumentTypes`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const saveAdminTermsDetails = async (payload: any) => {
//   try {
//     const response = await axiosClient.post(
//       `/VendorProfile/TermsAgreed/${payload.id}?agreed=${payload.agreed}`
//     );

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const saveAdminDocumentDetails = async (
//   payload: ILinearProgressWithLabel
// ) => {
//   try {
//     const data = { detail: { ...payload } };
//     const response = await axiosClient.post<ILinearProgressWithLabel>(
//       `/VendorProfile/AddDocuments/`,
//       data
//     );

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const saveAdminTermsDetails = async (payload: any) => {
  try {
    const response = await axiosClient.post(
      `/VendorProfile/TermsAgreed/${payload.id}?agreed=${payload.agreed}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const API_ENDPOINT = 'https://vendorportalbeaps-dev.azurewebsites.net/api';

export const axiosUplod = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "accept": "*/*",
    "Content-Type": "multipart/form-data"
  }
});
export const saveDocumentType = async (payload: any, id: number) => {
  try {
    console.log("flaskdfakjsfldjkf")
    console.log(payload);
    const response = await axiosUplod.post(
      `/VendorProfile/AddDocuments/${id}`,
      payload
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
