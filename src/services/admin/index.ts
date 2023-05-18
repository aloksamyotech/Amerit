import { Profile } from '@components/admin-profile/profile/types/ProfileForm';
import { ILinearProgressWithLabel } from '@components/admin-profile/documents/types';
import Contact from '@components/admin-profile/contact/types';
import { axiosClient } from '..';

export const saveAdminProfileDetails = async (payload: Profile) => {
  const data = { detail: { ...payload } };
  const response = await axiosClient.post<Profile>('/VendorProfile', data);
  console.log(response);

  
  return response.data;
};

export const GetContactTypes = async () => {
  try {
    const response = await axiosClient.get(`/VendorProfile/GetContactTypes`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const AddContacts = async (payload: any, id: number) => {
  try {
    const data = { detail: { ...payload } };
    console.log(id);
    const response = await axiosClient.post(
      `/VendorProfile/AddContacts/${id}`,
      data
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveAdminContactDetails = async (payload: Contact) => {
  const data = { detail: { ...payload } };
  const response = await axiosClient.post<Contact>(
    '/VendorProfile/AddContacts/123',
    data
  );

  return response.data;
};

export const getAdminContactdetails = async () => {
  const response = await axiosClient.get<Contact>(
    '/VendorProfile/GetContactTypes'
  );

  return response.data;
};

export const saveAdminDocumentDetails = async (
  payload: ILinearProgressWithLabel
) => {
  const data = { detail: { ...payload } };
  const response = await axiosClient.post<ILinearProgressWithLabel>(
    `/VendorProfile/AddDocuments/${payload}`,
    data
  );

  return response.data;
};

export const getAdminDocumentsdetails = async () => {
  const response = await axiosClient.get<ILinearProgressWithLabel>(
    '/VendorProfile/GetDocumentTypes'
  );

  return response.data;
};

export const saveAdminTermsDetails = async (payload: any) => {
  const data = { detail: { ...payload } };
  const response = await axiosClient.post(`/VendorProfile`, data);

  return response.data;
};
