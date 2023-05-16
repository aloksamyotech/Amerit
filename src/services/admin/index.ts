import { Profile } from '@components/admin-profile/profile/types/ProfileForm';
import { ILinearProgressWithLabel } from '@components/admin-profile/documents/types';
import Contact from '@components/admin-profile/contact/types';
import { axiosClient } from '..';

export const saveAdminProfileDetails = async (payload: Profile) => {
  const data = { detail: { ...payload } };
  const response = await axiosClient.post<Profile>('/VendorProfile', data);

  return response.data;
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
  const response = await axiosClient.post('/VendorProfile', data);

  return response.data;
};
