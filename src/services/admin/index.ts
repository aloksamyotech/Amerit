import { axiosClient } from '..';
import { ProfileForm } from '@components/admin-profile/profile/types/ProfileForm';
import { ILinearProgressWithLabel } from '@components/admin-profile/documents/types';
import IContact from '@components/admin-profile/contact/types';

('@pages/shop-admin/admin-profile');

export const saveAdminProfileDetails = async (payload: ProfileForm) => {
  console.log('request', payload);
  const data = { details: { ...payload } };
  const response = await axiosClient.post<ProfileForm>('/VendorProfile', data);
  console.log(response);

  return response.data;
};

export const saveAdminContactDetails = async (payload: IContact) => {
  console.log('request', payload);
  const data = { details: { ...payload } };
  const response = await axiosClient.post<IContact>(
    '/VendorProfile/AddContacts/123',
    data
  );
  console.log(response);

  return response.data;
};

export const getAdminContactdetails = async () => {
  const response = await axiosClient.get<IContact>(
    '/VendorProfile/GetContactTypes'
  );
  console.log(response);

  return response.data;
};

export const saveAdminDocumentDetails = async (
  payload: ILinearProgressWithLabel
) => {
  console.log('request', payload);
  const data = { details: { ...payload } };
  const response = await axiosClient.post<ILinearProgressWithLabel>(
    '/VendorProfile/AddDocuments/' + payload,
    data
  );
  console.log(response);

  return response.data;
};

export const getAdminDocumentsdetails = async () => {
  const response = await axiosClient.get<ILinearProgressWithLabel>(
    '/VendorProfile/GetDocumentTypes'
  );
  console.log(response);

  return response.data;
};

export const saveAdminTermsDetails = async (payload: any) => {
  console.log('request', payload);
  const data = { details: { ...payload } };
  const response = await axiosClient.post('/VendorProfile', data);
  console.log(response);

  return response.data;
};
