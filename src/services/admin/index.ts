import { Profile } from '@components/admin-profile/profile/types/ProfileForm';
import { ILinearProgressWithLabel } from '@components/admin-profile/documents/types';
import Contact from '@components/admin-profile/contact/types';
import { axiosClient } from '..';

export const saveAdminProfileDetails = async (payload: Profile) => {
  try {
    const data = { details: { ...payload } };
    console.log('data', data);
    const response = await axiosClient.post<Profile>(`/VendorProfile`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const saveAdminContactDetails = async (payload: Contact) => {
  try {
    const data = { details: { ...payload } };
    const response = await axiosClient.post<Contact>(
      `/VendorProfile/AddContacts/123`,
      data
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAdminContactdetails = async () => {
  try {
    const response = await axiosClient.get<Contact>(
      `/VendorProfile/GetContactTypes`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const saveAdminDocumentDetails = async (
  payload: ILinearProgressWithLabel
) => {
  try {
    const data = { details: { ...payload } };
    const response = await axiosClient.post<ILinearProgressWithLabel>(
      `/VendorProfile/AddDocuments/`,
      data
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAdminDocumentsdetails = async () => {
  try {
    const response = await axiosClient.get<ILinearProgressWithLabel>(
      `/VendorProfile/GetDocumentTypes`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const saveAdminTermsDetails = async (payload: any) => {
  const data = { details: { ...payload } };

  try {
    const response = await axiosClient.post(`/VendorProfile`, data);

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
